# Herleon · Proyecto web

Entrega del código de la versión publicada 51. Proyecto React + Vite + Tailwind CSS y Lucide Icons, con imágenes, favicon y estilos incluidos.

## Abrir y ejecutar en VS Code

1. Descomprime el ZIP.
2. Abre **la carpeta herleon-web** desde Archivo → Abrir carpeta en VS Code. Debe verse package.json en la raíz.
3. Instala Node.js (versión 22 o superior) con npm, si todavía no lo tienes. VS Code por sí solo no instala Node.js.
4. Abre Terminal → Nueva terminal y ejecuta:

```bash
npm ci
npm run dev
```

Abre la dirección local que muestre Vite, normalmente http://localhost:5173/. Si ese puerto está ocupado, Vite indicará otro. Para detenerlo, pulsa Ctrl+C en la terminal.

No abras index.html con doble clic ni uses Live Server: este proyecto se ejecuta con Vite. Necesitas internet para la primera instalación y para cargar Google Fonts o abrir los servicios externos.

## Generar los archivos para hosting

```bash
npm run build
npm run preview
```

El build se guarda en dist/. Publica el contenido de esa carpeta en un hosting estático; las rutas utilizan #, por lo que no necesitan reglas de reescritura del servidor. El ZIP no incluye node_modules ni una compilación antigua; se generan con los comandos anteriores.

## Dónde editar

- src/App.jsx: rutas y estructura general.
- src/components/: secciones y páginas.
- src/styles.css: estilos y adaptación a móvil.
- src/config/contact.js: número de WhatsApp y redes.
- src/data/quoteServices.js: categorías del formulario.
- public/assets/: imágenes y recursos.
- public/: favicon y accesos móviles.
- index.html: metadatos, tipografía y enlaces del favicon.

## Páginas

Inicio: / · Catálogo: /#/catalogo · Nosotros: /#/nosotros · Testimonios: /#/testimonios · Cotizar: /#/cotizar.
Servicios: /#/puertas, /#/ventanas, /#/mamparas, /#/techos, /#/espejos.
Libro de Reclamaciones: /#/libro-de-reclamaciones.
Tratamiento de datos: /#/tratamiento-de-datos.

## Contactos y funcionamiento

WhatsApp empresarial: +51 904 195 280. Los enlaces abren WhatsApp; el visitante debe enviar el mensaje. El correo mostrado es contacto@herleon.com; se debe confirmar su operación con el proveedor de correo.

La web es estática y no necesita variables de entorno, API keys ni base de datos para ejecutarse. Cotizar prepara el mensaje de WhatsApp. Las imágenes de los servicios pueden ampliarse con un visor.

El Libro de Reclamaciones prepara una solicitud descargable y permite abrir el correo; **no registra automáticamente reclamaciones, no asigna numeración oficial y no envía correos por sí mismo**. La recepción y constancia requieren una implementación adicional.

El aviso de tratamiento de datos mantiene pendientes los detalles de conservación y proveedores. Revisa esos datos antes del lanzamiento definitivo. Conserva las notas de procedencia de imágenes y avisos de terceros incluidos; algunas imágenes son referencias generadas.

La ejecución local o publicación en otro hosting no actualiza automáticamente la versión alojada en ChatGPT Sites.
