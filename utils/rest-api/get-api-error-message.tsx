import { AxiosError } from 'axios';

export const getAPIErrorMessage = (error: unknown) => {
  if (!error) return undefined;
  if ((error as Error)?.message === 'Network Error')
    return 'Network error, try connecting to the network or refresh the page';
  if ((error as AxiosError)?.code === 'ECONNABORTED')
    return 'Network error, try connecting to the network or refresh the page';
  if ((error as AxiosError<Error, unknown>)?.response?.data?.message) {
    return `Something went wrong!: ${(error as AxiosError<Error, unknown>)?.response?.data?.message}`;
  }

  return 'Something went wrong! Please refresh the page and try again.';
};
