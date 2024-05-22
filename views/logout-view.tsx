'use client';

import { BlockLoader } from '@/components/ui-kit/block-loader';
import { useLogout } from '@/utils/auth/use-logout';
import { useEffect } from 'react';

export const LogoutView = () => {
  const { logout } = useLogout();

  useEffect(() => {
    logout();
  }, []);
  return <BlockLoader />;
};
