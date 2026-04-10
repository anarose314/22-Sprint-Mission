import { getProducts } from '@/features/products/apis/products';
import { ProductItem } from '@/features/products/components/product-item';
import { useQuery } from '@tanstack/react-query';

export default function AllProducts() {
  const { data, isPending, isError } = useQuery({
    queryKey: ['items'],
    queryFn: () => getProducts(),
  });
  const items = data?.list;

  // TODO: 로딩 처리
  if (isPending) return <div>로딩 중</div>;
  // TODO: 에러 처리
  if (isError) return <div>에러 발생</div>;

  return (
    <ul className="grid grid-cols-5 gap-x-6 gap-y-10">
      {items &&
        items.map((item) => (
          <li key={item.id}>
            <ProductItem item={item} />
          </li>
        ))}
    </ul>
  );
}
