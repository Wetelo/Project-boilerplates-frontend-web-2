import { AxiosError } from 'axios';
import { RESTAPIClient } from '../rest-api-client';
import { REST_API_PATHS } from '../rest-api-paths';
import { useMutation } from '@tanstack/react-query';
import { UploadFileRequestDto, UploadFileResponseDto } from '@/types/dto/files/upload-file.dto';

type Params = UploadFileRequestDto;
type Response = UploadFileResponseDto;

export const uploadFileRequest = async ({ file }: Params) => {
  const formData = new FormData();
  formData.append('file', file);

  const { data } = await RESTAPIClient.post<Response>(REST_API_PATHS.UPLOAD_FILE(), formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

  return data;
};

export const useUploadFileMutation = () => {
  return useMutation<Response, AxiosError<Error>, Params>({
    mutationFn: uploadFileRequest,
  });
};
