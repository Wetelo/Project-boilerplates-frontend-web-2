import { AxiosError } from 'axios';
import { RESTAPIClient } from '../rest-api-client';
import { REST_API_PATHS } from '../rest-api-paths';
import { LoginResponseDto } from '@/types/dto/auth/login-response.dto';
import { LoginRequestDto } from '@/types/dto/auth/login-request.dto';
import { useMutation } from '@tanstack/react-query';

type Params = LoginRequestDto;
type Response = LoginResponseDto;

export const loginRequest = async (params: Params) => {
  const { data } = await RESTAPIClient.post<Response>(REST_API_PATHS.LOGIN(), params);
  return data;
};

export const useLoginMutation = () => {
  return useMutation<Response, AxiosError<Error>, Params>({
    mutationFn: loginRequest,
  });
};
