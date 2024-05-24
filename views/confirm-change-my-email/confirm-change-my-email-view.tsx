'use client';

import { Button } from '@/components/ui-kit/button';
import { ConfirmChangeMyEmailFormValues } from './confirm-change-my-email-form-schema';
import { ConfirmChangeMyEmailForm } from './confirm-change-my-email-form';
import { ErrorAlert } from '@/components/common/error-alert';
import { useEffect, useMemo } from 'react';
import { useConfirmChangeMyEmail } from './use-confirm-change-my-email';
import { getAPIErrorMessage } from '@/utils/rest-api/get-api-error-message';
import { useInitChangeMyEmailMutation } from '@/utils/rest-api/user/use-init-change-my-email.mutation';
import { toast } from 'sonner';

type ConfirmChangeMyEmailViewProps = {
  email: string;
  code?: string;
};

export const ConfirmChangeMyEmailView = (params: ConfirmChangeMyEmailViewProps) => {
  const {
    confirmChangeMyEmail,
    isPending: isConfirmChangeMyEmailPending,
    error: confirmChangeMyEmailError,
    reset: resetConfirmChangeMyEmailError,
  } = useConfirmChangeMyEmail();

  const {
    mutate: initChangeMyEmail,
    isPending: isInitChangeMyEmailPending,
    error: initChangeMyEmailError,
    reset: resetInitChangeMyEmailError,
  } = useInitChangeMyEmailMutation();

  const onResendCodeClick = () =>
    initChangeMyEmail(
      { email: params.email },
      {
        onSuccess: () => {
          toast.success(
            `Request to change email has been sent to ${params.email}. Please check your email and enter the code to confirm.`,
          );
        },
      },
    );

  useEffect(() => {
    // automatically confirm changing email if code exist
    const { code, email } = params;
    if (!code) return;

    confirmChangeMyEmail({ code, email });
  }, [params]);

  const onSubmit = (formValues: ConfirmChangeMyEmailFormValues) => confirmChangeMyEmail(formValues);

  const resetError = () => {
    resetConfirmChangeMyEmailError();
    resetInitChangeMyEmailError();
  };

  const error = confirmChangeMyEmailError || initChangeMyEmailError;

  const errorMessage = useMemo(() => {
    if (error?.response?.data.message === 'Invalid code') return 'The code you entered is invalid';
    return getAPIErrorMessage(error);
  }, [error]);

  return (
    <div className="mx-auto flex max-w-md flex-col">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Change email</h1>
        <p className="text-balance">
          Enter confirmation code from <b>{params.email}</b>
        </p>
      </div>
      {errorMessage && <ErrorAlert className="mt-5" message={errorMessage} reset={resetError} />}
      <ConfirmChangeMyEmailForm onSubmit={onSubmit} id="change-email-form" className="py-4" defaultValues={params} />
      <div className="mx-auto grid w-72 max-w-full grid-cols-2 gap-2">
        <Button
          type="button"
          className="w-full"
          variant="outline"
          onClick={onResendCodeClick}
          disabled={isInitChangeMyEmailPending}
        >
          Resend code
        </Button>
        <Button type="submit" form="change-email-form" className="w-full" disabled={isConfirmChangeMyEmailPending}>
          Change
        </Button>
      </div>
    </div>
  );
};
