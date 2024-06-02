'use client';

import { DEFAULT_SORT_BY, SortOptions } from '@/constants/pagination';
import { RestaurantKeys } from '@/types/restaurant.type';
import { SearchParams } from '@/types/search.type';
import { OptionConfig } from '@/types/selector.type';
import generateSearchParams from '@/utils/generateSearchParams';
import uniqueHtmlId from '@/utils/uniqueHtmlId';
import clsx from 'clsx';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent } from 'react';
import { sortSelectorConfig } from './config';

interface Props {
  className?: string;
}

export default function SortSelector({ className }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();

  //   getting params from url
  const currentSortBy: RestaurantKeys =
    (searchParams.get('sortBy') as RestaurantKeys) ?? DEFAULT_SORT_BY;
  const currentSortOption =
    searchParams.get('sortOption') === SortOptions.ASC
      ? SortOptions.ASC
      : SortOptions.DESC;
  const searchTerm = searchParams.get('searchTerm') ?? '';
  const currentPerPage = searchParams.get('perPage');

  const searchObject: SearchParams = {
    page: 1,
    searchTerm: searchTerm,
    perPage: Number(currentPerPage),
    sortBy: (currentSortBy ?? 'createdAt') as RestaurantKeys,
    sortOption: currentSortOption,
  };

  const handleChangeSortBy = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectName = e.target.name;
    const selectValue = e.target.value;

    router.replace(
      generateSearchParams({ ...searchObject, [selectName]: selectValue }),
    );
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
            defaultValue={key !== 'sortBy' ? currentSortOption : currentSortBy}
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
