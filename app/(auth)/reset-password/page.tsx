import { ResetPasswordView } from '@/views/reset-password/reset-password-view';
import { Metadata } from 'next';
import { Route } from './page.info';
import { ErrorAlert } from '@/components/common/error-alert';

export const metadata: Metadata = {
  title: 'Reset password',
};

export default async function ResetPassword({
  searchParams: params,
}: {
  searchParams: Promise<Zod.infer<typeof Route.search>>;
}) {
  const { code, email } = await params;
  if (!code || !email) {
    return <ErrorAlert message="Error: Something went wrong!" className="mx-auto w-fit" />;
  }
  return <ResetPasswordView {...{ code, email }} />;
}
