/** @type {import("@sveltejs/vite-plugin-svelte").SvelteConfig} */
import adapter from '@sveltejs/adapter-auto';

export default {
  kit: {
    adapter: adapter(),

    csp: {
      mode: 'auto',
      directives: {
        'default-src': ['self'],
        'script-src': ['self', "https://*.apxor.com"],
        'style-src': ['self', "https://*.apxor.com"],
        'img-src': ['self', 'data:'],
        'connect-src': ['self']
      }
    }
  }
};