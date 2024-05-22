import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    ALLOW_APP_CRAWLING: z.string().optional(),
  },
  client: {
    NEXT_PUBLIC_URL: z.string().url(),
    NEXT_PUBLIC_API_URL: z.string().url(),
    NEXT_PUBLIC_ENVIRONMENT_TYPE: z.string().optional(),
    NEXT_PUBLIC_REFRESH_TOKEN_LIFETIME_DAYS: z.string().regex(/^\d+$/).transform(Number).optional(),
    NEXT_PUBLIC_SHARED_COOKIES_DOMAIN: z.string().optional(),
  },
  // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
  runtimeEnv: {
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_ENVIRONMENT_TYPE: process.env.NEXT_PUBLIC_ENVIRONMENT_TYPE,
    ALLOW_APP_CRAWLING: process.env.ALLOW_APP_CRAWLING,
    NEXT_PUBLIC_SHARED_COOKIES_DOMAIN: process.env.NEXT_PUBLIC_SHARED_COOKIES_DOMAIN,
    NEXT_PUBLIC_REFRESH_TOKEN_LIFETIME_DAYS: process.env.NEXT_PUBLIC_REFRESH_TOKEN_LIFETIME_DAYS,
  },
  // For Next.js >= 13.4.4, you only need to destructure client variables:
  // experimental__runtimeEnv: {
  //   NEXT_PUBLIC_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_PUBLISHABLE_KEY,
  // }
});
