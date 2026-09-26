/* =====================================================================
   CONFIGURACIÓN (lo primero que tenés que tocar)
   ===================================================================== */
const MARCA = "Djinn";
const INSTAGRAM = "djinnfragancias"; // usuario de Instagram, sin @
const IG_DM = `https://ig.me/m/${INSTAGRAM}`; // abre directo el chat con la cuenta

/* FOTOS: cada perfume usa 3 fotos dentro de la carpeta img/
     img/<id>-1.jpg  →  foto linda del perfume
     img/<id>-2.jpg  →  foto de las notas
     img/<id>-3.jpg  →  foto de los acordes
   Ejemplo para "alba-citrica": img/alba-citrica-1.jpg, img/alba-citrica-2.jpg, img/alba-citrica-3.jpg
   Si tus fotos son png o webp, cambiá FOTO_EXT. Si querés otros nombres,
   agregá al perfume:  fotos: ["img/a.jpg", "img/b.jpg", "img/c.jpg"] */
const FOTO_EXT = "jpg";
const TIPOS_FOTO = ["Perfume", "Notas", "Acordes"];

/* Cada perfume es un bloque. Para agregar uno, copiá un bloque y cambiá los datos.
   acordes: lista [nombre, fuerza de 0 a 100]. La barra más larga es la principal (como en Fragantica).
   etiqueta: "Nuevo", "Más vendido" o "" para ninguna. */
const PERFUMES = [
  {
    id: "alba-citrica",
    nombre: "Alba Cítrica",
    genero: "Unisex",
    familia: "Cítrico",
    ml: 100,
    precio: 1550,
    etiqueta: "Nuevo",
    color: "#d8d66a",
    desc: "La primera luz de la mañana: lima recién cortada, hojas verdes y un fondo seco de ámbar.",
    acordes: [
      ["Cítrico", 100],
      ["Fresco", 82],
      ["Verde", 64],
      ["Ámbar", 42],
      ["Almizclado", 30],
    ],
    notas: {
      salida: ["Lima", "Bergamota"],
      corazon: ["Vetiver", "Hoja de higo"],
      fondo: ["Ámbar seco", "Almizcle"],
    },
  },
  {
    id: "bruma-violeta",
    nombre: "Bruma Violeta",
    genero: "Mujer",
    familia: "Floral",
    ml: 100,
    precio: 1550,
    etiqueta: "",
    color: "#a9a6d1",
    desc: "Un atardecer en calma: iris polvoso, violeta y una estela de vainilla ahumada.",
    acordes: [
      ["Floral", 100],
      ["Polvoso", 85],
      ["Amaderado", 60],
      ["Vainilla", 48],
      ["Especiado", 35],
    ],
    notas: {
      salida: ["Pimienta rosa", "Cardamomo"],
      corazon: ["Iris", "Violeta"],
      fondo: ["Cedro", "Vainilla ahumada"],
    },
  },
  {
    id: "mar-de-ambar",
    nombre: "Mar de Ámbar",
    genero: "Unisex",
    familia: "Fresco",
    ml: 100,
    precio: 1550,
    etiqueta: "",
    color: "#7cc7c4",
    desc: "Brisa salada y resina cálida: un ámbar que se mueve como la marea.",
    acordes: [
      ["Marino", 100],
      ["Fresco", 80],
      ["Ámbar", 66],
      ["Aromático", 50],
      ["Amaderado", 34],
    ],
    notas: {
      salida: ["Sal marina", "Mandarina"],
      corazon: ["Salvia", "Jazmín de agua"],
      fondo: ["Ámbar", "Madera flotada"],
    },
  },
  {
    id: "alba-citrica-intenso",
    nombre: "Alba Cítrica Intenso",
    genero: "Hombre",
    familia: "Cítrico",
    ml: 100,
    precio: 1790,
    etiqueta: "Más vendido",
    color: "#b9a83a",
    desc: "La misma lima, ahora al caer la noche: más profunda, con un corazón de té negro.",
    acordes: [
      ["Cítrico", 100],
      ["Amaderado", 78],
      ["Ahumado", 58],
      ["Ámbar", 46],
      ["Terroso", 34],
    ],
    notas: {
      salida: ["Lima negra", "Bergamota"],
      corazon: ["Té negro", "Vetiver"],
      fondo: ["Ámbar", "Haba tonka"],
    },
  },
  {
    id: "desierto-al-ocaso",
    nombre: "Desierto al Ocaso",
    genero: "Hombre",
    familia: "Ámbar",
    ml: 100,
    precio: 1790,
    etiqueta: "",
    color: "#d18a1f",
    desc: "Arena todavía tibia y especias al último sol: un ámbar profundo para las noches largas.",
    acordes: [
      ["Ámbar", 100],
      ["Especiado", 90],
      ["Balsámico", 68],
      ["Cuero", 52],
      ["Dulce", 40],
    ],
    notas: {
      salida: ["Azafrán", "Naranja amarga"],
      corazon: ["Canela", "Rosa seca"],
      fondo: ["Ámbar gris", "Cuero", "Sándalo"],
    },
  },
  {
    id: "jardin-de-noche",
    nombre: "Jardín de Noche",
    genero: "Mujer",
    familia: "Floral",
    ml: 50,
    precio: 1290,
    etiqueta: "Nuevo",
    color: "#e58aa6",
    desc: "Flores blancas que se abren cuando baja el sol, con un toque dulce de frambuesa.",
    acordes: [
      ["Floral", 100],
      ["Frutal", 76],
      ["Dulce", 60],
      ["Almizclado", 44],
      ["Vainilla", 36],
    ],
    notas: {
      salida: ["Frambuesa", "Pera"],
      corazon: ["Tuberosa", "Jazmín"],
      fondo: ["Almizcle", "Vainilla"],
    },
  },
  {
    id: "cedro-y-sal",
    nombre: "Cedro y Sal",
    genero: "Hombre",
    familia: "Amaderado",
    ml: 100,
    precio: 1650,
    etiqueta: "",
    color: "#8a6a4a",
    desc: "Madera seca de playa: cedro limpio, sal y una pizca de pimienta.",
    acordes: [
      ["Amaderado", 100],
      ["Marino", 70],
      ["Especiado", 62],
      ["Fresco", 48],
      ["Aromático", 34],
    ],
    notas: {
      salida: ["Pimienta negra", "Pomelo"],
      corazon: ["Cedro", "Salvia"],
      fondo: ["Sal", "Madera de deriva"],
    },
  },
  {
    id: "lino-blanco",
    nombre: "Lino Blanco",
    genero: "Unisex",
    familia: "Fresco",
    ml: 50,
    precio: 1190,
    etiqueta: "",
    color: "#c9d5e4",
    desc: "Sábanas al sol: limpio, suave y luminoso, para todos los días.",
    acordes: [
      ["Fresco", 100],
      ["Almizclado", 84],
      ["Cítrico", 58],
      ["Polvoso", 44],
      ["Floral", 34],
    ],
    notas: {
      salida: ["Aldehídos", "Limón"],
      corazon: ["Flor de algodón", "Lirio"],
      fondo: ["Almizcle blanco"],
    },
  },
  {
    id: "ambar-real",
    nombre: "Ámbar Real",
    genero: "Mujer",
    familia: "Ámbar",
    ml: 100,
    precio: 2100,
    etiqueta: "Más vendido",
    color: "#c47a2c",
    desc: "Cálido y envolvente: ámbar dorado con miel, vainilla y un toque de rosa oscura.",
    acordes: [
      ["Ámbar", 100],
      ["Dulce", 88],
      ["Vainilla", 70],
      ["Rosa", 54],
      ["Balsámico", 40],
    ],
    notas: {
      salida: ["Miel", "Mandarina"],
      corazon: ["Rosa oscura", "Ládano"],
      fondo: ["Ámbar", "Vainilla", "Benjuí"],
    },
  },
  {
    id: "bosque-humedo",
    nombre: "Bosque Húmedo",
    genero: "Unisex",
    familia: "Amaderado",
    ml: 100,
    precio: 1890,
    etiqueta: "",
    color: "#5f8f5b",
    desc: "Tierra mojada, musgo y helechos después de la lluvia.",
    acordes: [
      ["Terroso", 100],
      ["Verde", 86],
      ["Amaderado", 72],
      ["Herbal", 54],
      ["Fresco", 38],
    ],
    notas: {
      salida: ["Helecho", "Bergamota"],
      corazon: ["Musgo", "Pino"],
      fondo: ["Pachulí", "Cedro"],
    },
  },
  {
    id: "rosa-ceniza",
    nombre: "Rosa Ceniza",
    genero: "Mujer",
    familia: "Floral",
    ml: 50,
    precio: 1350,
    etiqueta: "",
    color: "#d7b5b0",
    desc: "Una rosa sin espinas: empolvada, suave y con un fondo levemente ahumado.",
    acordes: [
      ["Rosa", 100],
      ["Polvoso", 82],
      ["Floral", 66],
      ["Ahumado", 44],
      ["Almizclado", 34],
    ],
    notas: {
      salida: ["Pimienta rosa"],
      corazon: ["Rosa", "Peonía"],
      fondo: ["Incienso", "Almizcle"],
    },
  },
  {
    id: "negro-vetiver",
    nombre: "Negro Vetiver",
    genero: "Hombre",
    familia: "Amaderado",
    ml: 100,
    precio: 2390,
    etiqueta: "",
    color: "#2f3a35",
    desc: "Oscuro y elegante: vetiver ahumado, cuero y una salida especiada.",
    acordes: [
      ["Amaderado", 100],
      ["Ahumado", 86],
      ["Cuero", 70],
      ["Especiado", 56],
      ["Terroso", 40],
    ],
    notas: {
      salida: ["Cardamomo", "Jengibre"],
      corazon: ["Vetiver", "Cuero"],
      fondo: ["Oud", "Haba tonka"],
    },
  },
];

/* Colores de las barras de acordes (los que no estén acá usan un gris) */
const COLOR_ACORDE = {
  Cítrico: "#f1e441",
  Fresco: "#7fd6dc",
  Verde: "#62bf62",
  Aromático: "#3aa88b",
  Herbal: "#86c46e",
  Amaderado: "#8f6a45",
  Ámbar: "#e58a1b",
  Dulce: "#f08fa6",
  Vainilla: "#f2d79a",
  Floral: "#e0568f",
  Rosa: "#e8709c",
  Especiado: "#c8432b",
  Almizclado: "#cfc3d8",
  Cuero: "#6d4a39",
  Ahumado: "#7c7d84",
  Polvoso: "#ebc9c3",
  Marino: "#3fb5c9",
  Terroso: "#7c6a48",
  Balsámico: "#b8783a",
  Frutal: "#ff8d4d",
};

/* =====================================================================
   UTILIDADES
   ===================================================================== */
const $ = (s) => document.querySelector(s);
const norm = (s) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
const dinero = (n) =>
  "UYU " + n.toLocaleString("es-UY", { minimumFractionDigits: 0 });
const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const guardar = (k, v) => {
  try {
    localStorage.setItem(k, v);
  } catch (e) {}
};
const leer = (k) => {
  try {
    return localStorage.getItem(k);
  } catch (e) {
    return null;
  }
};
const porId = (id) => PERFUMES.find((p) => p.id === id);
const BOLSA = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8V6a3 3 0 016 0v2"/></svg>`;

PERFUMES.forEach((p) => {
  p._fotos = p.fotos || [1, 2, 3].map((n) => `img/${p.id}-${n}.${FOTO_EXT}`);
  p._texto = norm(
    [
      p.nombre,
      p.genero,
      p.familia,
      ...p.notas.salida,
      ...p.notas.corazon,
      ...p.notas.fondo,
      ...p.acordes.map((a) => a[0]),
    ].join(" "),
  );
});

/* Frasco de ejemplo: se muestra si todavía no cargaste la foto principal */
function frasco(color) {
  return `<svg viewBox="0 0 120 170" aria-hidden="true">
    <rect x="46" y="6" width="28" height="34" rx="3" fill="#1a1f1c"/>
    <rect x="53" y="38" width="14" height="10" fill="#fff" opacity=".55"/>
    <rect x="18" y="46" width="84" height="116" rx="10" fill="#fff" fill-opacity=".55" stroke="#000" stroke-opacity=".12"/>
    <rect x="25" y="66" width="70" height="90" rx="6" fill="${color}"/>
    <rect x="29" y="52" width="4" height="104" rx="2" fill="#fff" opacity=".55"/>
    <text x="60" y="112" text-anchor="middle" font-family="Georgia,serif" font-size="9" letter-spacing="2" fill="#000" opacity=".5">${esc(MARCA.toUpperCase())}</text>
  </svg>`;
}
/* Si una foto no existe todavía, mostramos un aviso con el nombre que tiene que tener el archivo */
document.addEventListener(
  "error",
  (e) => {
    const t = e.target;
    if (t.tagName !== "IMG" || !t.dataset.color) return;
    if (t.hasAttribute("data-mini") || t.parentElement.querySelector(".ph")) {
      t.remove();
      return;
    }
    const i = +t.dataset.i,
      ph = document.createElement("div");
    ph.className = "ph";
    if (i === 0) ph.innerHTML = frasco(t.dataset.color);
    else {
      ph.classList.add("ph-txt");
      ph.innerHTML = `<p>Acá va tu foto de ${TIPOS_FOTO[i].toLowerCase()}</p><small>${esc(t.getAttribute("src"))}</small>`;
    }
    t.replaceWith(ph);
  },
  true,
);
const imagen = (p, i, mini) =>
  `<img src="${esc(p._fotos[i] || "")}" alt="${mini ? "" : esc(p.nombre + " · " + TIPOS_FOTO[i])}" loading="lazy" data-color="${p.color}" data-i="${i}" ${mini ? "data-mini" : ""}>`;

/* =====================================================================
   INSTAGRAM: copiar el mensaje y abrir el chat directo
   (Instagram no permite pre-escribir el mensaje en el link, así que lo copiamos)
   ===================================================================== */
async function copiar(texto) {
  try {
    await navigator.clipboard.writeText(texto);
    return true;
  } catch (e) {
    try {
      const ta = document.createElement("textarea");
      ta.value = texto;
      ta.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      ta.remove();
      return ok;
    } catch (_) {
      return false;
    }
  }
}
let temporizador;
function aviso(msg) {
  const t = $("#toast");
  t.textContent = msg;
  try {
    if (!t.matches(":popover-open")) t.showPopover();
  } catch (e) {
    t.classList.add("on");
  }
  clearTimeout(temporizador);
  temporizador = setTimeout(() => {
    try {
      t.hidePopover();
    } catch (e) {
      t.classList.remove("on");
    }
  }, 5200);
}
/* Cualquier link con data-ig copia su mensaje y deja que el link abra Instagram */
document.addEventListener("click", async (e) => {
  const a = e.target.closest("[data-ig]");
  if (!a) return;
  const ok = await copiar(a.dataset.ig);
  aviso(
    ok
      ? "Mensaje copiado. Pegalo en el chat de Instagram y enviá."
      : "Se abrió Instagram. Escribinos tu consulta en el chat.",
  );
});
$("#ig-fab").href = IG_DM;
$("#ig-fab").dataset.ig = `Hola ${MARCA}! Quiero hacer una consulta.`;

/* =====================================================================
   ESTADO
   ===================================================================== */
const precios = PERFUMES.map((p) => p.precio);
const PRECIO_MIN = Math.floor(Math.min(...precios) / 50) * 50;
const PRECIO_MAX = Math.ceil(Math.max(...precios) / 50) * 50;
const generos = [...new Set(PERFUMES.map((p) => p.genero))];
const familias = [...new Set(PERFUMES.map((p) => p.familia))];

let carrito = {};
try {
  carrito = JSON.parse(leer("djinn:carrito") || "{}");
} catch (e) {}
Object.keys(carrito).forEach((id) => {
  if (!porId(id)) delete carrito[id];
});
const estado = {
  q: "",
  genero: "Todos",
  familias: new Set(),
  max: PRECIO_MAX,
  orden: "destacados",
  lista: false,
};
let visibles = [],
  actual = null,
  fotoActual = 0;

/* =====================================================================
   FILTROS
   ===================================================================== */
$("#f-genero").innerHTML = ["Todos", ...generos]
  .map(
    (g, i) =>
      `<label class="pastilla"><input type="radio" name="genero" value="${g}" ${i === 0 ? "checked" : ""}><span>${g}</span></label>`,
  )
  .join("");
$("#f-familia").innerHTML = familias
  .map(
    (f) =>
      `<label class="pastilla"><input type="checkbox" value="${f}"><span>${f}</span></label>`,
  )
  .join("");
const rango = $("#precio-max");
rango.min = PRECIO_MIN;
rango.max = PRECIO_MAX;
rango.step = 50;
rango.value = PRECIO_MAX;
const txtPrecio = () =>
  ($("#precio-max-txt").textContent = dinero(+rango.value));
txtPrecio();

$("#f-genero").addEventListener("change", (e) => {
  estado.genero = e.target.value;
  render();
});
$("#f-familia").addEventListener("change", (e) => {
  e.target.checked
    ? estado.familias.add(e.target.value)
    : estado.familias.delete(e.target.value);
  render();
});
rango.addEventListener("input", () => {
  estado.max = +rango.value;
  txtPrecio();
  render();
});
$("#orden").addEventListener("change", (e) => {
  estado.orden = e.target.value;
  render();
});

const buscador = $("#buscador"),
  q = $("#q");
q.addEventListener("input", () => {
  estado.q = q.value;
  buscador.classList.toggle("con-texto", !!q.value);
  render();
});
$("#borrar").addEventListener("click", () => {
  q.value = "";
  q.dispatchEvent(new Event("input"));
  q.focus();
});
document.addEventListener("keydown", (e) => {
  if (
    e.key === "/" &&
    !/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName) &&
    !document.querySelector("dialog[open]")
  ) {
    e.preventDefault();
    q.focus();
  }
});

function limpiar() {
  Object.assign(estado, { q: "", genero: "Todos", max: PRECIO_MAX });
  estado.familias.clear();
  q.value = "";
  buscador.classList.remove("con-texto");
  document.querySelector('input[name="genero"][value="Todos"]').checked = true;
  document
    .querySelectorAll("#f-familia input")
    .forEach((i) => (i.checked = false));
  rango.value = PRECIO_MAX;
  txtPrecio();
  render();
}
$("#limpiar").addEventListener("click", limpiar);

$("#v-grilla").addEventListener("click", () => cambiarVista(false));
$("#v-lista").addEventListener("click", () => cambiarVista(true));
function cambiarVista(lista) {
  estado.lista = lista;
  $("#v-grilla").setAttribute("aria-pressed", !lista);
  $("#v-lista").setAttribute("aria-pressed", lista);
  $("#grilla").classList.toggle("lista", lista);
}
$("#abrir-filtros").addEventListener("click", (e) => {
  const ab = $("#filtros").classList.toggle("abierto");
  e.currentTarget.setAttribute("aria-expanded", ab);
});
function filtrar() {
  const palabras = norm(estado.q).split(/\s+/).filter(Boolean);
  const r = PERFUMES.filter(
    (p) =>
      palabras.every((w) => p._texto.includes(w)) &&
      (estado.genero === "Todos" || p.genero === estado.genero) &&
      (!estado.familias.size || estado.familias.has(p.familia)) &&
      p.precio <= estado.max,
  );
  if (estado.orden === "precio-asc") r.sort((a, b) => a.precio - b.precio);
  if (estado.orden === "precio-desc") r.sort((a, b) => b.precio - a.precio);
  if (estado.orden === "nombre")
    r.sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));
  return r;
}

/* =====================================================================
   CARRITO
   ===================================================================== */
const cant = (id) => carrito[id] || 0;
const totalUnidades = () => Object.values(carrito).reduce((a, b) => a + b, 0);
const totalPrecio = () =>
  Object.entries(carrito).reduce((s, [id, n]) => s + porId(id).precio * n, 0);

function cambiar(id, delta) {
  const n = Math.min(20, Math.max(0, cant(id) + delta));
  n ? (carrito[id] = n) : delete carrito[id];
  guardar("djinn:carrito", JSON.stringify(carrito));
  if (delta > 0) {
    const b = $("#btn-carrito");
    b.classList.remove("salta");
    void b.offsetWidth;
    b.classList.add("salta");
  }
  actualizar();
}

/* Botón "Añadir al carrito" o selector de cantidad, según si ya está en el carrito */
function accionHTML(p) {
  const n = cant(p.id);
  return n
    ? `<div class="stepper" role="group" aria-label="Cantidad de ${esc(p.nombre)}"><button data-menos aria-label="Quitar uno">−</button><span>${n} en el carrito</span><button data-mas aria-label="Agregar uno">+</button></div>`
    : `<button class="btn-add" data-add>${BOLSA}<span>Añadir al carrito</span></button>`;
}
function manejarAccion(e, id) {
  if (e.target.closest("[data-add], [data-mas]")) {
    cambiar(id, 1);
    return true;
  }
  if (e.target.closest("[data-menos]")) {
    cambiar(id, -1);
    return true;
  }
  return false;
}

function mensajePedido() {
  const lineas = Object.entries(carrito)
    .map(([id, n]) => {
      const p = porId(id);
      return `• ${n} x ${p.nombre} (${p.ml} ml) — ${dinero(p.precio * n)}`;
    })
    .join("\n");
  return `Hola ${MARCA}! Quiero hacer este pedido:\n\n${lineas}\n\nTotal: ${dinero(totalPrecio())}\n\nGracias!`;
}

function renderCarrito() {
  const ids = Object.keys(carrito),
    vacio = ids.length === 0;
  $("#dr-pie").hidden = vacio;
  $("#dr-lista").innerHTML = vacio
    ? `<div class="vacio-c"><h3>Tu carrito está vacío</h3><p>Añadí fragancias y armamos tu pedido por Instagram.</p></div>`
    : ids
        .map((id) => {
          const p = porId(id),
            n = cant(id);
          return `<div class="fila-c" data-id="${id}">
        <span class="mini" style="--c:${p.color}">${imagen(p, 0)}</span>
        <div><b>${esc(p.nombre)}</b><small>${p.ml} ml · ${dinero(p.precio)}</small>
          <div class="stepper" role="group" aria-label="Cantidad de ${esc(p.nombre)}"><button data-menos aria-label="Quitar uno">−</button><span>${n}</span><button data-mas aria-label="Agregar uno">+</button></div></div>
        <div class="der"><span>${dinero(p.precio * n)}</span><button class="quitar" data-quitar>Eliminar</button></div>
      </div>`;
        })
        .join("");
  if (!vacio) {
    $("#dr-total").textContent = dinero(totalPrecio());
    const msg = mensajePedido();
    $("#dr-msg").value = msg;
    const a = $("#pedir");
    a.href = IG_DM;
    a.dataset.ig = msg;
  }
}
$("#dr-lista").addEventListener("click", (e) => {
  const fila = e.target.closest(".fila-c");
  if (!fila) return;
  if (e.target.closest("[data-quitar]")) {
    delete carrito[fila.dataset.id];
    guardar("djinn:carrito", JSON.stringify(carrito));
    return actualizar();
  }
  manejarAccion(e, fila.dataset.id);
});
$("#vaciar").addEventListener("click", () => {
  if (!confirm("¿Vaciar el carrito?")) return;
  carrito = {};
  guardar("djinn:carrito", "{}");
  actualizar();
});

/* Actualiza todo lo que depende del carrito sin redibujar las fotos */
function actualizar() {
  document.querySelectorAll(".card").forEach((c) => {
    c.querySelector(".accion").innerHTML = accionHTML(porId(c.dataset.id));
  });
  const n = totalUnidades();
  $("#n-carrito").textContent = n;
  $("#n-carrito").dataset.n = n;
  renderCarrito();
  if (actual && $("#ficha").open) $("#f-accion").innerHTML = accionHTML(actual);
}

const drawer = $("#carrito");
$("#btn-carrito").addEventListener("click", () => {
  renderCarrito();
  drawer.showModal();
  document.body.style.overflow = "hidden";
});
$("#cerrar-carrito").addEventListener("click", () => drawer.close());
drawer.addEventListener("close", () => (document.body.style.overflow = ""));
drawer.addEventListener("click", (e) => {
  if (e.target === drawer) drawer.close();
});

/* =====================================================================
   TARJETAS
   ===================================================================== */
function tarjeta(p) {
  return `<article class="card" data-id="${p.id}">
    <button class="media" data-abrir style="--c:${p.color}" aria-label="Ver ${esc(p.nombre)}">
      ${imagen(p, 0)}
      ${p.etiqueta ? `<span class="etiqueta">${esc(p.etiqueta)}</span>` : ""}
      <span class="vista-rapida">Ver detalle</span>
    </button>
    <button class="info" data-abrir>
      <span class="tipo">${p.familia} · ${p.genero}</span>
      <h3>${esc(p.nombre)}</h3>
      <span class="fila"><span class="precio">${dinero(p.precio)}</span><span class="ml">${p.ml} ml</span></span>
    </button>
    <div class="accion">${accionHTML(p)}</div>
  </article>`;
}
function render() {
  visibles = filtrar();
  $("#grilla").innerHTML = visibles.length
    ? visibles.map(tarjeta).join("")
    : `
    <div class="vacio"><h3>No encontramos resultados</h3><p>Probá con otra palabra o quitá algún filtro.</p>
    <button id="vacio-limpiar">Limpiar filtros</button></div>`;
  $("#cuenta").innerHTML =
    `<b>${visibles.length}</b> de ${PERFUMES.length} fragancias`;
}
$("#grilla").addEventListener("click", (e) => {
  if (e.target.closest("#vacio-limpiar")) return limpiar();
  const card = e.target.closest(".card");
  if (!card) return;
  if (manejarAccion(e, card.dataset.id)) return;
  if (e.target.closest("[data-abrir]")) abrir(card.dataset.id);
});

/* =====================================================================
   FICHA (con fotos, acordes en barras y notas)
   ===================================================================== */
const dlg = $("#ficha");
const luz = (hex) => {
  const n = parseInt(hex.slice(1), 16);
  return (
    (0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255
  );
};

function barras(p) {
  const ordenados = [...p.acordes].sort((a, b) => b[1] - a[1]);
  $("#f-acordes").classList.remove("ver");
  $("#f-acordes").innerHTML = ordenados
    .map(([nombre, v], k) => {
      const col = COLOR_ACORDE[nombre] || "#9aa8a4",
        w = Math.max(32, Math.min(100, v));
      return `<div class="ac"><i style="--col:${col};--w:${w}%;--k:${k}"></i><span style="--w:${w}%;--tx:${luz(col) > 0.58 ? "#15201b" : "#fff"}">${esc(nombre)}</span></div>`;
    })
    .join("");
  /* la barra crece cuando se abre el perfume */
  requestAnimationFrame(() =>
    requestAnimationFrame(() => $("#f-acordes").classList.add("ver")),
  );
}

function abrir(id) {
  const p = porId(id);
  if (!p) return;
  actual = p;
  fotoActual = 0;
  $("#f-tipo").textContent = `${p.familia} · ${p.genero}`;
  $("#f-nombre").textContent = p.nombre;
  $("#f-precio").innerHTML =
    `${dinero(p.precio)} <small>· Eau de parfum ${p.ml} ml</small>`;
  $("#f-desc").textContent = p.desc;
  const ig = $("#f-ig");
  ig.href = IG_DM;
  ig.dataset.ig = `Hola ${MARCA}! Quiero consultar por ${p.nombre} (${p.ml} ml, ${dinero(p.precio)}).`;
  $("#f-accion").innerHTML = accionHTML(p);
  $("#f-mini").innerHTML = TIPOS_FOTO.map(
    (t, i) =>
      `<button data-i="${i}" aria-label="Ver foto de ${t.toLowerCase()}" aria-current="${i === 0}"><span class="th" style="--c:${p.color}">${imagen(p, i, true)}</span>${t}</button>`,
  ).join("");
  mostrarFoto(0);
  barras(p);
  if (!dlg.open) {
    dlg.showModal();
    document.body.style.overflow = "hidden";
  }
  dlg.scrollTop = 0;
}
function mostrarFoto(i) {
  fotoActual = i;
  $("#f-principal").style.setProperty("--c", actual.color);
  $("#f-principal").innerHTML = imagen(actual, i);
  document
    .querySelectorAll("#f-mini button")
    .forEach((b, k) => b.setAttribute("aria-current", k === i));
}
function vecino(paso) {
  const lista = visibles.length ? visibles : PERFUMES;
  const i = lista.findIndex((p) => p.id === actual.id);
  abrir(lista[(i + paso + lista.length) % lista.length].id);
}
$("#f-mini").addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (b) mostrarFoto(+b.dataset.i);
});
$("#f-accion").addEventListener("click", (e) => manejarAccion(e, actual.id));
$("#f-prev").addEventListener("click", () => vecino(-1));
$("#f-next").addEventListener("click", () => vecino(1));
$("#cerrar").addEventListener("click", () => dlg.close());
dlg.addEventListener("close", () => (document.body.style.overflow = ""));
dlg.addEventListener("click", (e) => {
  if (e.target === dlg) dlg.close();
});
dlg.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") vecino(-1);
  if (e.key === "ArrowRight") vecino(1);
});

render();
actualizar();
