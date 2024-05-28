import { SortOptions } from '@/constants/pagination';
import SearchSchema from '@/schemas/search.schema';
import { z } from 'zod';
import { IRestaurant, RestaurantKeys } from './restaurant.type';

export type SearchData = z.infer<typeof SearchSchema>;

export interface SearchParams {
  searchTerm?: string;
  page: number;
  perPage: number;
  sortBy: RestaurantKeys;
  sortOption: SortOptions;
}

export interface SearchResponse extends Omit<SearchParams, 'searchTerm'> {
  restaurants: IRestaurant[];
}
