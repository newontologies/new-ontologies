import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.new-ontologies.com',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
