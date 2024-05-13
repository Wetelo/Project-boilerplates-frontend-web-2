import { FC } from 'react';
import { UseFormReturn, useForm } from 'react-hook-form';
import { MyProfileFormValues, getDefaultFormValues, myProfileValidationSchema } from './my-profile-form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui-kit/form';

type MyProfileFormProviderProps = {
  defaultValues?: Partial<MyProfileFormValues>;
  children: FC<UseFormReturn<MyProfileFormValues>>;
};

export const MyProfileFormProvider: FC<MyProfileFormProviderProps> = ({ defaultValues, children }) => {
  const form = useForm<MyProfileFormValues>({
    defaultValues: getDefaultFormValues(defaultValues),
    resolver: zodResolver(myProfileValidationSchema),
  });

  return <Form {...form}>{children(form)}</Form>;
};
