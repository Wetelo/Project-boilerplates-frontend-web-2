import { env } from './env';

export const settings = {
  env,
  isDev: env.NEXT_PUBLIC_ENVIRONMENT_TYPE === 'development',
  isProd: env.NEXT_PUBLIC_ENVIRONMENT_TYPE === 'production',
} as const;
