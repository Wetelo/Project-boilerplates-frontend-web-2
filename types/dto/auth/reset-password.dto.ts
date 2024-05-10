export type ResetPasswordRequestDto = {
  newPassword: string;
  code: string;
  email: string;
};
