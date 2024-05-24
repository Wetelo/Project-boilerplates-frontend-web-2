import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  ConfirmChangeMyPhoneFormValues,
  getDefaultFormValues,
  confirmChangeMyPhoneSchema,
} from './confirm-change-my-phone-form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from '@/components/ui-kit/form';
import { cn } from '@/utils/cn';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui-kit/input-otp';

type ConfirmChangeMyPhoneFormProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLFormElement>, HTMLFormElement>,
  'onSubmit'
> & {
  onSubmit: SubmitHandler<ConfirmChangeMyPhoneFormValues>;
  defaultValues?: Partial<ConfirmChangeMyPhoneFormValues>;
};

export const ConfirmChangeMyPhoneForm: FC<ConfirmChangeMyPhoneFormProps> = ({
  onSubmit,
  defaultValues,
  className,
  ...props
}) => {
  const form = useForm<ConfirmChangeMyPhoneFormValues>({
    defaultValues: getDefaultFormValues(defaultValues),
    resolver: zodResolver(confirmChangeMyPhoneSchema),
  });

  const { handleSubmit, control } = form;

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className={cn('grid items-center gap-4', className)} {...props}>
        <FormField
          control={control}
          name="code"
          render={({ field }) => (
            <FormItem className="mx-auto flex w-fit flex-col items-center">
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
              <FormDescription className="text-center">Please enter the code sent to your email.</FormDescription>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
