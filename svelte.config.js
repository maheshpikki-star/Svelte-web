/** @type {import("@sveltejs/vite-plugin-svelte").SvelteConfig} */
import adapter from '@sveltejs/adapter-auto';

export default {
  kit: {
    adapter: adapter(),

    csp: {
      mode: 'auto', // or 'hash' / 'nonce'
      directives: {
        'default-src': ['self'],
        'script-src': ['self'],
        'style-src': ['self', "'unsafe-inline'"], // 👈 allow your SDK CSS
        'img-src': ['self', 'data:'],
        'connect-src': ['self']
      }
    }
  }
};