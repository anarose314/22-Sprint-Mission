import AllProducts from '@/features/products/components/all-products';
import BestProducts from '@/features/products/components/best-products';
import { IcSearch } from '@/shared/assets/icons';
import { Button } from '@/shared/components/button';
import { DropdownMenu } from '@/features/products/components/dropdown-menu';
import { cn } from '@/shared/utils/cn';

export default function ItemsPage() {
  return (
    <>
      <h2 className="typo-xl-bold text-secondary-900 mb-4">베스트 상품</h2>
      <BestProducts />
      <div className="mt-10 mb-6 flex justify-between">
        <h2 className="typo-xl-bold text-secondary-900">전체 상품</h2>
        <div className="flex items-center gap-3">
          <form className="relative">
            <input
              type="text"
              className={cn(
                'bg-secondary-100 typo-lg-regular text-secondary-800 h-10.5 w-81.25 rounded-xl py-2.25 pr-4 pl-11',
                'placeholder:text-secondary-400 placeholder:typo-lg-regular'
              )}
              placeholder="검색할 상품을 입력해주세요"
            />
            <IcSearch className="text-secondary-400 absolute top-1/2 left-4 -translate-y-1/2" />
          </form>
          <Button size="small40" className="h-10.5">
            상품 등록하기
          </Button>
          <DropdownMenu />
        </div>
      </div>
      <AllProducts />
    </>
  );
}
