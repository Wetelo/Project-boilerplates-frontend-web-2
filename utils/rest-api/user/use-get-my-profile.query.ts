import { AxiosError } from 'axios';
import { RESTAPIClient } from '../rest-api-client';
import { REST_API_PATHS } from '../rest-api-paths';
import { useQuery } from '@tanstack/react-query';
import { User } from '@/types/entities/user';

type Response = User;

const getMyProfileRequest = async () => {
  const { data } = await RESTAPIClient.get<Response>(REST_API_PATHS.MY_PROFILE());
  return data;
};

export const useGetMyProfileQuery = () => {
  return useQuery<Response, AxiosError<Error>>({
    queryFn: () => getMyProfileRequest(),
    queryKey: [REST_API_PATHS.MY_PROFILE()],
  });
};
