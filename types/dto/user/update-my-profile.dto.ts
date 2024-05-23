import { User } from '@/types/entities/user';

export type UpdateMyProfileRequestDto = Pick<User, 'firstName' | 'lastName' | 'avatarFileUUID'>;
