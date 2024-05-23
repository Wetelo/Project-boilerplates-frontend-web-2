import { FC } from 'react';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { MyProfileFormValues } from './my-profile-form-schema';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui-kit/form';
import { Input } from '@/components/ui-kit/input';
import { useDialog } from '@/components/common/managed-dialog/dialog.context';
import { Button } from '@/components/ui-kit/button';
import { cn } from '@/utils/cn';

type MyProfileFormProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLFormElement>, HTMLFormElement>,
  'onSubmit'
> & {
  onSubmit: SubmitHandler<MyProfileFormValues>;
};

export const MyProfileForm: FC<MyProfileFormProps> = ({ onSubmit, className, ...props }) => {
  const form = useFormContext<MyProfileFormValues>();

  const { handleSubmit, control } = form;

  const { openDialog } = useDialog();

  const onChangeEmailClick = () => openDialog('INIT_CHANGE_MY_EMAIL');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn('flex flex-col gap-5', className)} {...props}>
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
      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input disabled {...field} />
            </FormControl>
            <FormMessage />
            <Button variant="outline" type="button" className="w-full" onClick={onChangeEmailClick}>
              Change email
            </Button>
          </FormItem>
        )}
      />
    </form>
  );
};
