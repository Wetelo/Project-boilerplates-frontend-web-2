import { Skeleton } from '@/components/ui-kit/skeleton';

export const MyProfileLoader = () => {
  return (
    <div className="mx-auto flex max-w-md flex-col gap-5 py-10">
      <Skeleton className="h-10" />
      <Skeleton className="h-10" />
      <Skeleton className="h-10" />
      <Skeleton className="h-10" />
    </div>
  );
};
