import { toast } from 'sonner';
import { useRegistrationMutation } from '../rest-api/auth/use-registration.mutation';
import { RegistrationRequestDto } from '@/types/dto/auth/registration-request.dto';
import { useRouter } from 'next/navigation';
import { Login } from '../routes';
import { onUnexpectedAPIError } from '../rest-api/on-unexpected-api-error';

export const useRegister = () => {
  const { mutate: registrationRequest, ...rest } = useRegistrationMutation();

  const { push } = useRouter();

  const register = (dto: RegistrationRequestDto) => {
    registrationRequest(dto, {
      onSuccess: () => {
        toast.success('Your account has been created. Please log in');
        push(Login());
      },
      onError: onUnexpectedAPIError,
    });
  };

  return {
    register,
    ...rest,
  };
};
