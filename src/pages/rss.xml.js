import rss from "@astrojs/rss";
import { dataGlobal } from "@utils/dataGlobal";

export function GET(context) {
  return rss({
    // `<title>` campo en el xml generado
    title: dataGlobal.title,
    // `<description>` campo en el xml generado
    description: dataGlobal.description,
    // Usa el "site" desde el contexto del endpoint
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site ?? "https://qrtuapp.netlify.app/en/",
    // Array de `<item>`s en el xml generado
    // Consulta la sección "Generando `items`" para ejemplos utilizando colecciones de contenido y glob imports
    items: [],
    // (opcional) inyecta xml personalizado
    customData: `<language>es</language>`,
  });
}
