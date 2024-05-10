import { ResetPasswordRequestDto } from '@/types/dto/auth/reset-password.dto';
import { ResetPasswordFormValues } from './reset-password-validation-schema';

export const createResetPasswordDto = (
  params: Pick<ResetPasswordRequestDto, 'code' | 'email'>,
  formValues: ResetPasswordFormValues,
): ResetPasswordRequestDto => ({ ...params, newPassword: formValues.password });
