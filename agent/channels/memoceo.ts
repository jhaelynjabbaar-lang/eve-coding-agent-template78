import { defineChannel, GET } from "eve/channels";
import { memoceoPage } from "../lib/memoceo-page";

// A public, read-only page. Agent session and tool authorization are unchanged.
export default defineChannel({
  routes: [
    GET("/memoceo", async () => new Response(memoceoPage, {
      headers: { "content-type": "text/html; charset=utf-8" },
    })),
  ],
});
