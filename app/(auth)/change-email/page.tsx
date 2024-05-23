import { Metadata } from 'next';
import { Route } from './page.info';
import { ConfirmChangeMyEmailView } from '@/views/confirm-change-my-email/confirm-change-my-email-view';
import { AuthGuard } from '@/components/common/auth-guard';
import { ErrorAlert } from '@/components/common/error-alert';

export const metadata: Metadata = {
  title: 'Change email',
};

export default function ConfirmChangeMyEmail({
  searchParams: { code, email },
}: {
  searchParams: Zod.infer<typeof Route.search>;
}) {
  if (!email) {
    return <ErrorAlert message="Error: Something went wrong!" className="mx-auto w-fit" />;
  }

  return (
    <AuthGuard>
      <ConfirmChangeMyEmailView {...{ code, email }} />
    </AuthGuard>
  );
}
