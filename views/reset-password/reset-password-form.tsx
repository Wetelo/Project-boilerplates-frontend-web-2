import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  ResetPasswordFormValues,
  getDefaultFormValues,
  resetPasswordValidationSchema,
} from './reset-password-validation-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui-kit/form';
import { Input } from '@/components/ui-kit/input';
import { cn } from '@/utils/cn';

type RegistrationFormProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLFormElement>, HTMLFormElement>,
  'onSubmit'
> & {
  onSubmit: SubmitHandler<ResetPasswordFormValues>;
};

export const ResetPasswordForm: FC<RegistrationFormProps> = ({ onSubmit, className, ...props }) => {
  const form = useForm<ResetPasswordFormValues>({
    defaultValues: getDefaultFormValues(),
    resolver: zodResolver(resetPasswordValidationSchema),
  });

  const { handleSubmit, control } = form;

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className={cn('grid gap-4', className)} {...props}>
        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Enter password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Confirm your password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
