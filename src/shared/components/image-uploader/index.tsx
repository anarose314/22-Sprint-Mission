import type { ImageUploaderProps } from '@/shared/components/image-uploader/imageUploader.types';
import { IcAdd, IcClose } from '@/shared/assets/icons';
import { Label } from '@/shared/components/label';
import { cn } from '@/shared/utils/cn';
import { useEffect, useId, useState } from 'react';

export function ImageUploader({
  id,
  label,
  labelClassName,
  className,
  errorMessage,
  onChange,
  ...props
}: ImageUploaderProps) {
  const [image, setImage] = useState<string | null>(null);

  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = `${inputId}-error`;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    if (!file) {
      setImage(null);
      onChange?.(null);
      return;
    }

    const imgURL = URL.createObjectURL(file);
    setImage(imgURL);

    onChange?.(file);
  };

  useEffect(() => {
    return () => {
      if (image) {
        URL.revokeObjectURL(image);
      }
    };
  }, [image]);

  return (
    <div className="flex w-full flex-col gap-4">
      {label && <Label as={'p'} label={label} className={labelClassName} />}
      <div className="grid w-147 grid-cols-2 gap-6">
        <label
          aria-label="이미지 업로드"
          aria-invalid={Boolean(errorMessage)}
          aria-describedby={errorMessage ? errorId : undefined}
          htmlFor={inputId}
          className={cn(
            'bg-secondary-200 flex aspect-square cursor-pointer flex-col items-center justify-center gap-3 rounded-xl select-none',
            className
          )}
        >
          <IcAdd />
          <span className="text-secondary-400 typo-lg-regular">
            이미지 등록
          </span>
        </label>
        <input
          type="file"
          name={inputId}
          id={inputId}
          className="sr-only"
          accept="image/*"
          onChange={handleImageChange}
          {...props}
        />
        {image && (
          <div className="relative">
            <figure className="border-secondary-50 aspect-square overflow-hidden rounded-xl border">
              <img
                src={image}
                className="h-full w-full object-cover object-center"
                alt="업로드 된 이미지 미리보기"
              />
            </figure>
            <IcClose className="absolute top-3 right-3 cursor-pointer" />
          </div>
        )}
      </div>
      {errorMessage && (
        <p id={errorId} className="typo-lg-regular text-error">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
