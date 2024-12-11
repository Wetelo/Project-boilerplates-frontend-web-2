'use client';

import dynamic from 'next/dynamic';
import { ManagedDialog } from '@/components/common/managed-dialog/managed-dialog';

const Toaster = dynamic(() => import('@/components/ui-kit/sonner').then(({ Toaster }) => Toaster), { ssr: false });
const Devtools = dynamic(() => import('@/components/common/devtools'), { ssr: false });

export const Managers = () => {
  return (
    <>
      <ManagedDialog />
      <Toaster position="bottom-center" />
      <Devtools />
    </>
  );
};
