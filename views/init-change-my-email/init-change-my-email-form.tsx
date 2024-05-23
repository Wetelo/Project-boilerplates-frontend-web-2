import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  InitChangeMyEmailFormValues,
  getDefaultFormValues,
  initChangeMyEmailValidationSchema,
} from './init-change-my-email-form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui-kit/form';
import { Input } from '@/components/ui-kit/input';

type InitChangeMyEmailFormProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLFormElement>, HTMLFormElement>,
  'onSubmit'
> & {
  onSubmit: SubmitHandler<InitChangeMyEmailFormValues>;
};

export const InitChangeMyEmailForm: FC<InitChangeMyEmailFormProps> = ({ onSubmit, ...props }) => {
  const form = useForm<InitChangeMyEmailFormValues>({
    defaultValues: getDefaultFormValues(),
    resolver: zodResolver(initChangeMyEmailValidationSchema),
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
              <FormLabel>New email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter your new email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
