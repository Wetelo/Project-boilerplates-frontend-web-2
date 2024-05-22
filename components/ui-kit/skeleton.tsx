import { cn } from '@/utils/cn';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('size-full animate-pulse rounded-md bg-gray-500/10', className)} {...props} />;
}

export { Skeleton };
