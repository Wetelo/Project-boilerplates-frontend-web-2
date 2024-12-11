import { Metadata } from 'next';
import { Route } from './page.info';
import { ConfirmChangeMyEmailView } from '@/views/confirm-change-my-email/confirm-change-my-email-view';
import { AuthGuard } from '@/components/common/auth-guard';
import { ErrorAlert } from '@/components/common/error-alert';

export const metadata: Metadata = {
  title: 'Change email',
};

export default async function ConfirmChangeMyEmail({
  searchParams: params,
}: {
  searchParams: Promise<Zod.infer<typeof Route.search>>;
}) {
  const { code, email } = await params;

  if (!email) {
    return <ErrorAlert message="Error: Something went wrong!" className="mx-auto w-fit" />;
  }

  return (
    <AuthGuard>
      <ConfirmChangeMyEmailView {...{ code, email }} />
    </AuthGuard>
  );
}
