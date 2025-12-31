import type { APIRoute } from "astro";
import type { CollectionEntry } from "astro:content";
import { generateOgImageForPost } from "@utils/generateOgImages";
import { slugifyStr } from "@utils/slugify";
import { getCollection } from "astro:content";

export const prerender = true;

export async function getStaticPaths() {
  const posts = await getCollection("blog").then((p) =>
    p.filter(({ data }) => !data.draft && !data.ogImage),
  );

  return posts.map((post) => ({
    params: { slug: slugifyStr(post.data.title) },
    props: post,
  }));
}

export const GET: APIRoute = async ({ props }) =>
  new Response(new Uint8Array(await generateOgImageForPost(props as CollectionEntry<"blog">)).buffer, {
    headers: { "Content-Type": "image/png" },
  });
