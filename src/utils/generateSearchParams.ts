import {
  DEFAULT_PAGE,
  DEFAULT_PER_PAGE,
  DEFAULT_SORT_BY,
  DEFAULT_SORT_OPTION,
} from '@/constants/pagination';
import { SearchParams } from '@/types/search.type';

const generateSearchParams = ({
  searchTerm = undefined,
  page = DEFAULT_PAGE,
  perPage = DEFAULT_PER_PAGE,
  sortBy = DEFAULT_SORT_BY,
  sortOption = DEFAULT_SORT_OPTION,
}: SearchParams) => {
  return `?${!!searchTerm ? `searchTerm=${searchTerm}` : ''}&page=${page}&perPage=${perPage}&sortBy=${sortBy}&sortOption=${sortOption}`;
};

export { generateSearchParams };
