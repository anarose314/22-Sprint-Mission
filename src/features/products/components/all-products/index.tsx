import { getProducts } from '@/features/products/apis/products';
import { ProductActionBar } from '@/features/products/components/all-products/product-action-bar';
import { ProductPagination } from '@/features/products/components/all-products/product-pagination';
import { ProductItem } from '@/features/products/components/product-item';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const PAGE_SIZE = 10;

export default function AllProducts() {
  const [orderBy, setOrderBy] = useState<'recent' | 'favorite'>('recent');
  const [page, setPage] = useState(1);

  const { data, isPending, isError, isPlaceholderData } = useQuery({
    queryKey: ['items', orderBy, page],
    queryFn: () => getProducts({ orderBy, page, pageSize: PAGE_SIZE }),
    placeholderData: keepPreviousData,
  });
  const items = data?.list;
  const totalCount = data?.totalCount || 0;
  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  // TODO: 로딩 처리
  if (isPending) return <div>로딩 중</div>;
  // TODO: 에러 처리
  if (isError) return <div>에러 발생</div>;

  return (
    <section>
      <div className="mb-6 flex justify-between">
        <h2 className="typo-xl-bold text-secondary-900">전체 상품</h2>
        <ProductActionBar value={orderBy} setValue={setOrderBy} />
      </div>
      <ul className="grid grid-cols-5 gap-x-6 gap-y-10">
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <ProductItem item={item} />
            </li>
          ))}
      </ul>
      {totalCount > 0 && (
        <div className="mt-10.75">
          <ProductPagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
            isPlaceholderData={isPlaceholderData}
          />
        </div>
      )}
    </section>
  );
}
