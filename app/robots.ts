import { settings } from '@/utils/settings';
import { MetadataRoute } from 'next';

const APP_URL = settings.env.NEXT_PUBLIC_URL;
const ALLOW_APP_CRAWLING = settings.env.ALLOW_APP_CRAWLING === 'true';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ALLOW_APP_CRAWLING ? '/' : undefined,
      disallow: ALLOW_APP_CRAWLING ? undefined : '/',
    },
    sitemap: ALLOW_APP_CRAWLING ? new URL('/sitemap.xml', APP_URL).toString() : undefined,
  };
}
