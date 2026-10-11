
import asyncio
import json
import re
from pathlib import Path

from playwright.async_api import async_playwright


URLS = [
    "https://www.fragrantica.es/perfume/Lattafa-Perfumes/Yara-76880.html",
    # Agregá acá el resto de tus URLs.
]

ARCHIVO_JS = Path("acordes.js")


def js_string(valor):
    return json.dumps(valor, ensure_ascii=False)


def generar_salida(perfumes):
    lineas = ["const perfumes = ["] 

    for perfume in perfumes:
        lineas.append("  {")
        lineas.append(f"    nombre: {js_string(perfume['nombre'])},")
        lineas.append(f"    url: {js_string(perfume['url'])},")
        lineas.append("    indicadores: [")

        for nombre, valor in perfume["indicadores"]:
            lineas.append(
                f"      [{js_string(nombre)}, {js_string(valor)}],"
            )

        lineas.append("    ],")
        lineas.append("    acordes: [")

        for nombre, porcentaje in perfume["acordes"]:
            lineas.append(
                f"      [{js_string(nombre)}, {porcentaje}],"
            )

        lineas.append("    ],")
        lineas.append("  },")

    lineas.append("];")
    return "\n".join(lineas) + "\n"


async def extraer_indicadores(page):
    indicadores = []

    # Versión original: buscar el segundo tw-rating-card.
    tarjetas = page.locator("div.tw-rating-card")

    if await tarjetas.count() < 2:
        print("No se encontraron los dos bloques de indicadores.")
        return indicadores

    tarjeta = tarjetas.nth(1)

    contenedor = tarjeta.locator(
        'xpath=.//div[@class="flex justify-evenly gap-2 md:gap-4"]'
    )

    if await contenedor.count() == 0:
        print("No se encontró el contenedor de indicadores.")
        return indicadores

    items = contenedor.first.locator("xpath=./div")

    traducciones = {
        "invierno": "invierno",
        "winter": "invierno",
        "hiver": "invierno",
        "primavera": "Primavera",
        "spring": "Primavera",
        "printemps": "Primavera",
        "verano": "Verano",
        "summer": "Verano",
        "été": "Verano",
        "ete": "Verano",
        "otoño": "Otoño",
        "otono": "Otoño",
        "autumn": "Otoño",
        "fall": "Otoño",
        "automne": "Otoño",
        "día": "Día",
        "dia": "Día",
        "day": "Día",
        "jour": "Día",
        "noche": "Noche",
        "night": "Noche",
        "nuit": "Noche",
    }

    for i in range(await items.count()):
        item = items.nth(i)

        try:
            nombre_original = (
                await item.locator("xpath=.//span").first.inner_text()
            ).strip()

            valor_locator = item.locator(
                "xpath=./div[last()]/span"
            )

            if await valor_locator.count() == 0:
                continue

            valor = (await valor_locator.first.inner_text()).strip()
            nombre = traducciones.get(nombre_original.lower().strip())

            if nombre and valor:
                indicadores.append([nombre, valor])

        except Exception as error:
            print(f"Error leyendo indicador {i + 1}: {error}")

    print(f"Indicadores encontrados: {len(indicadores)}/6")
    return indicadores


async def extraer_acordes(page):
    acordes = []

    elementos = page.locator(
        'div[style*="width:"][class*="rounded-br-lg"]'
    )

    for i in range(await elementos.count()):
        elemento = elementos.nth(i)

        try:
            nombre = (await elemento.inner_text()).strip()
            estilo = await elemento.get_attribute("style") or ""
        except Exception:
            continue

        match = re.search(
            r"width\s*:\s*([\d.]+)\s*%",
            estilo,
            re.IGNORECASE,
        )

        if not nombre or not match:
            continue

        if any(a[0].lower() == nombre.lower() for a in acordes):
            continue

        acordes.append([nombre, float(match.group(1))])

    return acordes


async def extraer_perfume(page, url):
    print(f"\nAbriendo: {url}")

    try:
        await page.goto(
            url,
            wait_until="domcontentloaded",
            timeout=60000,
        )
        await page.wait_for_timeout(2500)

        titulo = page.locator('//h1[@itemprop="name"]').first
        await titulo.wait_for(state="visible", timeout=15000)
        nombre = (await titulo.inner_text()).strip()

        indicadores = await extraer_indicadores(page)
        acordes = await extraer_acordes(page)

        print(f"Perfume: {nombre}")
        print(f"Acordes encontrados: {len(acordes)}")

        return {
            "nombre": nombre,
            "url": url,
            "indicadores": indicadores,
            "acordes": acordes,
        }

    except Exception as error:
        print(f"Error con {url}: {error}")
        return None


async def main():
    perfumes = []

    async with async_playwright() as p:
        contexto = await p.chromium.launch_persistent_context(
            user_data_dir="perfil_fragrantica",
            headless=False,
            viewport={"width": 1366, "height": 900},
        )

        page = (
            contexto.pages[0]
            if contexto.pages
            else await contexto.new_page()
        )

        try:
            for url in URLS:
                perfume = await extraer_perfume(page, url)

                if perfume:
                    perfumes.append(perfume)

                await page.wait_for_timeout(2000)

        finally:
            await contexto.close()

    if perfumes:
        ARCHIVO_JS.write_text(
            generar_salida(perfumes),
            encoding="utf-8",
        )

        print(f"\nArchivo guardado: {ARCHIVO_JS.resolve()}")
        print(f"Total de perfumes: {len(perfumes)}")
    else:
        print("\nNo se obtuvieron perfumes. No se modificó el archivo.")


if __name__ == "__main__":
    asyncio.run(main())
