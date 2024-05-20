import { useCallback } from 'react';
import { useCookie } from '../cookies';
import { settings } from '../settings';

const AUTH_SESSION_META_COOKIE = 'auth-session-meta';

const REFRESH_TOKEN_LIFETIME_DAYS = settings.env.NEXT_PUBLIC_REFRESH_TOKEN_LIFETIME_DAYS ?? 1;
const SHARED_COOKIES_DOMAIN = settings.env.NEXT_PUBLIC_SHARED_COOKIES_DOMAIN;

const tokenLifetimeSeconds = REFRESH_TOKEN_LIFETIME_DAYS * 24 * 3600;

type AuthSessionMeta = {
  tokenLifetimeSeconds: number;
};

export const useAuthSessionMeta = () => {
  const [cookie, setCookie, deleteCookie] = useCookie(AUTH_SESSION_META_COOKIE, undefined, {
    expires: REFRESH_TOKEN_LIFETIME_DAYS,
    domain: SHARED_COOKIES_DOMAIN, // or current domain if undefined
  });

  const authSessionMeta = cookie ? (JSON.parse(cookie) as AuthSessionMeta) : undefined;
  const updateAuthSessionMeta = useCallback(() => {
    setCookie(JSON.stringify({ tokenLifetimeSeconds } satisfies AuthSessionMeta));
  }, []);
  const clearAuthSessionMeta = useCallback(() => {
    deleteCookie();
  }, []);

  return {
    authSessionMeta,
    updateAuthSessionMeta,
    clearAuthSessionMeta,
  };
};
