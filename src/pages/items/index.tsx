import AllProducts from '@/features/products/components/all-products';
import BestProducts from '@/features/products/components/best-products';

export default function ItemsPage() {
  return (
    <>
      <BestProducts />
      <AllProducts />
    </>
  );
}
