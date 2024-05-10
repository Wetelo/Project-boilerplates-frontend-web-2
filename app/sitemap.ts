import { Login } from '@/utils/routes';
import { settings } from '@/utils/settings';

const APP_URL = settings.env.NEXT_PUBLIC_URL;

export default async function sitemap() {
  const staticRoutes = ['', Login()].map((route) => ({
    url: new URL(route, APP_URL),
    lastModified: new Date().toISOString(),
  }));

  return [...staticRoutes];
}
