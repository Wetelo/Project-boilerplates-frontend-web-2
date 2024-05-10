'use client';

import { Button } from '@/components/ui-kit/button';
import { ResetPasswordFormValues } from './reset-password-validation-schema';
import { ResetPasswordForm } from './reset-password-form';
import { createResetPasswordDto } from './create-reset-password-dto';
import { ResetPasswordRequestDto } from '@/types/dto/auth/reset-password.dto';
import { useResetPassword } from '@/utils/auth/use-reset-password';

type ResetPasswordViewProps = Pick<ResetPasswordRequestDto, 'code' | 'email'>;

export const ResetPasswordView = (params: ResetPasswordViewProps) => {
  const { resetPassword, isPending } = useResetPassword();

  const onSubmit = (formValues: ResetPasswordFormValues) => resetPassword(createResetPasswordDto(params, formValues));

  return (
    <div className="mx-auto max-w-md">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Password reset</h1>
        <p className="text-balance">Confirm your new password</p>
      </div>
      <ResetPasswordForm onSubmit={onSubmit} id="reset-password-form" className="py-4" />
      <Button type="submit" form="reset-password-form" className="w-full" disabled={isPending}>
        Reset password
      </Button>
    </div>
  );
};
