import { ConfirmChangeMyPhoneRequestDto } from '@/types/dto/user/change-my-phone.dto';
import { useConfirmChangeMyPhoneMutation } from '@/utils/rest-api/user/use-confirm-change-my-phone.mutation';
import { Home } from '@/utils/routes';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export const useConfirmChangeMyPhone = () => {
  const { mutate, isPending, error, reset } = useConfirmChangeMyPhoneMutation();

  const { push: redirect } = useRouter();

  const confirmChangeMyPhone = (params: ConfirmChangeMyPhoneRequestDto) =>
    mutate(params, {
      onSuccess: () => {
        toast.success('Your phone has been changed!');
        redirect(Home());
      },
    });

  return { confirmChangeMyEmail: confirmChangeMyPhone, isPending, error, reset };
};
