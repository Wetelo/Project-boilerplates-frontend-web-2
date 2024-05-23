import { z } from 'zod';

export const Route = {
  name: 'StaticPage',
  params: z.object({
    slug: z.string(),
  }),
};
