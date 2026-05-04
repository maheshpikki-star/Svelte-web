/** @type {import("@sveltejs/vite-plugin-svelte").SvelteConfig} */
import adapter from '@sveltejs/adapter-auto';

export default {
  kit: {
    adapter: adapter(),

    csp: {
      mode: 'auto', 
      directives: {
        'default-src': ['self'],
        // 1. Allow the SDK scripts to run
        'script-src': ['self'],
        
        // 2. Allow styles from the SDK and your inline JS-generated styles
        'style-src': ['self'], 
        
        // 3. Allow gradients and images from the SDK
        'img-src': ['self', 'data:'],
        
        // 4. CRITICAL: Allow the API call you shared earlier
        'connect-src': ['self']
      }
    }
  }
};