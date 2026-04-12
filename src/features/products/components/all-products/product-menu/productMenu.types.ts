import type { ProductSortOption } from '@/features/products/types/product.types';

export interface ProductMenuProps {
  value: ProductSortOption;
  setValue: (value: ProductSortOption) => void;
}
