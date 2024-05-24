'use client';

import { Button } from '@/components/ui-kit/button';
import { ConfirmChangeMyPhoneFormValues } from './confirm-change-my-phone-form-schema';
import { ConfirmChangeMyPhoneForm } from './confirm-change-my-phone-form';
import { ErrorAlert } from '@/components/common/error-alert';
import { useEffect, useMemo } from 'react';
import { useConfirmChangeMyPhone } from './use-confirm-change-my-phone';
import { getAPIErrorMessage } from '@/utils/rest-api/get-api-error-message';
import { toast } from 'sonner';
import { useInitChangeMyPhoneMutation } from '@/utils/rest-api/user/use-init-change-my-phone.mutation';

type ConfirmChangeMyPhoneViewProps = {
  phone: string;
  code?: string;
};

export const ConfirmChangeMyPhoneView = (params: ConfirmChangeMyPhoneViewProps) => {
  const {
    confirmChangeMyEmail: confirmChangeMyPhone,
    isPending: isConfirmChangeMyPhonePending,
    error: confirmChangeMyPhoneError,
    reset: resetConfirmChangeMyPhoneError,
  } = useConfirmChangeMyPhone();

  const {
    mutate: initChangeMyPhone,
    isPending: isInitChangeMyPhonePending,
    error: initChangeMyPhoneError,
    reset: resetInitChangeMyPhoneError,
  } = useInitChangeMyPhoneMutation();

  const onResendCodeClick = () =>
    initChangeMyPhone(undefined, {
      onSuccess: () => {
        toast.success(
          `Request to change email has been sent to your email. Please check your email and enter the code to confirm.`,
        );
      },
    });

  useEffect(() => {
    // automatically confirm changing phone if code exist
    const { code, phone } = params;
    if (!code) return;

    confirmChangeMyPhone({ code, phone });
  }, [params]);

  const onSubmit = (formValues: ConfirmChangeMyPhoneFormValues) => confirmChangeMyPhone(formValues);

  const resetError = () => {
    resetConfirmChangeMyPhoneError();
    resetInitChangeMyPhoneError();
  };

  const error = confirmChangeMyPhoneError || initChangeMyPhoneError;

  const errorMessage = useMemo(() => {
    if (error?.response?.data.message === 'Invalid code') return 'The code you entered is invalid';
    return getAPIErrorMessage(error);
  }, [error]);

  return (
    <div className="mx-auto flex max-w-md flex-col">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Change email</h1>
        <p className="text-balance">Enter confirmation code from your email</p>
      </div>
      {errorMessage && <ErrorAlert className="mt-5" message={errorMessage} reset={resetError} />}
      <ConfirmChangeMyPhoneForm onSubmit={onSubmit} id="change-phone-form" className="py-4" defaultValues={params} />
      <div className="mx-auto grid w-72 max-w-full grid-cols-2 gap-2">
        <Button
          type="button"
          className="w-full"
          variant="outline"
          onClick={onResendCodeClick}
          disabled={isInitChangeMyPhonePending}
        >
          Resend code
        </Button>
        <Button type="submit" form="change-phone-form" className="w-full" disabled={isConfirmChangeMyPhonePending}>
          Change
        </Button>
      </div>
    </div>
  );
};
