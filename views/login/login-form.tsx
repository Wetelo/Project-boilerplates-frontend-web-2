import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { loginValidationSchema, getDefaultFormValues, LoginFormValues } from './login-validation-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui-kit/form';
import { Input } from '@/components/ui-kit/input';

type LoginFormProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLFormElement>, HTMLFormElement>,
  'onSubmit'
> & {
  onSubmit: SubmitHandler<LoginFormValues>;
};

export const LoginForm: FC<LoginFormProps> = ({ onSubmit, ...props }) => {
  const form = useForm<LoginFormValues>({
    defaultValues: getDefaultFormValues(),
    resolver: zodResolver(loginValidationSchema),
  });

  const { handleSubmit, control } = form;

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} {...props}>
        <div className="grid gap-4 py-4">
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
        </div>
      </form>
    </Form>
  );
};
