import { FC } from 'react';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { MyProfileFormValues } from './my-profile-form-schema';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui-kit/form';
import { Input } from '@/components/ui-kit/input';

type MyProfileFormProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLFormElement>, HTMLFormElement>,
  'onSubmit'
> & {
  onSubmit: SubmitHandler<MyProfileFormValues>;
};

export const MyProfileForm: FC<MyProfileFormProps> = ({ onSubmit, ...props }) => {
  const form = useFormContext<MyProfileFormValues>();

  const { handleSubmit, control } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)} {...props}>
      <FormField
        control={control}
        name="firstName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>First name</FormLabel>
            <FormControl>
              <Input placeholder="Enter your first name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="lastName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Last name</FormLabel>
            <FormControl>
              <Input placeholder="Enter your last name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </form>
  );
};
