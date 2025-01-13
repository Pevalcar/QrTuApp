export const prerender = false;

import {
  generateShortUrl,
  verifyShortUrlisOcupied,
} from "@lib/shorters/shroter";
import { supabase } from "@lib/supabase";
import type { APIRoute } from "astro";
import { type urls } from "@env";

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

  const token = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (!token || !refreshToken) {
    const { data, error } = await supabase
      .from("urls")
      .insert({
        user_id: null,
        views: 0,
        url_seed: url.toString(),
        url_gen: generateShortUrl(url.toString()),
      })
      .select();
    if (error) {
      console.log(error);
      return new Response(
        JSON.stringify({
          message: error.message,
        }),
        { status: 500 },
      );
    }
    if (data) {
      return new Response(
        JSON.stringify({
          message: "URL creada",
          data: data[0],
        }),
        { status: 200 },
      );
    }
  } else {
    let session;
    try {
      session = await supabase.auth.setSession({
        access_token: token.value,
        refresh_token: refreshToken.value,
      });

      if (session.error) {
        cookies.delete("sb-access-token", {
          path: "/",
        });
        cookies.delete("sb-refresh-token", {
          path: "/",
        });
        return new Response(
          JSON.stringify({
            message: session.error.message,
          }),
          { status: 500 },
        );
      }
    } catch (error) {
      cookies.delete("sb-access-token", {
        path: "/",
      });
      cookies.delete("sb-refresh-token", {
        path: "/",
      });

      return new Response(
        JSON.stringify({
          message: error ?? "Error",
        }),
        { status: 500 },
      );
    }
    const { data, error } = await supabase
      .from("urls")
      .insert({
        user_id: session.data.user?.id,
        views: 0,
        url_seed: url.toString(),
        url_gen: generateShortUrl(url.toString()),
      })
      .select();
    if (error) {
      return new Response(
        JSON.stringify({
          message: error.message,
        }),
        { status: 500 },
      );
    }
    if (data) {
      return new Response(
        JSON.stringify({
          message: "URL creada",
          data: data[0],
        }),
        { status: 200 },
      );
    }
  }

  return new Response(
    JSON.stringify({
      message: "URL creada",
      data: "urlShort",
    }),
    { status: 200 },
  );
};
