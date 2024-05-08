import { AxiosError } from 'axios';
import { toast } from 'sonner';
import { getAPIErrorMessage } from './get-api-error-message';

export const genericMutationErrorHandler = (error: AxiosError<Error>) => toast.error(getAPIErrorMessage(error));
