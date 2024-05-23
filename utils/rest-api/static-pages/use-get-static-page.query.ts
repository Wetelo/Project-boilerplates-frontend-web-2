import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { StaticPage } from '@/types/entities/static-page';
import { RESTAPIClient } from '../rest-api-client';
import { REST_API_PATHS } from '../rest-api-paths';

type Params = {
  slug: string;
};
type Response = StaticPage;

export const getStaticPageRequest = async ({ slug }: Params) => {
  const { data } = await RESTAPIClient.get<Response>(REST_API_PATHS.STATIC_PAGE_BY_SLUG({ slug }));
  return data;
};

export const useGetStaticPageQuery = (params: Params) => {
  return useQuery<Response, AxiosError<Error>>({
    queryFn: () => getStaticPageRequest(params),
    queryKey: [REST_API_PATHS.STATIC_PAGES(), params],
    refetchOnMount: false,
  });
};
