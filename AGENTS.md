# Djinn Fragancias — reglas permanentes

## Proyecto y forma de trabajar

- Djinn Fragancias vende perfumes árabes originales desde Montevideo, Uruguay. El sitio público es https://djinnfragancias.com/ y la infraestructura es Cloudflare.
- Este proyecto ya está avanzado. Priorizar estabilidad, corrección de errores, pequeños detalles visuales, rendimiento, fotografías, actualización del catálogo y consultas de precio. No sumar funciones grandes sin solicitud.
- El código actual del repositorio es la fuente de verdad. Inspeccionar antes de modificar; el contexto histórico puede describir versiones que no llegaron a GitHub. Verificar la cantidad real del catálogo, sin asumir un número fijo.
- Comunicarse en español, de forma cercana, clara y breve. Ante una solicitud de mejora, inspeccionar, implementar, probar y explicar el resultado sin pedir aprobación para cada decisión pequeña.
- Antes de cambios importantes comprobar rama, estado de Git y versión remota. Preservar trabajo del usuario, usar una rama o un mecanismo reversible y evitar refactorizaciones masivas innecesarias.
- No publicar en producción sin autorización expresa del usuario. La autorización para editar código no autoriza desplegarlo.
- Aprovechar el checkout existente en el entorno aislado; no crear un Git worktree salvo solicitud explícita del usuario.

## Modelo de negocio y consultas

- La web es un catálogo para explorar fragancias y consultar sus precios por WhatsApp. Mi selección no compra ni reserva productos.
- Nunca agregar precios públicos, aproximados, estimados, tachados ni cotizaciones automáticas.
- Nunca agregar indicadores de stock, inventario, disponibilidad, agotados o últimas unidades. Los productos se pueden conseguir por encargo.
- No agregar checkout automático ni prometer condiciones o tiempos de entrega. Envíos, pagos y otros detalles se coordinan personalmente.
- Los mensajes de WhatsApp deben ser cortos y naturales y consultar solamente precios; sin enlaces de productos ni preguntas automáticas por disponibilidad, stock, entrega, demoras o pagos.
- Ejemplo individual: `¡Hola Djinn! ¿Me decís el precio de Khamrah - Lattafa? ¡Gracias!`
- Ejemplo de selección: `¡Hola Djinn! ¿Me decís el precio de estas fragancias?`, seguido por líneas `• 1 x Nombre - Marca` y `¡Gracias!`.
- No enviar mensajes reales como parte de las pruebas.

## Identidad y experiencia

- Conservar estética elegante, cálida, moderna y limpia: crema, blanco cálido, verde oscuro y dorado; Fraunces en títulos y Figtree en textos; bordes redondeados, sombras suaves y transiciones discretas.
- Conservar el logo oficial DJ con estrella de cuatro puntas y los recursos originales de logo y banner. No inventar ni sustituir logos.
- El catálogo es protagonista: conservar «Catálogo primero», con herramientas de descubrimiento compactas. No anteponer muchas secciones grandes.
- No cambiar colores, estructura o componentes importantes sin una razón clara. Los rediseños solicitados permiten creatividad conservando identidad y funciones.
- Priorizar celulares sin descuidar escritorio. Probar los cambios relevantes a 320, 390, 768 y 1280 px: desbordamiento horizontal, cierre de fichas, botones táctiles, filtros, modales, avisos y proporciones de fotos.
- No afirmar mejoras de velocidad sin mediciones. Preservar carga diferida, prioridad de imágenes iniciales, decodificación asíncrona, dimensiones y reducción de renderizados al buscar.

## Archivos, catálogo e imágenes

- El sitio estático está en `public/index.html`, `public/style.css`, `public/script.js` y `public/img/`. `wrangler.toml` configura los assets de Cloudflare. No requiere compilación para desarrollo local.
- El catálogo está en el array `PERFUMES` de `public/script.js`. No borrar productos ni reemplazarlo con datos de versiones anteriores. Evitar IDs duplicados y productos repetidos.
- Mantener el orden de campos de cada objeto: `id`, `nombre`, `genero`, `ml`, `etiqueta`, `color`, `desc`, `indicadores`, `acordes`.
- `nombre` usa `Nombre del Perfume - Marca`. Los géneros son exactamente `Hombre`, `Mujer` y `Unisex`.
- `indicadores` contiene pares de estación/momento y votos, por ejemplo `["Invierno", "1200"]`; `acordes` contiene nombre e intensidad relativa, por ejemplo `["Dulce", 100]`.
- No inventar acordes ni indicadores faltantes. Si se pide dejarlos vacíos, respetarlo y asegurar que la interfaz no presente datos falsos.
- Al agregar perfumes, entregar por defecto solamente los objetos JavaScript listos para pegar, respetando el orden. No entregar ZIP ni todo el archivo, ni insertarlos directamente sin solicitud expresa.
- Normalmente las fotos son `img/<id>-1.jpg` (perfume) e `img/<id>-2.jpg` (notas); también se admiten rutas personalizadas. Preservar nombres, rutas y contenido. Optimizar sin pérdidas visibles de calidad.

## Funcionalidades que deben conservarse

- Buscador por perfume, marca y acorde; sugerencias con fotografías, tolerancia a errores leves, navegación con teclado, Enter para abrir ficha, Escape para cerrar sugerencias y renderizado diferido.
- Filtros premium de género, marca, estación, momento y familia aromática; panel lateral/adaptable, grupos plegables, pastillas, chips removibles, resumen, contadores y limpieza.
- Ocho familias aromáticas calculadas automáticamente a partir de acordes y ponderaciones: Dulces, Frescos, Cítricos, Amaderados, Florales, Especiados, Afrutados y Ambarados. No crear cientos de botones por acorde ni asignaciones manuales; mantener búsqueda por acordes específicos.
- El Genio recomienda normalmente cinco fragancias a partir de aroma, género, momento y estación, con explicaciones orientativas sin promesas de duración, rendimiento o disponibilidad.
- El género del Genio debe ser estricto: `Todos` (Sin preferencia), `Hombre`, `Mujer`, `Unisex`. Lógica: `return g === "Todos" || p.genero === g;`. Hombre y Mujer no incluyen Unisex.
- Comparador de dos fragancias, con fotos usando `object-fit: cover` y las mismas proporciones que el catálogo (3:2; 4:3 hasta 600 px), sin franjas laterales ni alturas fijas que recorten de más. Conservar acordes, estaciones, momentos, acceso a fichas, Mi selección y consulta conjunta de precios. Presentar los nombres sin tamaños en ml y omitir la línea de volumen en la comparación: se comparan aromas. El mismo aroma en otro tamaño no cuenta como fragancia diferente. Conservar los tamaños del catálogo y de los productos que se consultan por precio.
- Ocho colecciones automáticas: Dulces para la noche, Frescura de verano, Maderas con carácter, Jardín floral, Ámbar y especias, Escapada tropical, Energía para el día y Abrigo de otoño. Preservar generación automática y límite existente de hasta 18 aromas distintos.
- Mi selección debe persistir. Mantener la clave `djinn:carrito` de `localStorage` o migrar correctamente los datos si un cambio explícito lo requiere.
- Mantener confirmación personalizada para vaciar la selección: cancelar, confirmar y Escape. No usar `alert()` ni `confirm()` nativos para estas interacciones.
- Mantener avisos crema y verde, discretos, no bloqueantes, con cierre al tocarlos, X y desaparición automática; también deben funcionar dentro de modales. No volver a avisos negros que bloqueen.
- Enlaces compartibles automáticos `#perfume=<id>` con copiar/compartir y apertura directa de ficha. No crear cientos de páginas o rutas independientes ni agregar estos enlaces a consultas de precio por WhatsApp.
- Fragancias parecidas basadas principalmente en acordes y secundariamente en uso (aproximadamente 80/20); no recomendar otro tamaño de la misma fragancia como aroma diferente.
- Mantener «Cómo comprar» accesible y compacto: explorar catálogo, armar selección, consultar precio y coordinar detalles personalmente.
- Preservar vistas cuadrícula/lista, ordenamiento, navegación entre fichas, fotos y notas, barras de acordes, indicadores de uso, botones de WhatsApp/Instagram y adaptación móvil.

## Validación y revisión

- Para servir el sitio: desde el repositorio, `python3 -m http.server 8000 --bind 0.0.0.0 --directory public`. No asumir que un proceso anterior sigue activo. No detener procesos ajenos.
- Ejecutar `node --check public/script.js` y las pruebas disponibles que correspondan. Actualmente no hay un gestor de paquetes ni una suite de tests declarados; usar comprobaciones funcionales pequeñas cuando sean útiles.
- Validar interacciones en un navegador, no solamente sintaxis. Chromium está disponible en `/usr/bin/chromium` y Playwright en Python en el entorno preparado.
- Según el cambio, verificar búsqueda/sugerencias/teclado, filtros y limpieza, ficha y fotos, Genio con cada género, comparador, selección persistente, confirmación, enlaces compartidos y mensajes de WhatsApp sin enviarlos.
- Revisar el diff y estado final; conservar funciones, catálogo y rutas. Distinguir comprobaciones pasadas, fallidas y no ejecutadas. No atribuir al entorno defectos de la aplicación sin investigar.
- Durante revisiones iniciales, informar errores confirmados y mejoras opcionales antes de cambios extensos. No reescribir la página ni agregar funciones durante una auditoría.
- `public/scrapear.py` es una utilidad auxiliar de Playwright para Fragrantica con interfaz gráfica; no es un requisito para ejecutar el catálogo.
