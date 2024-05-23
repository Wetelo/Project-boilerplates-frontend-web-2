import { ConfirmChangeMyEmailFormValues } from './confirm-change-my-email-form-schema';
import { ConfirmChangeMyEmailRequestDto } from '@/types/dto/user/change-my-email.dto';

export const createResetPasswordDto = (
  params: Partial<Pick<ConfirmChangeMyEmailRequestDto, 'code' | 'email'>>,
  formValues: ConfirmChangeMyEmailFormValues,
): ConfirmChangeMyEmailRequestDto => ({ ...params, ...formValues });
