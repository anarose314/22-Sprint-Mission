import { getProducts } from '@/features/products/apis/products';
import { ProductItem } from '@/features/products/components/product-item';
import { useQuery } from '@tanstack/react-query';

const PAGE_SIZE = 4;
const ORDER_BY = 'favorite';

export default function BestProducts() {
  const { data, isPending, isError } = useQuery({
    queryKey: ['items', 'best', { pageSize: PAGE_SIZE, orderBy: ORDER_BY }],
    queryFn: () => getProducts({ pageSize: PAGE_SIZE, orderBy: ORDER_BY }),
  });

  const items = data?.list;

  // TODO: 로딩 처리
  if (isPending) return <div>로딩 중</div>;
  // TODO: 에러 처리
  if (isError) return <div>에러 발생</div>;

  return (
    <>
      <h2 className="typo-xl-bold text-secondary-900 mb-4">베스트 상품</h2>
      <ul className="grid grid-cols-4 gap-x-6 gap-y-10">
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
