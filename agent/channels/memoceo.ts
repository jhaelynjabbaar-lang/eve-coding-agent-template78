import { defineChannel, GET } from "eve/channels";
import { memoceoPage } from "../lib/memoceo-page";
import { publicArtResponse, renderApprovedArt } from "../lib/memoceo-art";

// Read-only public art. Private drafts and studio actions are not exposed here.
export default defineChannel({
  routes: [
    GET("/memoceo", async () => new Response(await renderApprovedArt(memoceoPage), {
      headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" },
    })),
    GET("/memoceo/art/:slot", async (_request, { params }) => publicArtResponse(params.slot)),
  ],
});
