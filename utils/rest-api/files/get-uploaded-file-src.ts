import { settings } from '@/utils/settings';
import { REST_API_PATHS } from '../rest-api-paths';

export const getUploadedFileSrc = (fileId: string) =>
  new URL(REST_API_PATHS.GET_FILE({ fileId: fileId }), settings.env.NEXT_PUBLIC_API_URL).toString();
