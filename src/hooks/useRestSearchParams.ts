import {
  DEFAULT_PAGE,
  DEFAULT_PER_PAGE,
  DEFAULT_SORT_BY,
  SortOptions,
} from '@/constants/pagination';
import { SearchParams } from '@/types/search.type';
import { useSearchParams } from 'next/navigation';

export const useRestSearchParams = (): SearchParams => {
  const searchParams = useSearchParams();

  const currentPage = searchParams.get('page');
  const currentPerPage = searchParams.get('perPage');
  const currentSortBy = searchParams.get('sortBy');
  const currentSortOption = searchParams.get('sortOption');
  const searchTerm = searchParams.get('searchTerm') ?? '';

  const sortBy = currentSortBy ?? DEFAULT_SORT_BY;
  const sortOption =
    currentSortOption === SortOptions.ASC ? SortOptions.ASC : SortOptions.DESC;

  const perPage = currentPerPage ? Number(currentPerPage) : DEFAULT_PER_PAGE;

  const page = currentPage ? Number(currentPage) : DEFAULT_PAGE;

  return {
    page,
    perPage,
    sortOption,
    sortBy,
    searchTerm,
  };
};
