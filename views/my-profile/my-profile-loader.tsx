import { Skeleton } from '@/components/ui-kit/skeleton';

export const MyProfileLoader = () => {
  return (
    <div className="mx-auto flex max-w-md flex-col gap-8 py-10">
      <Skeleton className="mx-auto h-10 w-40" />
      <Skeleton className="mx-auto size-40 rounded-full" />
      <Skeleton className="h-10" />
      <Skeleton className="h-10" />
      <Skeleton className="h-10" />
      <Skeleton className="h-10" />
      <Skeleton className="h-10" />
      <Skeleton className="h-10" />
      <Skeleton className="h-10" />
    </div>
  );
};
