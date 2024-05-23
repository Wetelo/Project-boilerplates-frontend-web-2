import { User } from '@/types/entities/user';

export const getAvatarInitials = (user: User) =>
  `${user.firstName.charAt(0).toUpperCase()}${user.lastName.charAt(0).toUpperCase()}`;
