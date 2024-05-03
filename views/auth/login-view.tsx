'use client';

import { Button } from '@/components/ui-kit/button';
import { Input } from '@/components/ui-kit/input';
import { Label } from '@/components/ui-kit/label';
import { useLogin } from '@/utils/auth/use-login';
import { useForm } from 'react-hook-form';

type LoginFormValues = {
  email: string;
  password: string;
};

export const LoginView = () => {
  const { register, handleSubmit } = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { login, isPending } = useLogin();

  const onSubmit = ({ email, password }: LoginFormValues) => login({ email, password });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4 py-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" {...register('email')} />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" {...register('password')} />
        </div>
      </div>
      <Button type="submit" className="w-full md:w-32" disabled={isPending}>
        Log in
      </Button>
    </form>
  );
};
