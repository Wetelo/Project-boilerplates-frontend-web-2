import { ZodType, z } from 'zod';

export const phoneRegex = new RegExp(/^[+]{1}(?:[0-9-()/.]\s?){11,11}[0-9]{1}$/);

export const phoneNumberSchema = (invalidPhoneMessage = 'Invalid phone number') =>
  z.string().regex(phoneRegex, invalidPhoneMessage);

export const removeWhitespace = <T extends ZodType = z.ZodString>(target: T) =>
  z.string().trim().pipe(target).optional() as unknown as T;

export const requiredNumberSchema = (requiredMessage = 'This field is required') =>
  z.number({ invalid_type_error: requiredMessage });
export const requiredStringSchema = (requiredMessage = 'This field is required') => z.string().min(1, requiredMessage);

export const strongPasswordSchema = ({
  minimumLengthMessage,
  maximumLengthMessage,
  caseMessage,
}: Record<string, string> = {}) =>
  z
    .string()
    .min(8, { message: minimumLengthMessage ?? 'Minimum password length is 8 symbols' })
    .max(16, { message: maximumLengthMessage ?? 'Maximum password length is 16 symbols' })
    .refine(
      (password) => {
        const containsUppercase = (ch: string) => /[A-Z]/.test(ch);
        const containsLowercase = (ch: string) => /[a-z]/.test(ch);
        let countOfUpperCase = 0,
          countOfLowerCase = 0;
        for (let i = 0; i < password.length; i++) {
          const ch = password.charAt(i);
          if (containsUppercase(ch)) countOfUpperCase++;
          else if (containsLowercase(ch)) countOfLowerCase++;
        }
        return countOfLowerCase > 0 && countOfUpperCase > 0;
      },
      {
        message: caseMessage ?? 'Password must contain at least 1 uppercase and 1 lowercase character',
      },
    );
