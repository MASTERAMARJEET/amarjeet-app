import type { CollectionEntry } from "astro:content";
import { initWasm, Resvg } from "@resvg/resvg-wasm";
import postOgImage from "./og-templates/post";
import siteOgImage from "./og-templates/site";

let initialized = false;

async function initResvgWasm() {
  try {
    if (initialized) {
      return;
    }
    const wasmResponse = await fetch(
      "https://unpkg.com/@resvg/resvg-wasm@2.6.2/index_bg.wasm",
    );
    const wasmArrayBuffer = await wasmResponse.arrayBuffer();
    await initWasm(wasmArrayBuffer);
    initialized = true;
  }
  catch (error) {
    console.error("Resvg wasm not initialized", error);
  }
}

async function svgBufferToPngBuffer(svg: string) {
  await initResvgWasm();
  const resvg = new Resvg(svg);
  const pngData = resvg.render();
  return pngData.asPng();
}

export async function generateOgImageForPost(post: CollectionEntry<"blog">) {
  const svg = await postOgImage(post);
  return await svgBufferToPngBuffer(svg);
}

export async function generateOgImageForSite() {
  const svg = await siteOgImage();
  return await svgBufferToPngBuffer(svg);
}
