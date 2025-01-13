import { supabase } from "@lib/supabase";
import { dataGlobal } from "@utils/dataGlobal";

export const verifyShortUrlisOcupied = async (shortUrl: string) => {
  const { data, error } = await supabase
    .from("urls")
    .select("*")
    .eq("url_seed", shortUrl);

  if (error) {
    console.log(error);
    return false;
  }

  if (data.length > 0) {
    return true;
  }

  return false;
};

export const generateShortUrl = async (url: string) => {
  const shortUrl = `${dataGlobal.URLPAGE}${Math.random().toString(36).substring(2, 15)}`;

  return shortUrl;
};
