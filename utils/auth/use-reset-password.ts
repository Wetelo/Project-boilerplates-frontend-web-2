import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { Login } from '../routes';
import { onUnexpectedAPIError } from '../rest-api/on-unexpected-api-error';
import { useResetPasswordMutation } from '../rest-api/auth/use-reset-password.mutation';
import { ResetPasswordRequestDto } from '@/types/dto/auth/reset-password.dto';

export const useResetPassword = () => {
  const { mutate: resetPasswordRequest, ...rest } = useResetPasswordMutation();

  const { push } = useRouter();

  const resetPassword = (dto: ResetPasswordRequestDto) => {
    resetPasswordRequest(dto, {
      onSuccess: () => {
        toast.success('Your password changed. Please log in');
        push(Login());
      },
      onError: onUnexpectedAPIError,
    });
  };

  return {
    resetPassword,
    ...rest,
  };
};
