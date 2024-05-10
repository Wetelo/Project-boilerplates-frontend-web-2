'use client';

import { Button } from '@/components/ui-kit/button';
import { useLogin } from '@/utils/auth/use-login';
import { Registration } from '@/utils/routes';
import { LoginForm } from './login-form';
import { LoginFormValues } from './login-validation-schema';
import { getAPIErrorMessage } from '@/utils/rest-api/get-api-error-message';
import { useMemo } from 'react';
import { ErrorAlert } from '@/components/common/error-alert';

export const LoginView = () => {
  const { login, isPending, error, reset } = useLogin();

  const onSubmit = (formValues: LoginFormValues) => login(formValues);

  const errorMessage = useMemo(() => {
    if (!error) return;
    if (error.response?.data?.message === 'Invalid credentials') return "You've entered invalid credentials";
    return getAPIErrorMessage(error);
  }, [error]);

  return (
    <div className="mx-auto max-w-md">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-balance">Enter your credentials below to login to your account</p>
      </div>
      {errorMessage && <ErrorAlert className="mt-5" message={errorMessage} reset={reset} />}
      <LoginForm onSubmit={onSubmit} id="login-form" />
      <Button type="submit" className="w-full" form="login-form" disabled={isPending}>
        Login
      </Button>
      <div className="mt-4 text-center text-sm">
        Don&apos;t have account? <Registration.Link className="underline">Register</Registration.Link>
      </div>
    </div>
  );
};
