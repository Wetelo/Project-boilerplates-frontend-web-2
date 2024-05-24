import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  InitChangeMyPhoneFormValues,
  getDefaultFormValues,
  initChangeMyPhoneValidationSchema,
} from './init-change-my-phone-form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui-kit/form';
import { PhoneInput } from '@/components/ui-kit/phone-input';

type InitChangeMyPhoneFormProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLFormElement>, HTMLFormElement>,
  'onSubmit'
> & {
  onSubmit: SubmitHandler<InitChangeMyPhoneFormValues>;
};

export const InitChangeMyPhoneForm: FC<InitChangeMyPhoneFormProps> = ({ onSubmit, ...props }) => {
  const form = useForm<InitChangeMyPhoneFormValues>({
    defaultValues: getDefaultFormValues(),
    resolver: zodResolver(initChangeMyPhoneValidationSchema),
  });

  const { handleSubmit, control } = form;

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} {...props}>
        <FormField
          control={control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New phone number</FormLabel>
              <FormControl>
                <PhoneInput placeholder="Enter your new phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
