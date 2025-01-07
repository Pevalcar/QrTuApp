export const prerender = false;

import { supabase } from "@lib/supabase";
import type { APIRoute } from "astro";
import { log } from "node_modules/astro/dist/core/logger/core";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const POST: APIRoute = async ({ request }) => {
  //   const formData = await request.formData();
  //   const url = formData.get("url")?.toString();

  await delay(5000);

  return new Response(
    JSON.stringify({
      message: "URL creada",
      data: "cosas",
    }),
    { status: 200 },
  );
};
//   const { data, error } = await supabase.from("urls").insert({
//     url,
//   });
//   if (error) {
//     return new Response(
//       JSON.stringify({
//         message: error.message,
//       }),
//       { status: 500 },
//     );
//   }
//   return new Response(
//     JSON.stringify({
//       message: "URL creada",
//       data,
//     }),
//     { status: 200 },
//   );
// };
