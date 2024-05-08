'use client';

import { Button } from '@/components/ui-kit/button';
import { useLogin } from '@/utils/auth/use-login';
import { Registration } from '@/utils/routes';
import { LoginForm } from './login-form';
import { LoginFormValues } from './login-validation-schema';

export const LoginView = () => {
  const { login, isPending } = useLogin();

  const onSubmit = (formValues: LoginFormValues) => login(formValues);

  return (
    <div className="mx-auto max-w-md">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-balance">Enter your credentials below to login to your account</p>
      </div>
      <LoginForm onSubmit={onSubmit} />
      <Button type="submit" className="w-full" disabled={isPending}>
        Login
      </Button>
      <div className="mt-4 text-center text-sm">
        Don&apos;t have account? <Registration.Link className="underline">Register</Registration.Link>
      </div>
    </div>
  );
};
