import Image, { StaticImageData } from 'next/image';

type AltProps = { alt?: string; role: 'presentation' } | { alt: string; role?: string };

type SizeProps =
  | { width: number; height: number; fill?: false }
  | { width?: undefined; height?: undefined; fill: true };

export type PictureProps = Omit<
  React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>,
  'src' | 'width' | 'height'
> & {
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
      className={className}
      src={src}
      height={height}
      width={width}
      alt={alt!}
      loading={loading}
      fill={fill}
      objectFit={objectFit}
      {...props}
    />
  );
};
