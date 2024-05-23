import { AxiosError } from 'axios';
import { RESTAPIClient } from '../rest-api-client';
import { REST_API_PATHS } from '../rest-api-paths';
import { useMutation } from '@tanstack/react-query';
import { InitChangeMyEmailRequestDto } from '@/types/dto/user/change-my-email.dto';

type Params = InitChangeMyEmailRequestDto;
type Response = void;

export const initChangeMyEmailRequest = async (params: Params) => {
  const { data } = await RESTAPIClient.post<Response>(REST_API_PATHS.INIT_CHANGE_MY_EMAIL(), params);
  return data;
};

export const useInitChangeMyEmailMutation = () => {
  return useMutation<Response, AxiosError<Error>, Params>({
    mutationFn: initChangeMyEmailRequest,
  });
};
