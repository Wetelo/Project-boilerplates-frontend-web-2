export type InitChangeMyEmailRequestDto = {
  email: string;
};

export type ConfirmChangeMyEmailRequestDto = {
  email: string;
  code: string;
};
