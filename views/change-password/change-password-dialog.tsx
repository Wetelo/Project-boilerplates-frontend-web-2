import { useDialog } from '@/components/common/managed-dialog/dialog.context';
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui-kit/dialog';
import { ChangePasswordForm } from './change-password-form';
import { Button } from '@/components/ui-kit/button';
import { ChangePasswordFormValues } from './change-password-form-schema';
import { useMemo } from 'react';
import { ErrorAlert } from '@/components/common/error-alert';
import { getAPIErrorMessage } from '@/utils/rest-api/get-api-error-message';
import { useChangeMyPasswordMutation } from '@/utils/rest-api/user/use-change-my-password.mutation';
import { toast } from 'sonner';

const ChangePasswordDialog = () => {
  const { closeDialog } = useDialog();

  const { mutate: changeMyPassword, isPending, error, reset } = useChangeMyPasswordMutation();

  const onSubmit = (params: ChangePasswordFormValues) => {
    changeMyPassword(params, {
      onSuccess: () => {
        toast.success('Your password has been changed!');
        closeDialog();
      },
    });
  };

  const errorMessage = useMemo(() => {
    if (!error) return;
    if (error.response?.data === 'Invalid password') return 'Current password you provided is invalid';
    return getAPIErrorMessage(error);
  }, [error]);

  return (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Change password</DialogTitle>
        <DialogDescription>Enter your your current and new password</DialogDescription>
      </DialogHeader>
      {errorMessage && <ErrorAlert message={errorMessage} reset={reset} />}
      <ChangePasswordForm onSubmit={onSubmit} id="change-password-form" />
      <DialogFooter>
        <Button onClick={closeDialog} type="button" variant="outline">
          Back
        </Button>

        <Button type="submit" form="change-password-form" disabled={isPending}>
          Change
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default ChangePasswordDialog;
