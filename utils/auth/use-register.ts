import { useRegistrationMutation } from '../rest-api/auth/use-registration.mutation';
import { RegistrationRequestDto } from '@/types/dto/auth/registration-request.dto';
import { useRouter } from 'next/navigation';
import { Home } from '../routes';
import { onUnexpectedAPIError } from '../rest-api/on-unexpected-api-error';
import { useAuthSessionMeta } from './auth-session-meta';
import { toast } from 'sonner';

export const useRegister = () => {
  const { mutate: registrationRequest, ...rest } = useRegistrationMutation();

  const { updateAuthSessionMeta } = useAuthSessionMeta();

  const { push: redirect } = useRouter();

  const register = (dto: RegistrationRequestDto) => {
    registrationRequest(dto, {
      onSuccess: () => {
        updateAuthSessionMeta();
        toast.success('Welcome');
        redirect(Home());
      },
      onError: onUnexpectedAPIError,
    });
  };

  return {
    register,
    ...rest,
  };
};
