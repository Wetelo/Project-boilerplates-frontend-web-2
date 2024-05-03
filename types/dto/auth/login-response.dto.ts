import { User } from '../../entities/user';

export type LoginResponseDto = {
  token: string;
  user: User;
};
