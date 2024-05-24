import { useDialog } from '@/components/common/managed-dialog/dialog.context';
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui-kit/dialog';
import { InitChangeMyPhoneForm } from './init-change-my-phone-form';
import { Button } from '@/components/ui-kit/button';
import { InitChangeMyPhoneFormValues } from './init-change-my-phone-form-schema';
import { useMemo } from 'react';
import { ErrorAlert } from '@/components/common/error-alert';
import { getAPIErrorMessage } from '@/utils/rest-api/get-api-error-message';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { ConfirmChangeMyPhone } from '@/utils/routes';
import { useInitChangeMyPhoneMutation } from '@/utils/rest-api/user/use-init-change-my-phone.mutation';

const InitChangeMyPhoneDialog = () => {
  const { closeDialog } = useDialog();
  const { push: redirect } = useRouter();

  const { mutate: initChangeMyPhone, isPending, error, reset } = useInitChangeMyPhoneMutation();

  const onSubmit = (params: InitChangeMyPhoneFormValues) => {
    initChangeMyPhone(undefined, {
      onSuccess: () => {
        redirect(ConfirmChangeMyPhone({}, { phone: params.phone }));
        toast.success(
          `Request to change email has been sent to your email. Please check your email and enter the code to confirm.`,
        );
        closeDialog();
      },
    });
  };

  const errorMessage = useMemo(() => {
    return getAPIErrorMessage(error);
  }, [error]);

  return (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Change phone number</DialogTitle>
        <DialogDescription>Enter your new phone and we will send you confirmation code</DialogDescription>
      </DialogHeader>
      {errorMessage && <ErrorAlert message={errorMessage} reset={reset} />}
      <InitChangeMyPhoneForm onSubmit={onSubmit} id="init-change-my-email-form" />
      <DialogFooter>
        <Button onClick={closeDialog} type="button" variant="outline">
          Back
        </Button>

        <Button type="submit" form="init-change-my-email-form" disabled={isPending}>
          Change
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default InitChangeMyPhoneDialog;
