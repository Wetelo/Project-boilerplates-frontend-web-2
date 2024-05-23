import { FC } from 'react';
import { cn } from '@/utils/cn';
import { WithDropzone } from '@/components/common/with-dropzone';
import { useFormContext } from 'react-hook-form';
import { MyProfileFormValues } from './my-profile-form-schema';
import { UploadFileResponseDto } from '@/types/dto/files/upload-file.dto';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui-kit/avatar';
import { getUploadedFileSrc } from '@/utils/rest-api/files/get-uploaded-file-src';
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui-kit/form';
import { FileRejection } from 'react-dropzone';
import { getAvatarColor } from '@/utils/user/get-avatar-color';
import { useGetMyProfileQuery } from '@/utils/rest-api/user/use-get-my-profile.query';
import { getAvatarInitials } from '@/utils/user/get-avatar-initials';

type AvatarUploaderProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const AvatarUploader: FC<AvatarUploaderProps> = ({ className, ...props }) => {
  const { setValue, watch, setError, clearErrors, control } = useFormContext<MyProfileFormValues>();

  const avatarFileUUID = watch('avatarFileUUID');

  const { data: user } = useGetMyProfileQuery();

  const avatarSrc = avatarFileUUID ? getUploadedFileSrc(avatarFileUUID) : undefined;

  const onSuccessUpload = ({ uuid: avatarFileUUID }: UploadFileResponseDto) => {
    clearErrors('avatarFileUUID');
    setValue('avatarFileUUID', avatarFileUUID, {
      shouldDirty: true,
    });
  };

  const onError = (fileRejections: FileRejection[]) =>
    setError(`avatarFileUUID`, { message: fileRejections[0]?.errors[0]?.message });

  return (
    <div className={cn('mx-auto py-10', className)} {...props}>
      <FormField
        control={control}
        name="avatarFileUUID"
        render={({ field, fieldState }) => (
          <FormItem>
            <FormControl>
              <WithDropzone onSuccessUpload={onSuccessUpload} onError={onError} name={field.name}>
                {({ className }) => (
                  <div
                    className={cn(className, 'mx-auto size-40 rounded-full p-1', {
                      'border-red-500': !!fieldState.error,
                    })}
                  >
                    <Avatar className="size-full">
                      <AvatarImage src={avatarSrc} />
                      <AvatarFallback style={{ background: getAvatarColor(user!.id) }} className="text-2xl text-white">
                        {getAvatarInitials(user!)}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                )}
              </WithDropzone>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
