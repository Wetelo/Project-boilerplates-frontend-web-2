import { AxiosError } from 'axios';
import { RESTAPIClient } from '../rest-api-client';
import { REST_API_PATHS } from '../rest-api-paths';
import { useMutation } from '@tanstack/react-query';

type Params = void;
type Response = void;

export const logoutRequest = async () => {
  const { data } = await RESTAPIClient.post<Response>(REST_API_PATHS.LOGOUT());
  return data;
};

export const useLogoutMutation = () => {
  return useMutation<Response, AxiosError<Error>, Params>({
    mutationFn: logoutRequest,
  });
};
