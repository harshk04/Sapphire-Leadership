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
  'Sapphire Leadership & Advisory helps schools grow through strategic consulting, governance excellence, financial optimization, crisis management, and leadership development.';

