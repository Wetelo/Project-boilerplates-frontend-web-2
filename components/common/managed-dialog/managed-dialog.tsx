'use client';

import dynamic from 'next/dynamic';
import { Dialog } from '../../ui-kit/dialog';
import { useDialog } from './dialog.context';

const ForgotPasswordDialog = dynamic(() => import('@/views/forgot-password/forgot-password-dialog'));
const ChangePasswordDialog = dynamic(() => import('@/views/change-password/change-password-dialog'));
const InitChangeUserEmailDialog = dynamic(() => import('@/views/init-change-my-email/init-change-my-email-dialog'));

const ManagedDialog = () => {
  const { isOpen, view, closeDialog, data } = useDialog();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dialogProps = data as any;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => (open ? undefined : closeDialog())}>
      {view === 'FORGOT_PASSWORD' && <ForgotPasswordDialog {...dialogProps} />}
      {view === 'CHANGE_PASSWORD' && <ChangePasswordDialog {...dialogProps} />}
      {view === 'INIT_CHANGE_MY_EMAIL' && <InitChangeUserEmailDialog {...dialogProps} />}
    </Dialog>
  );
};

export { ManagedDialog };
