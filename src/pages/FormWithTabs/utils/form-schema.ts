import { CANT_BE_BLANK } from 'utils/validation/messages';
import { z } from 'zod';

export const schema = z.object({
  user: z.object({
    firstName: z.string().min(1, CANT_BE_BLANK),
    lastName: z.string(),
    birth: z.date(),
    documentNumber: z.string(),
    gender: z.enum(['M', 'F', 'O']),
    civilStatus: z.enum(['single', 'married', 'other']),
  }),
});
