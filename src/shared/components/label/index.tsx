import type { LabelProps } from '@/shared/components/label/label.types';
import { cn } from '@/shared/utils/cn';

export function Label({ inputId, className, label }: LabelProps) {
  return (
    <label
      htmlFor={inputId}
      className={cn('typo-2lg-bold text-secondary-800 block', className)}
    >
      {label}
    </label>
  );
}
