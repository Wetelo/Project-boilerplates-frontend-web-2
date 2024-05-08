import { RegistrationView } from '@/views/registration/registration-view';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Registration',
};

export default function Registration() {
  return <RegistrationView />;
}
