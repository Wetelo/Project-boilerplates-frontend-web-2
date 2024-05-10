import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  ForgotPasswordFormValues,
  getDefaultFormValues,
  forgotPasswordValidationSchema,
} from './fogot-password-validation-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui-kit/form';
import { Input } from '@/components/ui-kit/input';

type ForgotPasswordFormProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLFormElement>, HTMLFormElement>,
  'onSubmit'
> & {
  onSubmit: SubmitHandler<ForgotPasswordFormValues>;
};

export const ForgotPasswordForm: FC<ForgotPasswordFormProps> = ({ onSubmit, ...props }) => {
  const form = useForm<ForgotPasswordFormValues>({
    defaultValues: getDefaultFormValues(),
    resolver: zodResolver(forgotPasswordValidationSchema),
  });

  const { handleSubmit, control } = form;

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} {...props}>
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
