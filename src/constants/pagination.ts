import { RestaurantKeys } from '@/types/restaurant.type';

enum SortOptions {
  ASC = 'ASC',
  DESC = 'DESC',
}

const DEFAULT_PAGE = 1;
const DEFAULT_PER_PAGE = 20;
const DEFAULT_SORT_BY: RestaurantKeys = 'createdAt';
const DEFAULT_SORT_OPTION: SortOptions = SortOptions.ASC;

export {
  DEFAULT_PAGE,
  DEFAULT_PER_PAGE,
  DEFAULT_SORT_BY,
  DEFAULT_SORT_OPTION,
  SortOptions,
};
