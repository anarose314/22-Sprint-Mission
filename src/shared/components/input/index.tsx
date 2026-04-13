import type { InputProps } from '@/shared/components/input/input.types';
import { cn } from '@/shared/utils/cn';
import { useId } from 'react';

/**
 * 전역에서 사용하는 인풋 컴포넌트입니다.
 */
export function Input({
  label,
  type = 'text',
  id,
  required,
  ref,
  placeholder,
  className,
  labelClassName,
  errorMessage,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = `${inputId}-error`;

  return (
    <div className="flex w-full flex-col gap-4">
      {label && (
        <label
          htmlFor={inputId}
          className={cn(
            'typo-2lg-bold text-secondary-800 block',
            labelClassName
          )}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={inputId}
        name={inputId}
        required={required}
        ref={ref}
        placeholder={placeholder}
        className={cn(
          'bg-secondary-100 typo-lg-regular text-secondary-800 min-h-14 w-full rounded-xl px-6 py-3.5',
          'placeholder:text-secondary-400',
          errorMessage && 'border-error border',
          className
        )}
        aria-invalid={Boolean(errorMessage)}
        aria-describedby={errorMessage ? errorId : undefined}
        {...props}
      />
      {errorMessage && (
        <p id={errorId} className="typo-lg-semibold text-error mt-2">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
