'use client';

import React, { useState } from 'react';
import { FilterCheckbox, FilterCheckboxProps } from './FilterCheckbox';
import { Input } from '../ui';

type Item = FilterCheckboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
  className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Поиск...',
  className,
  onChange,
  defaultValue,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const onChangeSearchInput = (value: string) => {
    setSearchValue(value);
  };

  const list = showAll
    ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()))
    : defaultItems.slice(0, limit);

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            onChange={(e) => onChangeSearchInput(e.target.value)}
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {items.map((item, index) => (
          <FilterCheckbox
            key={index}
            value={item.value}
            text={item.text}
            endAdornment={item.endAdornment}
            checked={false}
            onCheckedChange={(i) => console.log(i)}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
          <button className="text-primary mt-3" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Скрыть' : 'Показать все'}
          </button>
        </div>
      )}
    </div>
  );
};
