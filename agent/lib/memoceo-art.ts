import { z } from "zod";

export const slots = ["architect", "executor", "outsider"] as const;
export type ArtSlot = (typeof slots)[number];
export const slotSchema = z.enum(slots);
export const draftSchema = z.object({
  id: z.uuid(), slot: slotSchema, prompt: z.string().max(5000),
  createdAt: z.iso.datetime(), mediaType: z.enum(["image/png", "image/jpeg", "image/webp"]),
});
export type ArtDraft = z.infer<typeof draftSchema>;
export const artRoot = () => `memoceo/${process.env.VERCEL_ENV === "production" ? "production" : "preview"}`;
export const hasArtStorage = () => Boolean(process.env.BLOB_STORE_ID || process.env.BLOB_READ_WRITE_TOKEN);
export const draftPath = (id: string) => `${artRoot()}/drafts/${id}.json`;
export const imagePath = (id: string) => `${artRoot()}/images/${id}`;
export const approvalPath = (slot: ArtSlot) => `${artRoot()}/approved/${slot}.json`;

export async function readArtJson(path: string) {
  const { get } = await import("@vercel/blob");
  const result = await get(path, { access: "private", useCache: false });
  if (!result || !result.stream) return null;
  return { value: await new Response(result.stream).json() as unknown, etag: result.blob.etag };
}

export async function approvedDraft(slot: ArtSlot) {
  const stored = await readArtJson(approvalPath(slot));
  if (!stored) return null;
  const draft = draftSchema.parse(stored.value);
  if (draft.slot !== slot) throw new Error("Artwork slot mismatch");
  return draft;
}

export async function imageResponse(draft: ArtDraft, published: boolean) {
  const { get } = await import("@vercel/blob");
  const result = await get(imagePath(draft.id), { access: "private", useCache: false });
  if (!result?.stream) return new Response("Image unavailable", { status: 404 });
  return new Response(result.stream, { headers: {
    "Content-Type": draft.mediaType, "X-Content-Type-Options": "nosniff",
    "Cache-Control": published ? "public, max-age=60" : "private, no-store",
    "Content-Security-Policy": "default-src 'none'; sandbox",
  } });
}

// Public routes accept only a fixed slot; draft IDs/paths are never public inputs.
export async function publicArtResponse(value: string) {
  const slot = slotSchema.safeParse(value);
  if (!slot.success || !hasArtStorage()) return new Response("Not found", { status: 404 });
  try {
    const draft = await approvedDraft(slot.data);
    return draft ? await imageResponse(draft, true) : new Response("Not found", { status: 404 });
  } catch {
    return new Response("Artwork temporarily unavailable", { status: 503 });
  }
}

export async function renderApprovedArt(html: string) {
  if (!hasArtStorage()) return html;
  const titles = ["The Architect × Obsidian GT", "The Executor × Aurum R", "The Outsider × Midnight Sovereign"];
  const approved = await Promise.all(slots.map(async slot => {
    try { return await approvedDraft(slot); }
    catch { console.warn("MEMOCEO approved artwork unavailable"); return null; }
  }));
  let index = 0;
  let rendered = html.replace(/<div class="garage-stage">[\s\S]*?<\/svg><\/div>/g, original => {
    const i = index++;
    if (!approved[i]) return original;
    return `<div class="garage-stage garage-approved"><img src="/memoceo/art/${slots[i]}?v=${approved[i]!.id}" alt="${titles[i]} — approved MEMOCEO artwork" loading="lazy"></div>`;
  });
  ["Obsidian GT", "Aurum R", "Midnight Sovereign"].forEach((title, i) => {
    if (approved[i]) rendered = rendered.replace(`<h3>${title}</h3>`, `<h3>${titles[i]}</h3>`);
  });
  return rendered;
}
