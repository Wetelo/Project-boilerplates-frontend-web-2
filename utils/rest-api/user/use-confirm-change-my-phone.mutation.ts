import { AxiosError } from 'axios';
import { RESTAPIClient } from '../rest-api-client';
import { REST_API_PATHS } from '../rest-api-paths';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ConfirmChangeMyPhoneRequestDto } from '@/types/dto/user/change-my-phone.dto';

type Params = ConfirmChangeMyPhoneRequestDto;
type Response = void;

export const confirmChangeMyPhoneRequest = async (params: Params) => {
  const { data } = await RESTAPIClient.patch<Response>(REST_API_PATHS.CONFIRM_CHANGE_MY_PHONE(), params);
  return data;
};

export const useConfirmChangeMyPhoneMutation = () => {
  const queryClient = useQueryClient();

  return useMutation<Response, AxiosError<Error>, Params>({
    mutationFn: confirmChangeMyPhoneRequest,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [REST_API_PATHS.MY_PROFILE()] });
    },
  });
};
