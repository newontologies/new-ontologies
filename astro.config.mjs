import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://newontologies.com',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
