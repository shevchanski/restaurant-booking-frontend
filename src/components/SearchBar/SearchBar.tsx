'use client';

import { searchRestaurants } from '@/actions/searchRestaurants';
import SearchSchema from '@/schemas/search.schema';
import { SearchData } from '@/types/search.type';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useFormState } from 'react-dom';
import { useForm } from 'react-hook-form';
import { getButtonClassName } from '../helpers/getBtnClassName';

interface SearchBarProps {
  className?: string;
  searchedValue?: string;
}

export default function SearchBar({
  className = '',
  searchedValue = '',
}: SearchBarProps) {
  const { register, handleSubmit } = useForm<SearchData>({
    values: {
      search_param: searchedValue,
    },
    resolver: zodResolver(SearchSchema),
  });

  const [errorMessage, dispatch] = useFormState(searchRestaurants, undefined);

  const findRestaurants = (data: SearchData) => {
    dispatch(data);
  };

  return (
    <div
      className={`${className} h-[86px] w-7/12 rounded-[80px] bg-white px-[30px]`}
    >
      <form
        onSubmit={handleSubmit(findRestaurants)}
        className="flex h-full items-center justify-between gap-2"
      >
        <label className="relative flex-grow">
          <span className="sr-only">Search</span>
          <Image
            src="/img/svg/search.svg"
            alt="Icon Searching magnifying glass"
            width={25}
            height={25}
            className="absolute left-[10px] top-[50%]  translate-y-[-50%]"
          />
          <input
            className="h-[80px] w-full border-0 pl-[50px] text-black placeholder:text-[16px] focus:underline focus:ring-0"
            type="text"
            {...register('search_param')}
            placeholder="Search by Location, Restaurant or Cuisine..."
          />
        </label>

        <button className={getButtonClassName()} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
