'use client';

import Cookies from 'js-cookie';
import { useCallback, useState } from 'react';
import { useIsMounted } from './use-is-mounted';

export const setCookie = Cookies.set;
export const getCookie = Cookies.get;

export const useCookie = (name: string, defaultValue?: string, defaultOptions?: Cookies.CookieAttributes) => {
  const isMounted = useIsMounted();

  const [value, setValue] = useState(() => {
    const cookie = getCookie(name);
    if (cookie) return cookie;
    if (defaultValue) {
      Cookies.set(name, defaultValue);
      return defaultValue;
    }
    return undefined;
  });

  const updateCookie = useCallback(
    (newValue: string, options?: Cookies.CookieAttributes) => {
      Cookies.set(name, newValue, options ?? defaultOptions);
      setValue(newValue);
    },
    [name],
  );

  const deleteCookie = useCallback(() => {
    Cookies.remove(name);
    setValue(undefined);
  }, [name]);

  return [isMounted ? value : undefined, updateCookie, deleteCookie] as const;
};
