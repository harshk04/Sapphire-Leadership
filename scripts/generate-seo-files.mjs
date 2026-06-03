import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const siteUrlRaw =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL ||
  'http://localhost:3000';

const siteUrl = siteUrlRaw.startsWith('http') ? siteUrlRaw : `https://${siteUrlRaw}`;

const routes = [
  '/',
  '/schools',
  '/teacherspage',
  '/studentpage',
  '/aboutus',
  '/resourcespage',
  '/contact',
  '/consultation',
  '/privacy-policy',
  '/terms-of-service',
  '/cookie-policy',
];

const now = new Date().toISOString();

const sitemapEntries = routes
  .map((route) => {
    const priority =
      route === '/' ? '1.0' :
      route === '/schools' ? '0.95' :
      route === '/consultation' ? '0.9' :
      route === '/teacherspage' || route === '/studentpage' ? '0.85' :
      route === '/aboutus' || route === '/resourcespage' ? '0.8' :
      route === '/contact' ? '0.75' : '0.3';

    const changefreq =
      route === '/' || route === '/schools' || route === '/teacherspage' || route === '/studentpage' || route === '/resourcespage'
        ? 'weekly'
        : 'monthly';

    return `  <url>
    <loc>${siteUrl}${route}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join('\n');

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
Host: ${siteUrl}
`;

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>
`;

const publicDir = resolve(process.cwd(), 'public');

await mkdir(publicDir, { recursive: true });
await writeFile(resolve(publicDir, 'robots.txt'), robotsTxt, 'utf8');
await writeFile(resolve(publicDir, 'sitemap.xml'), sitemapXml, 'utf8');

