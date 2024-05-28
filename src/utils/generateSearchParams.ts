import { SearchParams } from '@/types/search.type';

const generateSearchParams = ({
  searchTerm,
  page,
  perPage,
  sortBy,
  sortOption,
}: SearchParams) => {
  return `?${!!searchTerm ? `searchTerm=${searchTerm}` : ''}&page=${page}&perPage=${perPage}&sortBy=${sortBy}&sortOption=${sortOption}`;
};

export default generateSearchParams;
