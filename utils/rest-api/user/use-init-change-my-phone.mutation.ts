import { AxiosError } from 'axios';
import { RESTAPIClient } from '../rest-api-client';
import { REST_API_PATHS } from '../rest-api-paths';
import { useMutation } from '@tanstack/react-query';

type Params = undefined;
type Response = void;

export const initChangeMyPhoneRequest = async (params: Params) => {
  const { data } = await RESTAPIClient.post<Response>(REST_API_PATHS.INIT_CHANGE_MY_PHONE(), params);
  return data;
};

export const useInitChangeMyPhoneMutation = () => {
  return useMutation<Response, AxiosError<Error>, Params>({
    mutationFn: initChangeMyPhoneRequest,
  });
};
