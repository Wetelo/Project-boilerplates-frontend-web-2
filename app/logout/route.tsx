import { AUTH_TOKEN_COOKIE } from '@/utils/auth/auth-token';
import { Login } from '@/utils/routes';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Login',
};

export function GET() {
  cookies().delete(AUTH_TOKEN_COOKIE);
  redirect(Login());
}
