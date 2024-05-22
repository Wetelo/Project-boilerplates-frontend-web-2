'use client';

import Cookies from 'js-cookie';
import { useCallback, useState } from 'react';
import { useIsMounted } from './use-is-mounted';

export const setCookie = Cookies.set;
export const getCookie = Cookies.get;

/**
 * Hook to manage a cookie.
 * !Client side only
 *
 * @param {string} name - The name of the cookie.
 * @param {string} [defaultValue] - The default value for the cookie.
 * @param {Cookies.CookieAttributes} [defaultOptions] - The default options for the cookie.
 * @returns {[string | undefined, function, function]} - An array containing the cookie value, a function to update the cookie value, and a function to delete the cookie.
 */
export const useCookie = (name: string, defaultValue?: string, defaultOptions?: Cookies.CookieAttributes) => {
  /**
   * Flag to check if the component is mounted.
   * @type {boolean}
   */
  const isMounted = useIsMounted();

  /**
   * The value of the cookie.
   * @type {string | undefined}
   */
  const [value, setValue] = useState(() => {
    const cookie = getCookie(name);
    if (cookie) return cookie;
    if (defaultValue) {
      Cookies.set(name, defaultValue);
      return defaultValue;
    }
    return undefined;
  });

  /**
   * Function to update the cookie value.
   *
   * @param {string} newValue - The new value for the cookie.
   * @param {Cookies.CookieAttributes} [options] - The options for the cookie.
   * @returns {void}
   */
  const updateCookie = useCallback(
    (newValue: string, options?: Cookies.CookieAttributes) => {
      Cookies.set(name, newValue, options ?? defaultOptions);
      setValue(newValue);
    },
    [name],
  );

  /**
   * Function to delete the cookie.
   * @returns {void}
   */
  const deleteCookie = useCallback(() => {
    Cookies.remove(name);
    setValue(undefined);
  }, [name]);

  return [isMounted ? value : undefined, updateCookie, deleteCookie] as const;
};
