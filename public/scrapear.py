
import asyncio
import re
import json
from pathlib import Path
from playwright.async_api import async_playwright


URLS = [
    "https://www.fragrantica.es/perfume/Armaf/Tag-Her-Donna-Di-Terra-90409.html",
    # Agregá acá las URLs que quieras procesar.
]

ARCHIVO_JS = Path("acordes.js")


class BloqueoCloudflare(Exception):
    pass


def cargar_guardados():
    """Lee los perfumes guardados en acordes.js."""
    if not ARCHIVO_JS.exists():
        return {}

    contenido = ARCHIVO_JS.read_text(encoding="utf-8")

    inicio = contenido.find("const perfumes =")
    if inicio == -1:
        raise RuntimeError(
            "No se reconoce el formato de acordes.js. "
            "No se modificó el archivo."
        )

    inicio = contenido.find("[", inicio)
    fin = contenido.rfind("]")

    if inicio == -1 or fin == -1 or fin < inicio:
        raise RuntimeError(
            "El array de perfumes está incompleto. "
            "No se modificó el archivo."
        )

    bloque = contenido[inicio:fin + 1]

    # Convierte las claves del formato JS a claves JSON.
    bloque = re.sub(
        r'(?m)^(\s*)(nombre|url|indicadores|acordes)\s*:',
        r'\1"\2":',
        bloque,
    )

    # Elimina comas finales antes de cerrar objetos o arrays.
    bloque = re.sub(r",(\s*[}\]])", r"\1", bloque)

    try:
        perfumes = json.loads(bloque)
    except json.JSONDecodeError as e:
        raise RuntimeError(
            f"No se pudo interpretar acordes.js: {e}. "
            "No se modificó el archivo."
        )

    return {
        perfume["url"]: perfume
        for perfume in perfumes
        if perfume.get("url")
    }


def guardar_resultados(resultados):
    """Guarda todos los perfumes en el formato JS original."""
    ARCHIVO_JS.write_text(
        generar_salida(list(resultados.values())),
        encoding="utf-8",
    )


async def detectar_bloqueo(page, response):
    if response and response.status in (403, 429, 503):
        raise BloqueoCloudflare(
            f"El servidor respondió HTTP {response.status}"
        )

    try:
        titulo = (await page.title()).lower()
        texto = (
            await page.locator("body").inner_text(timeout=5000)
        ).lower()
    except Exception:
        return

    señales = [
        "just a moment",
        "attention required",
        "verify you are human",
        "checking your browser",
        "sorry, you have been blocked",
    ]

    if any(s in titulo or s in texto for s in señales):
        raise BloqueoCloudflare(
            "Se detectó una página de verificación o bloqueo."
        )


async def extraer_perfume(page, url):
    print(f"\nScrapeando: {url}")

    response = await page.goto(
        url,
        wait_until="domcontentloaded",
        timeout=60000,
    )

    await detectar_bloqueo(page, response)

    try:
        await page.wait_for_selector(
            'h1[itemprop="name"]',
            timeout=30000,
        )
    except Exception:
        await detectar_bloqueo(page, response)
        raise RuntimeError("No apareció el nombre del perfume.")

    await page.wait_for_timeout(2500)

    # 1. Nombre
    nombre = (
        await page.locator('h1[itemprop="name"]').first.inner_text()
    ).strip()

    # 2. Indicadores: busca la tarjeta correcta sin depender
    # exclusivamente de que sea la segunda tarjeta.
    indicadores = []

    tarjetas = page.locator("div.tw-rating-card")

    etiquetas = {
        "invierno",
        "primavera",
        "verano",
        "otoño",
        "otono",
        "día",
        "dia",
        "noche",
    }

    for i in range(await tarjetas.count()):
        tarjeta = tarjetas.nth(i)
        texto_tarjeta = (await tarjeta.inner_text()).lower()

        presentes = {
            etiqueta
            for etiqueta in etiquetas
            if etiqueta in texto_tarjeta
        }

        # Tiene que aparecer el conjunto de las seis categorías.
        tiene_estaciones = (
            "invierno" in texto_tarjeta
            and "primavera" in texto_tarjeta
            and "verano" in texto_tarjeta
            and ("otoño" in texto_tarjeta or "otono" in texto_tarjeta)
        )
        tiene_momentos = (
            ("día" in texto_tarjeta or "dia" in texto_tarjeta)
            and "noche" in texto_tarjeta
        )

        if not (tiene_estaciones and tiene_momentos):
            continue

        items = tarjeta.locator(
            'xpath=.//div[contains(@class, "justify-evenly") '
            'and contains(@class, "gap-2")]/div'
        )

        encontrados = []

        for j in range(await items.count()):
            item = items.nth(j)

            nombre_loc = item.locator("xpath=./span")
            valor_loc = item.locator("xpath=./div[last()]/span")

            if not await nombre_loc.count():
                continue

            if not await valor_loc.count():
                continue

            nombre_indicador = (
                await nombre_loc.first.inner_text()
            ).strip()

            valor_indicador = (
                await valor_loc.first.inner_text()
            ).strip()

            if nombre_indicador and valor_indicador:
                encontrados.append([
                    nombre_indicador,
                    valor_indicador,
                ])

        if len(encontrados) == 6:
            indicadores = encontrados
            break

    print(f"Indicadores encontrados: {len(indicadores)}")

    # 3. Acordes
    acordes = []

    elementos = page.locator(
        'div[style*="width:"][class*="rounded-br-lg"]'
    )

    for i in range(await elementos.count()):
        elemento = elementos.nth(i)

        estilo = await elemento.get_attribute("style") or ""
        texto = (await elemento.inner_text()).strip()

        match = re.search(r"width:\s*([\d.]+)%", estilo)

        if match and texto:
            acordes.append([
                texto.capitalize(),
                int(float(match.group(1))),
            ])

    print(f"Perfume: {nombre}")
    print(f"Acordes encontrados: {len(acordes)}")

    if len(indicadores) != 6:
        print("AVISO: no se encontraron los 6 indicadores.")

    if not acordes:
        print("AVISO: no se encontraron acordes.")

    return {
        "nombre": nombre,
        "url": url,
        "indicadores": indicadores,
        "acordes": acordes,
    }


def generar_salida(perfumes):
    bloques = ["const perfumes = ["]

    for perfume in perfumes:
        bloques.append("  {")
        bloques.append(
            "    nombre: "
            + json.dumps(perfume["nombre"], ensure_ascii=False)
            + ","
        )
        bloques.append(
            "    url: "
            + json.dumps(perfume["url"], ensure_ascii=False)
            + ","
        )

        bloques.append("    indicadores: [")

        for nombre, valor in perfume["indicadores"]:
            bloques.append(
                "      ["
                + json.dumps(nombre, ensure_ascii=False)
                + ", "
                + json.dumps(valor, ensure_ascii=False)
                + "],"
            )

        bloques.append("    ],")
        bloques.append("    acordes: [")

        for nombre, valor in perfume["acordes"]:
            bloques.append(
                "      ["
                + json.dumps(nombre, ensure_ascii=False)
                + f", {valor}],"
            )

        bloques.append("    ],")
        bloques.append("  },")

    bloques.append("];")

    return "\n".join(bloques) + "\n"


async def main():
    try:
        resultados = cargar_guardados()
    except RuntimeError as e:
        print(e)
        return

    print(f"Perfumes ya guardados: {len(resultados)}")

    async with async_playwright() as p:
        context = await p.chromium.launch_persistent_context(
            user_data_dir="perfil_brave_fragrantica",
            executable_path=(
                r"C:\Program Files\BraveSoftware"
                r"\Brave-Browser\Application\brave.exe"
            ),
            headless=False,
        )

        try:
            page = (
                context.pages[0]
                if context.pages
                else await context.new_page()
            )

            for url in URLS:
                guardado = False

                for intento in range(3):
                    try:
                        perfume = await extraer_perfume(page, url)

                        # Protección: no guardar resultados incompletos.
                        if len(perfume["indicadores"]) != 6:
                            print(
                                "No se guarda: faltan indicadores. "
                                "Se conservan los datos anteriores."
                            )
                            break

                        if not perfume["acordes"]:
                            print(
                                "No se guarda: no se encontraron acordes."
                            )
                            break

                        # Actualiza solamente la URL procesada.
                        resultados[url] = perfume

                        guardar_resultados(resultados)

                        guardado = True
                        print("Guardado en acordes.js")
                        break

                    except BloqueoCloudflare as e:
                        print(
                            f"Bloqueo, intento {intento + 1}/3: {e}"
                        )

                        if intento < 2:
                            espera = 15 * (intento + 1)
                            print(
                                f"Esperando {espera} segundos..."
                            )
                            await asyncio.sleep(espera)
                        else:
                            print("Se pasa a la siguiente URL.")

                    except Exception as e:
                        print(f"Intento {intento + 1}/3: {e}")

                        if intento < 2:
                            await asyncio.sleep(5 * (intento + 1))

                if not guardado:
                    print(f"Sin cambios para: {url}")

                await asyncio.sleep(8)

        finally:
            await context.close()

    print(f"\nTotal de perfumes conservados: {len(resultados)}")
    print(f"Archivo: {ARCHIVO_JS.resolve()}")


asyncio.run(main())