import { SortOptions } from '@/constants/pagination';
import { SortSelectorConfig } from '@/types/selector.type';

export const sortSelectorConfig: SortSelectorConfig = {
  sortBy: [
    { name: 'Registration Date', value: 'createdAt' },
    { name: 'Title', value: 'title' },
    { name: 'Rating', value: 'rating' },
  ],
  sortOption: [
    { name: 'ASC', value: SortOptions.ASC },
    { name: 'DESC', value: SortOptions.DESC },
  ],
};
