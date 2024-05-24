'use client';

import { useCallback } from 'react';
import { useCookies, ReactCookieProps } from 'react-cookie';
import { useIsMounted } from './use-is-mounted';

type CookieSetOptions = ReactCookieProps['defaultSetOptions'];

export const useCookie = (name: string, defaultOptions?: CookieSetOptions) => {
  const [cookies, setCookie, removeCookie] = useCookies([name]);

  const isMounted = useIsMounted();

  const value = isMounted ? cookies?.[name] : undefined;

  /**
   * Function to update the cookie value.
   *
   * @param {string} newValue - The new value for the cookie.
   */
  const updateCookie = useCallback(
    (newValue: string, options?: CookieSetOptions) => {
      setCookie(name, newValue, { ...defaultOptions, ...options });
    },
    [name, defaultOptions],
  );

  /**
   * Function to delete the cookie.
   */
  const deleteCookie = useCallback(() => {
    removeCookie(name);
  }, [name]);

  return [value, updateCookie, deleteCookie] as const;
};
