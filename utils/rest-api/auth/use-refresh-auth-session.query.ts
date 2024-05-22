import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { RESTAPIClient } from '../rest-api-client';
import { REST_API_PATHS } from '../rest-api-paths';
import { AxiosError } from 'axios';
import { RefreshSessionResponseDto } from '@/types/dto/auth/refresh-session.dto';

type Response = RefreshSessionResponseDto;

export const refreshAuthSessionRequest = async () => {
  const { data } = await RESTAPIClient.post<Response>(REST_API_PATHS.REFRESH_AUTH_SESSION());

  return data;
};

export const useRefreshAuthSessionQuery = (
  options?: Omit<UseQueryOptions<Response, AxiosError<Error>>, 'queryKey' | 'queryFn'>,
) => {
  return useQuery<Response, AxiosError<Error>>({
    queryFn: refreshAuthSessionRequest,
    queryKey: [REST_API_PATHS.REFRESH_AUTH_SESSION()],
    refetchInterval: 60 * 60 * 1000, // 1 hour
    retry: false,
    refetchOnMount: false,
    retryOnMount: false,
    ...options,
  });
};
