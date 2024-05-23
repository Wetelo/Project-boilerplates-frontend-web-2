import { cn } from '@/utils/cn';

type HtmlMarkdownContainerProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const HtmlMarkdownContainer = ({ className, ...props }: HtmlMarkdownContainerProps) => {
  return <div className={cn('prose max-w-none', className)} {...props} />;
};
