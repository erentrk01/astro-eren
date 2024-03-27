import { defineConfig } from 'astro/config';
// Import /static for a static site
import netlify from '@astrojs/netlify/functions';
export default defineConfig({
  output: "server",
  adapter: netlify(),
});