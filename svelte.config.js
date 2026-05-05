/** @type {import("@sveltejs/vite-plugin-svelte").SvelteConfig} */
import adapter from "@sveltejs/adapter-auto";

const domains = ["https://*.apxor.com"];

export default {
  kit: {
    adapter: adapter(),

    csp: {
      mode: "nonce",
      directives: {
        "default-src": ["self"],
        "script-src": ["self", ...domains],
        "style-src": ["self", 'unsafe-inline', ...domains],
        "img-src": ["self", "data:", ...domains],
        "connect-src": ["self", ...domains],
      },
    },
  },
};
