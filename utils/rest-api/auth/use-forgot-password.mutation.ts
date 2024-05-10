import { AxiosError } from 'axios';
import { RESTAPIClient } from '../rest-api-client';
import { REST_API_PATHS } from '../rest-api-paths';
import { useMutation } from '@tanstack/react-query';
import { ForgotPasswordRequestDto } from '@/types/dto/auth/forgot-password.dto';

type Params = ForgotPasswordRequestDto;
type Response = void;

export const forgotPasswordRequest = async (params: Params) => {
  const { data } = await RESTAPIClient.post<Response>(REST_API_PATHS.FORGOT_PASSWORD(), params);
  return data;
};

export const useForgotPasswordMutation = () => {
  return useMutation<Response, AxiosError<Error>, Params>({
    mutationFn: forgotPasswordRequest,
  });
};
