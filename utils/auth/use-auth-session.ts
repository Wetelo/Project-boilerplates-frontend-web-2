import { useEffect } from 'react';
import { useRefreshAuthSessionQuery } from '../rest-api/auth/use-refresh-auth-session.query';
import { useAuthSessionMeta } from './auth-session-meta';
import { useIsMounted } from '../use-is-mounted';

export const useAuthSession = () => {
  const { authSessionMeta, updateAuthSessionMeta } = useAuthSessionMeta();
  const isMounted = useIsMounted();

  const isQueryEnabled = isMounted && !!authSessionMeta?.tokenLifetimeSeconds;

  // access token will be fetched on client mount and refreshed automatically every 5 minutes
  const { data, isPending: pendingRefreshSession, error } = useRefreshAuthSessionQuery({ enabled: isQueryEnabled });

  const isPending = !isMounted || (pendingRefreshSession && isQueryEnabled);

  const accessToken = isQueryEnabled ? data?.token : undefined;

  useEffect(() => {
    if (accessToken && isQueryEnabled) {
      updateAuthSessionMeta();
    }
  }, [accessToken, isQueryEnabled]);

  return { accessToken, isLoggedIn: !!accessToken, isPending, error };
};
