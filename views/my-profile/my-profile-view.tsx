'use client';

import { Button } from '@/components/ui-kit/button';
import { MyProfileFormValues } from './my-profile-form-schema';
import { MyProfileForm } from './my-profile-form';
import { useGetMyProfileQuery } from '@/utils/rest-api/user/use-get-my-profile.query';
import { WithGenericQueryHandler } from '@/components/common/with-generic-query-handler';
import { User } from '@/types/entities/user';
import { useUpdateMyProfileMutation } from '@/utils/rest-api/user/use-update-my-profile.mutation';
import { toast } from 'sonner';
import { onUnexpectedAPIError } from '@/utils/rest-api/on-unexpected-api-error';
import { MyProfileFormProvider } from './my-profile-form-provider';
import { MyProfileLoader } from './my-profile-loader';
import { UpdateMyProfileRequestDto } from '@/types/dto/user/update-my-profile.dto';

const prepareMyProfileFormValues = (myProfile?: User): Partial<MyProfileFormValues> => ({
  email: myProfile?.email,
  firstName: myProfile?.firstName,
  avatarFileUUID: myProfile?.avatarFileUUID ? myProfile?.avatarFileUUID : undefined,
  lastName: myProfile?.lastName,
});
const prepareMyProfileDto = (formValues: MyProfileFormValues): UpdateMyProfileRequestDto => ({
  avatarFileUUID: formValues?.avatarFileUUID,
  firstName: formValues?.firstName,
  lastName: formValues?.lastName,
});

export const MyProfileView = () => {
  const myProfileQuery = useGetMyProfileQuery();
  const { mutate: updateMyProfile, isPending: updatingMyProfile, isSuccess } = useUpdateMyProfileMutation();
  const { data: myProfile } = myProfileQuery;

  const onSubmit = (formValues: MyProfileFormValues) => {
    if (!myProfile) throw new Error('Unexpected error: user profile is undefined');

    updateMyProfile(prepareMyProfileDto(formValues), {
      onSuccess: () => toast.success('Your profile has beed successfully updated'),
      onError: onUnexpectedAPIError,
    });
  };
  return (
    <div className="container max-w-md py-10">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">My profile</h1>
      </div>
      <WithGenericQueryHandler queries={[myProfileQuery]} Loader={<MyProfileLoader />}>
        <MyProfileFormProvider defaultValues={prepareMyProfileFormValues(myProfile)}>
          {({ formState: { isDirty } }) => (
            <>
              <MyProfileForm onSubmit={onSubmit} id="my-profile-form" />
              <Button
                type="submit"
                className="mt-5 w-full"
                form="my-profile-form"
                disabled={!isDirty || isSuccess || updatingMyProfile}
              >
                Update
              </Button>
            </>
          )}
        </MyProfileFormProvider>
      </WithGenericQueryHandler>
    </div>
  );
};
