# Landing — compra a cuotas

Landing en [Astro](https://astro.build) (sitio estático, sin frameworks de UI).

## Requisitos

Node.js 22.12 o superior (Astro 7). Con nvm: `nvm use` (lee `.nvmrc`).

## Comandos

| Comando           | Acción                                   |
| ----------------- | ---------------------------------------- |
| `npm install`     | Instala dependencias                     |
| `npm run dev`     | Servidor local en `http://localhost:4321` |
| `npm run build`   | Genera el sitio en `dist/`               |
| `npm run preview` | Sirve la build localmente                |

## Estructura

- `src/pages/index.astro` — arma la página con las secciones.
- `src/components/` — una sección por componente (Hero, Calculator, Plans, Faq…).
- `src/data/site.ts` — textos editables: marca, contactos, tiendas, productos, FAQ.
- `src/lib/plan.ts` — cálculo de inicial (45%) y cuotas; lo usan la calculadora y las tarjetas.
- `src/styles/global.css` — tokens de color y tipografía. Cambia `--accent` para otra variante de marca.

## Pendientes

- Reemplazar los textos entre `[corchetes]` en `src/data/site.ts` y en las FAQ.
- Conectar el formulario de tiendas: define `partnerFormAction` en `src/data/site.ts`.
- Añadir fotos reales de productos y enlaces a las tiendas de apps y páginas legales.
