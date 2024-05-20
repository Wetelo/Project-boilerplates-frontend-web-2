import { FC } from 'react';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { MyProfileFormValues } from './my-profile-form-schema';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui-kit/form';
import { Input } from '@/components/ui-kit/input';
import { Button } from '@/components/ui-kit/button';
import { useDialog } from '@/components/common/managed-dialog/dialog.context';
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

  const onChangePasswordClick = () => openDialog('CHANGE_PASSWORD');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn('flex flex-col gap-2.5', className)} {...props}>
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
      <Button type="button" variant="outline" onClick={onChangePasswordClick}>
        Change password
      </Button>
    </form>
  );
};
