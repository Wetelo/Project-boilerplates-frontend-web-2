'use client';

import { FC, PropsWithoutRef } from 'react';
import { CookiesProvider as CP, ReactCookieProps } from 'react-cookie';

export const CookiesProvider: FC<PropsWithoutRef<ReactCookieProps>> = (props) => {
  return <CP {...props} />;
};
