'use server';

import { StaticPageView } from '@/views/static-page-view';
import { Route } from './page.info';
import { getStaticPageRequest } from '@/utils/rest-api/static-pages/use-get-static-page.query';
import { REST_API_PATHS } from '@/utils/rest-api/rest-api-paths';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { type StaticPage } from '@/types/entities/static-page';
import { statusCodes } from '@/utils/rest-api/status-codes';
import { notFound } from 'next/navigation';

type Params = Promise<Zod.infer<typeof Route.params>>;

type Props = { params: Params };

export async function generateMetadata({ params }: Props) {
  try {
    const waitedParams = await params;
    const staticPage = await getStaticPageRequest(waitedParams);
    return {
      title: staticPage.title,
    };
  } catch (e) {
    console.log(e);
  }
}

export default async function StaticPage({ params }: Props) {
  const waitedParams = await params;

  const queryClient = new QueryClient();

  const queryKey = [REST_API_PATHS.STATIC_PAGES(), waitedParams];

  await queryClient.prefetchQuery({
    queryKey,
    queryFn: () => getStaticPageRequest(waitedParams),
  });

  const staticPageQueryState = queryClient.getQueryState<StaticPage, AxiosError<Error>>(queryKey);

  if (staticPageQueryState?.error?.response?.status === statusCodes.NOT_FOUND) {
    notFound();
  }

  const state = dehydrate(queryClient);

  return (
    <HydrationBoundary state={state}>
      <StaticPageView />
    </HydrationBoundary>
  );
}
