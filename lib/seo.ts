export const siteName = 'Sapphire Leadership & Advisory';

export function getSiteUrl() {
  const rawUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL ||
    'http://localhost:3000';

  return rawUrl.startsWith('http') ? rawUrl : `https://${rawUrl}`;
}

export const siteUrl = getSiteUrl();

export const defaultDescription =
  'Sapphire Leadership & Advisor empowers schools, educators, and leaders through school improvement, leadership development, accreditation support, and strategic educational advisory.';
