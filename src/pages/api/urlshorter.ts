export const prerender = false;

import {
  generateShortUrl,
  verifyShortUrlisOcupied,
} from "@lib/shorters/shroter";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, cookies }) => {
  const formData = await request.formData();
  const url = formData.get("url");

  if (!url)
    return new Response(JSON.stringify({ message: "URL obligatorio" }), {
      status: 400,
    });

  const urOcuped = await verifyShortUrlisOcupied(url.toString());

  if (urOcuped) {
    return new Response(JSON.stringify({ message: "URL ya existe" }), {
      status: 400,
    });
  }

  const urlShort = await generateShortUrl(url.toString());

  return new Response(
    JSON.stringify({
      message: "URL creada",
      data: urlShort,
    }),
    { status: 200 },
  );
};
