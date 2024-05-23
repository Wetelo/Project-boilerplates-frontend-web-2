'use client';

import { useAuthSession } from '@/utils/auth/use-auth-session';
import { FC, PropsWithChildren, ReactNode } from 'react';
import { BlockLoader } from '../ui-kit/block-loader';
import { ErrorAlert } from './error-alert';

type AuthGuardProps = PropsWithChildren & {
  Loader?: ReactNode;
};

export const AuthGuard: FC<AuthGuardProps> = ({ children, Loader = <BlockLoader /> }) => {
  const { isLoggedIn, isPending } = useAuthSession();

  if (isPending) {
    return Loader;
  }
  if (!isLoggedIn) {
    return <ErrorAlert message="You are not logged in" />;
  }
  return <>{children}</>;
};
