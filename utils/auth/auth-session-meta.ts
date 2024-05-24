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

/**
 * Hook to manage the authentication session meta information.
 *
 * ! AUTH_SESSION_META_COOKIE is an additional cookie to track lifetime of the refresh token cookie (which is not available on the client side)
 *
 * The refresh token cookie lifetime is set to 1 day by default
 * The refresh token cookie lifetime can be changed by setting the NEXT_PUBLIC_REFRESH_TOKEN_LIFETIME_DAYS environment variable
 *
 * The shared cookies domain can be changed by setting the NEXT_PUBLIC_SHARED_COOKIES_DOMAIN environment variable
 * The shared cookies domain is set to the current domain (localhost in dev mode) by default
 *
 * The session meta information includes the lifetime of the refresh token.
 *
 * @returns {Object} An object with the following properties:
 *  - `authSessionMeta`: The authentication session meta information.
 *  - `updateAuthSessionMeta`: Function to update the authentication session meta information.
 *  - `clearAuthSessionMeta`: Function to clear the authentication session meta information.
 */
export const useAuthSessionMeta = () => {
  /**
   * The authentication session meta information cookie.
   *
   * @type {[string | undefined, function, function]}
   */

  const [cookie, setCookie, deleteCookie] = useCookie(AUTH_SESSION_META_COOKIE, {
    domain: SHARED_COOKIES_DOMAIN, // or current domain if undefined
  });

  /**
   * The authentication session meta information.
   *
   * @type {AuthSessionMeta | undefined}
   */
  const authSessionMeta = cookie as AuthSessionMeta | undefined;

  /**
   * Updates the authentication session meta information.
   *
   * @returns {void}
   */
  const updateAuthSessionMeta = useCallback(() => {
    setCookie(JSON.stringify({ tokenLifetimeSeconds } satisfies AuthSessionMeta), {
      expires: new Date(Date.now() + tokenLifetimeSeconds * 1000),
    });
  }, []);

  /**
   * Clears the authentication session meta information.
   *
   * @returns {void}
   */
  const clearAuthSessionMeta = deleteCookie;

  return {
    authSessionMeta,
    updateAuthSessionMeta,
    clearAuthSessionMeta,
  };
};
