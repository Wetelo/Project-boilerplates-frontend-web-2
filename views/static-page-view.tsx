'use client';

import { HtmlMarkdownContainer, ParseHtmlMarkdown } from '@/components/common/html-markdown';
import { WithGenericQueryHandler } from '@/components/common/with-generic-query-handler';
import { useGetStaticPageQuery } from '@/utils/rest-api/static-pages/use-get-static-page.query';
import { StaticPage } from '@/utils/routes';
import { useParams } from '@/utils/routes/hooks';

export const StaticPageView = () => {
  const { slug } = useParams(StaticPage);

  const staticPageQuery = useGetStaticPageQuery({ slug });

  const { data: staticPageData } = staticPageQuery;

  const title = staticPageData?.title;
  const content = staticPageData?.content;

  return (
    <WithGenericQueryHandler queries={[staticPageQuery]}>
      <div className="container py-10">
        <h1 className="mb-5 text-3xl font-semibold">{title}</h1>
        <HtmlMarkdownContainer>
          <ParseHtmlMarkdown markdown={content} />
        </HtmlMarkdownContainer>
      </div>
    </WithGenericQueryHandler>
  );
};
