import { useDialog } from '@/components/common/managed-dialog/dialog.context';
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui-kit/dialog';
import { ForgotPasswordForm } from './forgot-password-form';
import { Button } from '@/components/ui-kit/button';
import { useForgotPasswordMutation } from '@/utils/rest-api/auth/use-forgot-password.mutation';
import { ForgotPasswordFormValues } from './fogot-password-validation-schema';
import { useMemo, useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui-kit/alert';
import { ErrorAlert } from '@/components/common/error-alert';
import { statusCodes } from '@/utils/rest-api/status-codes';
import { getAPIErrorMessage } from '@/utils/rest-api/get-api-error-message';

const ForgotPasswordDialog = () => {
  const { closeDialog } = useDialog();

  const [successMessageShowed, setSuccessMessageShowed] = useState(false);

  const { mutate: forgotPassword, isPending, error, reset } = useForgotPasswordMutation();

  const onSubmit = (params: ForgotPasswordFormValues) => {
    forgotPassword(params, {
      onSuccess: () => setSuccessMessageShowed(true),
    });
  };

  const errorMessage = useMemo(() => {
    if (!error) return;
    if (error.response?.status === statusCodes.NOT_FOUND) return 'Cannot find account with email you provided';
    return getAPIErrorMessage(error);
  }, [error]);

  return (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Password reset</DialogTitle>
        <DialogDescription>Enter your email and we&apos;ll send you a link to reset your password.</DialogDescription>
      </DialogHeader>
      {errorMessage && <ErrorAlert message={errorMessage} reset={reset} />}
      {!successMessageShowed && <ForgotPasswordForm onSubmit={onSubmit} id="forgot-password-form" />}
      {successMessageShowed && (
        <Alert variant="default">
          <AlertTitle>If you enter correct email we&apos;ve send you a message.</AlertTitle>
          <AlertDescription>Follow the instuctions to reset your password</AlertDescription>
        </Alert>
      )}
      <DialogFooter>
        <Button onClick={closeDialog} type="button" variant="outline">
          Back to login
        </Button>

        <Button type="submit" form="forgot-password-form" disabled={isPending || successMessageShowed}>
          Send
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default ForgotPasswordDialog;
