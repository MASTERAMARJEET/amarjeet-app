import type { APIRoute } from "astro";
import { generateOgImageForSite } from "@utils/generateOgImages";

export const prerender = true;

export const GET: APIRoute = async () => {
  return new Response(new Uint8Array(await generateOgImageForSite()).buffer, {
    headers: { "Content-Type": "image/png" },
  });
};
