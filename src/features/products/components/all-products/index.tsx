import { getProducts } from '@/features/products/apis/products';
import { ProductActionBar } from '@/features/products/components/product-action-bar';
import { ProductItem } from '@/features/products/components/product-item';
import { useQuery } from '@tanstack/react-query';

export default function AllProducts() {
  const { data, isPending, isError } = useQuery({
    queryKey: ['items', 'recent'],
    queryFn: () => getProducts({ orderBy: 'recent' }),
  });
  const items = data?.list;

  // TODO: 로딩 처리
  if (isPending) return <div>로딩 중</div>;
  // TODO: 에러 처리
  if (isError) return <div>에러 발생</div>;

  return (
    <>
      <div className="mt-10 mb-6 flex justify-between">
        <h2 className="typo-xl-bold text-secondary-900">전체 상품</h2>
        <ProductActionBar />
      </div>
      <ul className="grid grid-cols-5 gap-x-6 gap-y-10">
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <ProductItem item={item} />
            </li>
          ))}
      </ul>
    </>
  );
}
