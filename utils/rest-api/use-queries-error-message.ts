import { getAPIErrorMessage } from './get-api-error-message';

export const useQueriesErrorMessage = (errors: unknown[]) => {
  const error = errors?.find((error) => error);
  if (!error) return;
  return getAPIErrorMessage(error);
};
