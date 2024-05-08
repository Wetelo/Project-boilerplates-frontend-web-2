import { LoginView } from '@/views/login/login-view';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
};

export default function Login() {
  return <LoginView />;
}
