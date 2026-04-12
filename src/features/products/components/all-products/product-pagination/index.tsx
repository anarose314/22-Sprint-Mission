import { IcArrowLeft, IcArrowRight } from '@/shared/assets/icons';
import { cn } from '@/shared/utils/cn';

const PAGINATION_BUTTON_CLASS = cn(
  'border-secondary-200 typo-lg-semibold text-secondary-500 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border bg-white',
  'hover:bg-secondary-100'
);

export function ProductPagination() {
  return (
    <ul className="flex items-center justify-center gap-1">
      <li>
        <button className={PAGINATION_BUTTON_CLASS}>
          <IcArrowLeft />
        </button>
      </li>
      <li>
        <button className={PAGINATION_BUTTON_CLASS}>
          <span>1</span>
        </button>
      </li>
      <li>
        <button className={PAGINATION_BUTTON_CLASS}>
          <span>2</span>
        </button>
      </li>
      <li>
        <button className={PAGINATION_BUTTON_CLASS}>
          <span>3</span>
        </button>
      </li>
      <li>
        <button className={PAGINATION_BUTTON_CLASS}>
          <IcArrowRight />
        </button>
      </li>
    </ul>
  );
}
