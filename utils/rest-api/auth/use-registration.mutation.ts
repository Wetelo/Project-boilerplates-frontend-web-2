import { AxiosError } from 'axios';
import { RESTAPIClient } from '../rest-api-client';
import { REST_API_PATHS } from '../rest-api-paths';
import { useMutation } from '@tanstack/react-query';
import { RegistrationRequestDto } from '@/types/dto/auth/registration-request.dto';
import { RegistrationResponseDto } from '@/types/dto/auth/registration-response.dto';

type Params = RegistrationRequestDto;
type Response = RegistrationResponseDto;

export const registrationRequest = async (params: Params) => {
  const { data } = await RESTAPIClient.post<Response>(REST_API_PATHS.REGISTRATION(), params);
  return data;
};

export const useRegistrationMutation = () => {
  return useMutation<Response, AxiosError<Error>, Params>({
    mutationFn: registrationRequest,
  });
};
