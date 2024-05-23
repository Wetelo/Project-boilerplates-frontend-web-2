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
  REFRESH_AUTH_SESSION: makeRoute('/auth/refresh', {
    ...defaultInfo,
    name: 'REFRESH_AUTH_SESSION',
  }),
  LOGOUT: makeRoute('/auth/log-out', {
    ...defaultInfo,
    name: 'LOGOUT',
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
  STATIC_PAGES: makeRoute('/static-pages', {
    ...defaultInfo,
    name: 'STATIC_PAGES',
  }),
  STATIC_PAGE_BY_SLUG: makeRoute('/static-pages/[slug]', {
    ...defaultInfo,
    params: z.object({
      slug: z.string(),
    }),
    name: 'STATIC_PAGE_BY_SLUG',
  }),
  INIT_CHANGE_MY_EMAIL: makeRoute('/user/change-email/verify-code', {
    ...defaultInfo,
    name: 'INIT_CHANGE_MY_EMAIL',
  }),
  CONFIRM_CHANGE_MY_EMAIL: makeRoute('/user/email', {
    ...defaultInfo,
    name: 'CONFIRM_CHANGE_MY_EMAIL',
  }),
} as const;
