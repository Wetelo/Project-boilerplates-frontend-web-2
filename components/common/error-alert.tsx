import { FC, ReactNode } from 'react';
import { Alert, AlertDescription, AlertTitle } from '../ui-kit/alert';
import { cn } from '@/utils/cn';
import { Button } from '../ui-kit/button';
import { CloseIcon } from '../icons/close-icon';

type ErrorAlertProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  title?: ReactNode;
  message: ReactNode;
  reset?: () => void;
};

export const ErrorAlert: FC<ErrorAlertProps> = ({ title, message, className, reset, ...props }) => {
  return (
    <Alert variant="destructive" className={cn('relative text-base', className)} {...props}>
      <div className={cn({ 'pr-10': !!reset })}>
        {title && <AlertTitle>{title}</AlertTitle>}
        <AlertDescription>{message}</AlertDescription>
      </div>
      {reset && (
        <Button variant="ghost" size="sm" className="absolute right-2 top-2" onClick={reset}>
          <CloseIcon className="size-4" />
        </Button>
      )}
    </Alert>
  );
};
