import { LoginRequestDto } from '@/types/dto/auth/login-request.dto';
import { useLoginMutation } from '../rest-api/auth/use-login.mutation';
import { Home } from '../routes';
import { saveAuthToken } from './auth-token';
import { toast } from 'sonner';
import { getAPIErrorMessage } from '../rest-api/get-api-error-message';

type LoginOptions = {
  redirectUrl?: string;
};

export const useLogin = () => {
  const { mutate: loginRequest, ...rest } = useLoginMutation();

  const login = (dto: LoginRequestDto, options?: LoginOptions) => {
    loginRequest(dto, {
      onSuccess: (res) => {
        saveAuthToken({ accessToken: res.token });
        // refresh the page to make cookies available with SSR
        window.location.href = options?.redirectUrl ?? Home();
      },
      onError: (error) => toast.error(getAPIErrorMessage(error)),
    });
  };

  return {
    login,
    ...rest,
  };
};
