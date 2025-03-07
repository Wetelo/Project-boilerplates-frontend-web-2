import { Metadata } from 'next';
import { Route } from './page.info';
import { AuthGuard } from '@/components/common/auth-guard';
import { ErrorAlert } from '@/components/common/error-alert';
import { ConfirmChangeMyPhoneView } from '@/views/confirm-change-my-phone/confirm-change-my-phone-view';

export const metadata: Metadata = {
  title: 'Change phone',
};

export default function ConfirmChangeMyPhone({
  searchParams: { code, phone },
}: {
  searchParams: Zod.infer<typeof Route.search>;
}) {
  if (!phone) {
    return <ErrorAlert message="Error: Something went wrong!" className="mx-auto w-fit" />;
  }

  return (
    <AuthGuard>
      <ConfirmChangeMyPhoneView {...{ code, phone }} />
    </AuthGuard>
  );
}
