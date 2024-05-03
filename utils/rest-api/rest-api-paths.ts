import { makeRoute } from '../routes/makeRoute';
import { z } from 'zod';

const defaultInfo = {
  search: z.object({}),
  params: z.object({}),
};

export const API_PATHS = {
  LOGIN: makeRoute('/auth/login', {
    ...defaultInfo,
    name: 'LOGIN',
  }),
} as const;
