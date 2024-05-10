import { AxiosError } from 'axios';
import { RESTAPIClient } from '../rest-api-client';
import { REST_API_PATHS } from '../rest-api-paths';
import { useMutation } from '@tanstack/react-query';
import { ResetPasswordRequestDto } from '@/types/dto/auth/reset-password.dto';

type Params = ResetPasswordRequestDto;
type Response = void;

export const resetPasswordRequest = async (params: Params) => {
  const { data } = await RESTAPIClient.post<Response>(REST_API_PATHS.RESET_PASSWORD(), params);
  return data;
};

export const useResetPasswordMutation = () => {
  return useMutation<Response, AxiosError<Error>, Params>({
    mutationFn: resetPasswordRequest,
  });
};
