/** @type {import("@sveltejs/vite-plugin-svelte").SvelteConfig} */
import adapter from "@sveltejs/adapter-auto";

const domains = ["https://*.apxor.com"];

export default {
  // kit: {
  //   adapter: adapter(),

  //   csp: {
  //     mode: "auto",
  //     directives: {
  //       "default-src": ['self'],
  //       "script-src": ['self'],
  //       "style-src": ['self'],
  //       "img-src": ['self', 'data:'],
  //       "connect-src": ['self'],
  //     },
  //   },
  // },
};
