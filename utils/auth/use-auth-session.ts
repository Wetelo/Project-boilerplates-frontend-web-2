import { useEffect } from 'react';
import { useRefreshAuthSessionQuery } from '../rest-api/auth/use-refresh-auth-session.query';
import { useAuthSessionMeta } from './auth-session-meta';
import { useIsMounted } from '../use-is-mounted';

/**
 * Hook to manage the authentication session.
 *
 * @returns {Object} An object with the following properties:
 *  - `accessToken`: The access token.
 *  - `isLoggedIn`: Indicates if the user is logged in.
 *  - `isPending`: Indicates if the authentication session is being refreshed.
 *  - `error`: The error that occurred during the authentication session refresh.
 */
export const useAuthSession = () => {
  // Get the authentication session meta information
  const { authSessionMeta, updateAuthSessionMeta } = useAuthSessionMeta();

  // Check if the component is mounted
  const isMounted = useIsMounted();

  // Enable the useRefreshAuthSessionQuery query only if the component is mounted and the authentication session meta information is available
  const isQueryEnabled = isMounted && !!authSessionMeta?.tokenLifetimeSeconds;

  // Fetch the access token and refresh the token automatically every hour
  const { data, isPending: pendingRefreshSession, error } = useRefreshAuthSessionQuery({ enabled: isQueryEnabled });

  // Indicate if the authentication session is being refreshed
  const isPending = !isMounted || (pendingRefreshSession && isQueryEnabled);

  // Extract the access token from the response data
  const accessToken = isQueryEnabled ? data?.token : undefined;

  // Update the authentication session meta information when the access token is available and the query is enabled
  useEffect(() => {
    if (accessToken && isQueryEnabled) {
      updateAuthSessionMeta();
    }
  }, [accessToken, isQueryEnabled]);

  return { accessToken, isLoggedIn: !!accessToken, isPending, error };
};
