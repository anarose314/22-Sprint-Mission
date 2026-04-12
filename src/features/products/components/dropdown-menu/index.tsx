import { IcDropDown } from '@/shared/assets/icons';
import { cn } from '@/shared/utils/cn';
import { useEffect, useRef, useState } from 'react';

const DROPDOWN_STYLE = cn(
  'border-secondary-200 w-full rounded-xl border bg-white'
);

const DROPDWON_BUTTON_STYLE = cn(
  'felx h-10.5 w-full cursor-pointer items-center justify-center',
  'hover:bg-secondary-100'
);

export function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('recent');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setValue(event.currentTarget.value);
    setIsOpen(false);
  };

  return (
    <div className="z-dropdown relative w-32.5" ref={dropdownRef}>
      <button
        type="button"
        className={cn(
          DROPDOWN_STYLE,
          'flex h-10.5 cursor-pointer items-center justify-between px-5 py-3'
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{value === 'recent' ? '최신순' : '좋아요순'}</span>
        <IcDropDown />
      </button>
      {isOpen && (
        <ul className={cn(DROPDOWN_STYLE, 'absolute top-12.5 overflow-hidden')}>
          <li>
            <button
              value="recent"
              className={cn(DROPDWON_BUTTON_STYLE)}
              onClick={handleButtonClick}
            >
              최신순
            </button>
          </li>
          <li>
            <button
              value="favorite"
              className={cn(
                DROPDWON_BUTTON_STYLE,
                'border-t-secondary-200 border-t'
              )}
              onClick={handleButtonClick}
            >
              좋아요순
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
