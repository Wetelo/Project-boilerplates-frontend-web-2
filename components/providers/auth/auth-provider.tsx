'use client';

import { useAuthSession } from '@/utils/auth/use-auth-session';
import { RESTAPIClient } from '@/utils/rest-api/rest-api-client';
import { FC, PropsWithChildren } from 'react';

/**
 * The AuthProvider component is a wrapper that sets the access token
 * in the REST API client's headers. It uses the `useAuthSession` hook
 * to get the access token and then sets it in the headers of the REST
 * API client.
 *
 * This component is used to provide the access token to the REST API
 * client so that it can be used to authenticate API requests.
 *
 * @param {PropsWithChildren} props - The props object containing the
 * children of the component.
 * @return {ReactElement} The children of the component.
 */
export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  // Get the access token from the auth session
  const { accessToken } = useAuthSession();

  /**
   * Set the access token in the headers of the REST API client.
   * This is done by setting the `Authorization` header with the
   * value of `Bearer ${accessToken}`. If there is no access token,
   * the header is set to `undefined`.
   */
  RESTAPIClient.defaults.headers.common['Authorization'] = accessToken ? `Bearer ${accessToken}` : undefined;

  // Return the children of the component
  return children;
};
