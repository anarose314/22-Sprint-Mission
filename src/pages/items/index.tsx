import AllProducts from '@/features/products/components/all-products';
import BestProducts from '@/features/products/components/best-products';

export default function ItemsPage() {
  return (
    <>
      <h2 className="typo-xl-bold text-secondary-900 mb-4">베스트 상품</h2>
      <BestProducts />
      <div className="mt-10 mb-6">
        <h2 className="typo-xl-bold text-secondary-900">전체 상품</h2>
      </div>
      <AllProducts />
    </>
  );
}
