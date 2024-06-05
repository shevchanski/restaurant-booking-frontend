'use client';

import { useRestSearchParams } from '@/hooks/useRestSearchParams';
import { OptionConfig } from '@/types/selector.type';
import { generateSearchParams } from '@/utils/generateSearchParams';
import uniqueHtmlId from '@/utils/uniqueHtmlId';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { ChangeEvent } from 'react';
import { sortSelectorConfig } from './config';

interface Props {
  className?: string;
}

export default function SortSelector({ className }: Props) {
  const searchParams = useRestSearchParams();
  const router = useRouter();

  const handleChangeSortBy = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectName = e.target.name;
    const selectValue = e.target.value;

    const params = generateSearchParams({
      ...searchParams,
      [selectName]: selectValue,
    });

    router.replace(`/search${params}`);
  };

  return (
    <form className={clsx('flex w-fit gap-2', className)}>
      {...Object.entries(sortSelectorConfig).map(
        ([key, value]: [string, OptionConfig[]], i) => (
          <select
            name={key}
            className="rounded-md border border-gray-300 bg-white px-4 py-2 pr-8 text-sm text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-0 focus:ring-indigo-500"
            onChange={handleChangeSortBy}
            key={uniqueHtmlId(`selector-${i}-`)}
            defaultValue={
              key !== 'sortBy' ? searchParams.sortOption : searchParams.sortBy
            }
          >
            {...value.map(({ name, value }, i) => (
              <option key={uniqueHtmlId(`sortOption-${i}`)} value={value}>
                {name}
              </option>
            ))}
          </select>
        ),
      )}
    </form>
  );
}
