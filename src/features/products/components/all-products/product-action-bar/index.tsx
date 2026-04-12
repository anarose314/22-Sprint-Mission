import type { ProductActionBarProps } from '@/features/products/components/all-products/product-action-bar/productActionBar.types';
import { ProductMenu } from '@/features/products/components/all-products/product-menu';
import { IcSearch } from '@/shared/assets/icons';
import { Button } from '@/shared/components/button';
import { cn } from '@/shared/utils/cn';
import { Link } from 'react-router';

export function ProductActionBar({
  value,
  onOrderByChange,
}: ProductActionBarProps) {
  return (
    <div className="flex items-center gap-3">
      <search>
        <form className="relative">
          <input
            type="text"
            aria-label="상품 검색"
            className={cn(
              'bg-secondary-100 typo-lg-regular text-secondary-800 h-10.5 w-81.25 rounded-xl py-2.25 pr-4 pl-11',
              'placeholder:text-secondary-400 placeholder:typo-lg-regular'
            )}
            placeholder="검색할 상품을 입력해주세요"
          />
          <IcSearch className="text-secondary-400 absolute top-1/2 left-4 -translate-y-1/2" />
        </form>
      </search>
      <Button as={Link} to="/additem" size="small40" className="h-10.5">
        상품 등록하기
      </Button>
      <ProductMenu value={value} onOrderByChange={onOrderByChange} />
    </div>
  );
}
