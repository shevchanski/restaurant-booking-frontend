import { SortOptions } from '@/constants/pagination';
import { IRestaurant } from './restaurant.type';
import { SearchParams } from './search.type';

export interface OptionConfig {
  name: string;
  value: keyof IRestaurant | SortOptions;
}

export type SortSelectorConfig = {
  [key in keyof SearchParams]?: OptionConfig[];
};
