import { LoginRequestDto } from '@/types/dto/auth/login-request.dto';
import { useLoginMutation } from '../rest-api/auth/use-login.mutation';
import { Home } from '../routes';
import { useAuthSessionMeta } from './auth-session-meta';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

type LoginOptions = {
  redirectUrl?: string;
};

export const useLogin = () => {
  const { mutate: loginRequest, ...rest } = useLoginMutation();
  const { push: redirect } = useRouter();

  const { updateAuthSessionMeta } = useAuthSessionMeta();

  const login = (dto: LoginRequestDto, options?: LoginOptions) => {
    loginRequest(dto, {
      onSuccess: () => {
        updateAuthSessionMeta();
        toast.success('Welcome');
        redirect(options?.redirectUrl ?? Home());
      },
    });
  };

  return {
    login,
    ...rest,
  };
};
