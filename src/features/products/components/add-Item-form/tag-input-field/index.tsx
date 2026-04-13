import { TagList } from '@/features/products/components/add-Item-form/tag-list';
import { Input } from '@/shared/components/input';
import { useState, type KeyboardEvent } from 'react';

export function TagInputField() {
  const [tags, setTags] = useState<string[]>([]);
  const [isTagError, setIsTagError] = useState(false);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;

    if (e.key === 'Enter') {
      setIsTagError(false);
      e.preventDefault();

      const newTag = e.currentTarget.value.trim();

      if (!newTag || tags.includes(newTag)) {
        setIsTagError(true);
        e.currentTarget.value = '';
        return;
      }

      setTags((prev) => [...prev, newTag]);
      e.currentTarget.value = '';
    }
  };

  return (
    <div>
      <Input
        label="태그"
        placeholder="태그를 입력해주세요"
        errorMessage={isTagError ? '중복된 태그가 있습니다.' : undefined}
        onKeyDown={handleKeyDown}
      />
      <TagList tags={tags} />
    </div>
  );
}
