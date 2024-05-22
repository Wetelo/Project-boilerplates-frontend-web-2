import { Home } from '../routes';
import { useAuthSessionMeta } from './auth-session-meta';
import { useRouter } from 'next/navigation';
import { useLogoutMutation } from '../rest-api/auth/use-logout.mutation';
import { onUnexpectedAPIError } from '../rest-api/on-unexpected-api-error';

type LoginOptions = {
  redirectUrl?: string;
};

export const useLogout = () => {
  const { mutate: logoutRequest, ...rest } = useLogoutMutation();
  const { push: redirect } = useRouter();

  const { clearAuthSessionMeta } = useAuthSessionMeta();

  const logout = (_?: unknown, options?: LoginOptions) => {
    logoutRequest(undefined, {
      onSuccess: () => {
        clearAuthSessionMeta();
        redirect(options?.redirectUrl ?? Home());
      },
      onError: onUnexpectedAPIError,
    });
  };

  return {
    logout,
    ...rest,
  };
};
