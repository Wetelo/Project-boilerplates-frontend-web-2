import { cn } from '@/utils/cn';
import Image, { ImageProps, StaticImageData } from 'next/image';

type AltProps = { alt?: string; role: 'presentation' } | { alt: string; role?: string };

type SizeProps =
  | { width: number; height: number; fill?: false }
  | { width?: undefined; height?: undefined; fill: true };

export type PictureProps = Omit<ImageProps, 'src' | 'width' | 'height' | 'alt'> & {
  src: string | StaticImageData;
  objectFit?: 'cover' | 'contain';
} & AltProps &
  SizeProps;

export const Picture = ({
  height,
  width,
  className,
  src,
  loading,
  alt,
  fill,
  objectFit = 'cover',
  ...props
}: PictureProps) => {
  return (
    <Image
      className={cn(
        {
          'object-cover': objectFit === 'cover',
          'object-contain': objectFit === 'contain',
        },
        className,
      )}
      src={src}
      height={height}
      width={width}
      alt={alt!}
      loading={loading}
      fill={fill}
      {...props}
    />
  );
};
