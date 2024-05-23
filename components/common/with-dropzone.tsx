'use client';

import { UploadFileResponseDto } from '@/types/dto/files/upload-file.dto';
import { cn } from '@/utils/cn';
import { useUploadFileMutation } from '@/utils/rest-api/files/use-upload-file.mutation';
import { onUnexpectedAPIError } from '@/utils/rest-api/on-unexpected-api-error';
import { FC } from 'react';
import { FileRejection, useDropzone } from 'react-dropzone';

type ChildrenProps = {
  isPending: boolean;
  isDragActive: boolean;
  className: string;
};

type WithDropzoneProps = {
  onSuccessUpload: (data: UploadFileResponseDto) => void;
  onError?: (fileRejections: FileRejection[]) => void;
  name: string;
  children: FC<ChildrenProps>;
};

export const WithDropzone = ({ name, onSuccessUpload, onError, children }: WithDropzoneProps) => {
  const { mutate: uploadFile, isPending } = useUploadFileMutation();

  const onDrop = async (acceptedFiles: File[], fileRejections: FileRejection[]) => {
    if (fileRejections?.length) return onError?.(fileRejections);
    uploadFile(
      {
        file: acceptedFiles[0],
      },
      {
        onError: onUnexpectedAPIError,
        onSuccess: onSuccessUpload,
      },
    );
  };

  const disabled = isPending;

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    // TODO customize via props
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png'],
    },
    multiple: false,
    onDrop,
    maxSize: 1024 * 1024 * 2, // 2MB
    disabled,
  });

  return (
    <div {...getRootProps()}>
      <input
        {...getInputProps({
          name,
        })}
      />
      {children({
        isPending,
        isDragActive,
        className: cn('border-2 border-dashed', {
          'border-green-200': isDragActive,
          'cursor-pointer': !disabled,
          'animate-pulse cursor-wait': isPending,
        }),
      })}
    </div>
  );
};
