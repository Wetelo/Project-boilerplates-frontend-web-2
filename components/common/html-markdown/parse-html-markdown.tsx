import { FC } from 'react';
import parse from 'html-react-parser';
import DOMPurify from 'isomorphic-dompurify';

type ParseHtmlMarkdownProps = {
  markdown?: string;
};

export const ParseHtmlMarkdown: FC<ParseHtmlMarkdownProps> = ({ markdown }) => (
  <>{markdown && parse(DOMPurify.sanitize(markdown))}</>
);
