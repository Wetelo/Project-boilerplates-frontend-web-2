'use client';

import { AuthGuard } from '@/components/common/auth-guard';
import { MyProfileView } from '@/views/my-profile/my-profile-view';
import MyProfileLoader from './loading';

export default function MyProfile() {
  return (
    <AuthGuard Loader={<MyProfileLoader />}>
      <MyProfileView />
    </AuthGuard>
  );
}
