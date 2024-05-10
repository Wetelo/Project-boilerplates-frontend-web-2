import { AxiosError } from 'axios';
import { toast } from 'sonner';
import { getAPIErrorMessage } from './get-api-error-message';

export const onUnexpectedAPIError = (error: AxiosError<Error>) => {
  const errorMessage = getAPIErrorMessage(error);
  toast.error(errorMessage);
};
