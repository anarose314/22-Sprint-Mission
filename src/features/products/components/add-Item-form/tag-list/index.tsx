import type { TagListProps } from '@/features/products/components/add-Item-form/tag-list/tagList.types';
import { IcClose } from '@/shared/assets/icons';

export function TagList({ tags }: TagListProps) {
  return (
    <ul className="mt-3.5 flex gap-3">
      {tags.map((tag) => (
        <li
          className="bg-secondary-100 typo-lg-regular text-secondary-800 inline-flex h-9 items-center justify-center gap-2 rounded-full px-4 select-none"
          key={tag}
        >
          #{tag} <IcClose className="cursor-pointer" />
        </li>
      ))}
    </ul>
  );
}
