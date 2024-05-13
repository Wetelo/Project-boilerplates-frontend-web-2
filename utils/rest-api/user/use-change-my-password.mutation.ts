import { AxiosError } from 'axios';
import { RESTAPIClient } from '../rest-api-client';
import { REST_API_PATHS } from '../rest-api-paths';
import { useMutation } from '@tanstack/react-query';
import { ChangeMyPasswordRequestDto } from '@/types/dto/user/change-my-password.dto';

type Params = ChangeMyPasswordRequestDto;
type Response = void;

export const changeMyPasswordRequest = async (params: Params) => {
  const { data } = await RESTAPIClient.put<Response>(REST_API_PATHS.CHANGE_MY_PASSWORD(), params);
  return data;
};

export const useChangeMyPasswordMutation = () => {
  return useMutation<Response, AxiosError<Error> | AxiosError<string>, Params>({
    mutationFn: changeMyPasswordRequest,
  });
};
