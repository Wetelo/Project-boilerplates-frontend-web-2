import { AxiosError } from 'axios';
import { RESTAPIClient } from '../rest-api-client';
import { REST_API_PATHS } from '../rest-api-paths';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ConfirmChangeMyEmailRequestDto } from '@/types/dto/user/change-my-email.dto';

type Params = ConfirmChangeMyEmailRequestDto;
type Response = void;

export const confirmChangeMyEmailRequest = async (params: Params) => {
  const { data } = await RESTAPIClient.patch<Response>(REST_API_PATHS.CONFIRM_CHANGE_MY_EMAIL(), params);
  return data;
};

export const useConfirmChangeMyEmailMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<Response, AxiosError<Error>, Params>({
    mutationFn: confirmChangeMyEmailRequest,
    onSettled: () => queryClient.invalidateQueries({ queryKey: [REST_API_PATHS.MY_PROFILE()] }),
  });
};
