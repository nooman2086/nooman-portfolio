import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

type Seo = Record<string, string>;

const seo: Seo = JSON.parse(
  readFileSync(fileURLToPath(new URL('./src/data/seo.json', import.meta.url)), 'utf-8'),
);

const escapeAttr = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const siteUrl = seo.siteUrl.replace(/\/+$/, '');

/**
 * Fills {{tokens}} in index.html from src/data/seo.json, adds JSON-LD structured data,
 * and emits robots.txt and sitemap.xml so SEO settings live in one file.
 */
function seoPlugin(): Plugin {
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: seo.author,
    jobTitle: seo.jobTitle,
    url: siteUrl,
    description: seo.description,
    ...(seo.linkedinUrl ? { sameAs: [seo.linkedinUrl] } : {}),
  }).replace(/</g, '\\u003c');

  return {
    name: 'seo-from-json',
    transformIndexHtml(html) {
      return html
        .replace('{{jsonLd}}', jsonLd)
        .replace(/\{\{(\w+)\}\}/g, (_match, key: string) => escapeAttr(seo[key] ?? ''));
    },
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
      });
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${siteUrl}/</loc></url>\n</urlset>\n`,
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), seoPlugin()],
  build: {
    target: 'es2020',
    sourcemap: false,
  },
});
