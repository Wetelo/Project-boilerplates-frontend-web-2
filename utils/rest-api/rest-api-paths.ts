import { makeRoute } from '../routes/makeRoute';
import { z } from 'zod';

const defaultInfo = {
  search: z.object({}),
  params: z.object({}),
};

export const REST_API_PATHS = {
  LOGIN: makeRoute('/auth/login', {
    ...defaultInfo,
    name: 'LOGIN',
  }),
  REGISTRATION: makeRoute('/auth/register', {
    ...defaultInfo,
    name: 'REGISTRATION',
  }),
  FORGOT_PASSWORD: makeRoute('/auth/forgot-password', {
    ...defaultInfo,
    name: 'FORGOT_PASSWORD',
  }),
  RESET_PASSWORD: makeRoute('/auth/reset-password', {
    ...defaultInfo,
    name: 'RESET_PASSWORD',
  }),
  CHANGE_MY_PASSWORD: makeRoute('/user/password', {
    ...defaultInfo,
    name: 'CHANGE_MY_PASSWORD',
  }),
  MY_PROFILE: makeRoute('/user/profile', {
    ...defaultInfo,
    name: 'MY_PROFILE',
  }),
} as const;
