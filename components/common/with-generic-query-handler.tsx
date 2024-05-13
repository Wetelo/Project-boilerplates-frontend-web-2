import { UseQueryResult } from '@tanstack/react-query';
import { PropsWithChildren, ReactNode } from 'react';
import { ErrorAlert } from './error-alert';
import { BlockLoader } from '@/components/ui-kit/block-loader';
import { useQueriesErrorMessage } from '@/utils/rest-api/use-queries-error-message';

type GenericQueryResult = Partial<Pick<UseQueryResult<unknown, unknown>, 'isPending' | 'error'>>;

type WithGenericQueryHandlerProps<T extends GenericQueryResult[]> = PropsWithChildren<{
  queries: T;
  Loader?: ReactNode;
}>;

export const WithGenericQueryHandler = <T extends GenericQueryResult[]>({
  queries,
  children,
  Loader = <BlockLoader />,
}: WithGenericQueryHandlerProps<T>) => {
  const errorMessage = useQueriesErrorMessage(queries.map(({ error }) => error));

  const isPending = !!queries?.find(({ isPending }) => isPending);

  if (isPending) return Loader;
  if (errorMessage) return <ErrorAlert message={errorMessage} />;

  return <>{children}</>;
};
