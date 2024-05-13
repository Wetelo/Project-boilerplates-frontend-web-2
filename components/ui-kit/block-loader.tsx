import { Spinner } from './spinner';
import { AspectRatio } from './aspect-ratio';
import { ReactNode } from 'react';

type BlockLoaderProps = {
  ratio?: number;
  Loader?: ReactNode;
};

export const BlockLoader = ({ ratio = 1, Loader = <Spinner /> }: BlockLoaderProps) => {
  return (
    <AspectRatio ratio={ratio}>
      <div className="flex size-full items-center justify-center">{Loader}</div>
    </AspectRatio>
  );
};
