import { AxiosError } from 'axios';
import { RESTAPIClient } from '../rest-api-client';
import { REST_API_PATHS } from '../rest-api-paths';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UpdateMyProfileRequestDto } from '@/types/dto/user/update-my-profile.dto';

type Params = UpdateMyProfileRequestDto;
type Response = void;

export const updateMyProfileRequest = async (params: Params) => {
  const { data } = await RESTAPIClient.put<Response>(REST_API_PATHS.MY_PROFILE(), params);
  return data;
};

export const useUpdateMyProfileMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<Response, AxiosError<Error>, Params>({
    mutationFn: updateMyProfileRequest,
    onSettled: () => queryClient.invalidateQueries({ queryKey: [REST_API_PATHS.MY_PROFILE()] }),
  });
};
