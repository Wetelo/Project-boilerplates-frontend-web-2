'use client';

import { Button } from '@/components/ui-kit/button';
import { useRegister } from '@/utils/auth/use-register';
import { RegistrationFormValues } from './registration-validation-schema';
import { RegistrationForm } from './registration-form';
import { Login } from '@/utils/routes';

export const RegistrationView = () => {
  const { register: registerAccount, isPending } = useRegister();

  const onSubmit = (formValues: RegistrationFormValues) => registerAccount(formValues);

  return (
    <div className="mx-auto max-w-md">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Register</h1>
        <p className="text-balance">Enter your information below to register your account</p>
      </div>
      <RegistrationForm onSubmit={onSubmit} id="registration-form" />
      <Button type="submit" form="registration-form" className="w-full" disabled={isPending}>
        Register
      </Button>
      <div className="mt-4 text-center text-sm">
        Already have account? <Login.Link className="underline">Log in</Login.Link>
      </div>
    </div>
  );
};
