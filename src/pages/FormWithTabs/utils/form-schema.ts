import { CANT_BE_BLANK } from 'utils/validation/messages';
import { string, z } from 'zod';

const userSchema = z.object({
  firstName: z.string().min(1, CANT_BE_BLANK),
  lastName: z.string(),
  birth: z.date(),
  documentNumber: z.string(),
  gender: z.enum(['M', 'F', 'O']),
  civilStatus: z.enum(['single', 'married', 'other']),
});

const addressSchema = z.object({
  street: z.string().min(1, CANT_BE_BLANK),
  neighborhood: z.string().min(1, CANT_BE_BLANK),
  zipCode: z.string(),
  city: z.string(),
});

export const schema = z.object({
  user: userSchema,
  address: addressSchema,
});
