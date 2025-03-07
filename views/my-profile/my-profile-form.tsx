import { FC } from 'react';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { MyProfileFormValues } from './my-profile-form-schema';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui-kit/form';
import { Input } from '@/components/ui-kit/input';
import { Button } from '@/components/ui-kit/button';
import { useDialog } from '@/components/common/managed-dialog/dialog.context';
import { cn } from '@/utils/cn';
import { AvatarUploader } from './avatar-uploader';
import { Label } from '@/components/ui-kit/label';
import { useGetMyProfileQuery } from '@/utils/rest-api/user/use-get-my-profile.query';

type MyProfileFormProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLFormElement>, HTMLFormElement>,
  'onSubmit'
> & {
  onSubmit: SubmitHandler<MyProfileFormValues>;
};

export const MyProfileForm: FC<MyProfileFormProps> = ({ onSubmit, className, ...props }) => {
  const form = useFormContext<MyProfileFormValues>();

  const { data: user } = useGetMyProfileQuery();

  const { handleSubmit, control } = form;

  const { openDialog } = useDialog();

  const onChangePhoneClick = () => openDialog('INIT_CHANGE_MY_PHONE');

  const onChangeEmailClick = () => openDialog('INIT_CHANGE_MY_EMAIL');

  const onChangePasswordClick = () => openDialog('CHANGE_PASSWORD');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn('flex flex-col gap-2.5', className)} {...props}>
      <AvatarUploader />
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
        render={() => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input disabled value={user?.email} />
            </FormControl>
            <FormMessage />
            <Button variant="outline" type="button" className="w-full" onClick={onChangeEmailClick}>
              Change email
            </Button>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="phone"
        render={() => (
          <FormItem>
            <FormLabel>Phone number</FormLabel>
            <FormControl>
              <Input disabled value={user?.phone} placeholder="Add your phone number" />
            </FormControl>
            <FormMessage />
            <Button variant="outline" type="button" className="w-full" onClick={onChangePhoneClick}>
              Add or change phone number
            </Button>
          </FormItem>
        )}
      />
      <FormItem>
        <Label>Password</Label>
        <Button type="button" className="w-full" variant="outline" onClick={onChangePasswordClick}>
          Change password
        </Button>
      </FormItem>
    </form>
  );
};
