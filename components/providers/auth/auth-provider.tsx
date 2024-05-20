'use client';

import { useAuthSession } from '@/utils/auth/use-auth-session';
import { RESTAPIClient } from '@/utils/rest-api/rest-api-client';
import { FC, PropsWithChildren } from 'react';

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const { accessToken } = useAuthSession();

  RESTAPIClient.defaults.headers.common['Authorization'] = accessToken ? `Bearer ${accessToken}` : undefined;

  return children;
};
