/** @type {import("@sveltejs/vite-plugin-svelte").SvelteConfig} */
import adapter from '@sveltejs/adapter-auto';

const domains = ["https://*.apxor.com", "unsafe-inline"]

export default {
  kit: {
    adapter: adapter(),

    csp: {
      mode: 'nonce',
      directives: {
        'default-src': ['self', ...domains],
        'script-src': ['self', ...domains],
        'style-src': ['self', ...domains],
        'img-src': ['self', 'data:', ...domains],
        'connect-src': ['self', ...domains]
      }
    }
  }
};