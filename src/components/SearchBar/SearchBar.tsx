'use client';

import { useRestSearchParams } from '@/hooks/useRestSearchParams';
import SearchSchema from '@/schemas/search.schema';
import { SearchData } from '@/types/search.type';
import { generateSearchParams } from '@/utils/generateSearchParams';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { getButtonClassName } from '../../utils/getBtnClassName';

interface SearchBarProps {
  className?: string;
  searchedValue?: string;
}

export default function SearchBar({ className = '' }: SearchBarProps) {
  const searchParams = useRestSearchParams();
  const router = useRouter();

  const { register, handleSubmit } = useForm<SearchData>({
    defaultValues: {
      search_param: searchParams.searchTerm,
    },
    resolver: zodResolver(SearchSchema),
  });

  const handleSearch = (data: SearchData) => {
    const params = generateSearchParams({
      ...searchParams,
      page: 1,
      searchTerm: data.search_param,
    });

    router.replace(`/search${params}`);
  };

  return (
    <div
      className={`${className} h-[60px] w-full rounded-[80px] bg-white px-[8px] md:h-[86px] md:w-7/12 md:px-[30px]`}
    >
      <form
        onSubmit={handleSubmit(handleSearch)}
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
            className="h-full w-full border-0 pl-[50px] text-black placeholder:text-[14px] focus:underline focus:ring-0 md:placeholder:text-[16px]"
            type="search"
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
