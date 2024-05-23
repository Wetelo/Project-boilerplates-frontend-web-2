import { ConfirmChangeMyEmailRequestDto } from '@/types/dto/user/change-my-email.dto';
import { useConfirmChangeMyEmailMutation } from '@/utils/rest-api/user/use-confirm-change-my-email.mutation';
import { Home } from '@/utils/routes';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export const useConfirmChangeMyEmail = () => {
  const { mutate, isPending, error, reset } = useConfirmChangeMyEmailMutation();

  const { push: redirect } = useRouter();

  const confirmChangeMyEmail = (params: ConfirmChangeMyEmailRequestDto) =>
    mutate(params, {
      onSuccess: () => {
        toast.success('Your email has been changed!');
        redirect(Home());
      },
    });

  return { confirmChangeMyEmail, isPending, error, reset };
};
