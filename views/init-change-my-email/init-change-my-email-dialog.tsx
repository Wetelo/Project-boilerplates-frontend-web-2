import { useDialog } from '@/components/common/managed-dialog/dialog.context';
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui-kit/dialog';
import { InitChangeMyEmailForm } from './init-change-my-email-form';
import { Button } from '@/components/ui-kit/button';
import { InitChangeMyEmailFormValues } from './init-change-my-email-form-schema';
import { useMemo } from 'react';
import { ErrorAlert } from '@/components/common/error-alert';
import { getAPIErrorMessage } from '@/utils/rest-api/get-api-error-message';
import { toast } from 'sonner';
import { useInitChangeMyEmailMutation } from '@/utils/rest-api/user/use-init-change-my-email.mutation';
import { useRouter } from 'next/navigation';
import { ConfirmChangeMyEmail } from '@/utils/routes';

const InitChangeUserEmailDialog = () => {
  const { closeDialog } = useDialog();
  const { push: redirect } = useRouter();

  const { mutate: initChangeMyEmail, isPending, error, reset } = useInitChangeMyEmailMutation();

  const onSubmit = (params: InitChangeMyEmailFormValues) => {
    initChangeMyEmail(params, {
      onSuccess: () => {
        redirect(ConfirmChangeMyEmail({}, { email: params.email }));
        toast.success(
          `Request to change email has been sent to ${params.email}. Please check your email and enter the code to confirm.`,
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
        <DialogTitle>Change email</DialogTitle>
        <DialogDescription>Enter your new email and we will send you confirmation code there</DialogDescription>
      </DialogHeader>
      {errorMessage && <ErrorAlert message={errorMessage} reset={reset} />}
      <InitChangeMyEmailForm onSubmit={onSubmit} id="init-change-my-email-form" />
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

export default InitChangeUserEmailDialog;
