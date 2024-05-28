'use server';

import {
  DEFAULT_PAGE,
  DEFAULT_PER_PAGE,
  DEFAULT_SORT_BY,
  DEFAULT_SORT_OPTION,
} from '@/constants/pagination';
import SearchSchema from '@/schemas/search.schema';
import { SearchData } from '@/types/search.type';
import generateSearchParams from '@/utils/generateSearchParams';
import { redirect } from 'next/navigation';

export const searchRestaurants = async (
  prevState: string | undefined,
  searchRequest: SearchData,
) => {
  let redirectTo = '/search';
  try {
    const { success, data: searchData } = SearchSchema.safeParse(searchRequest);

    if (success) {
      redirectTo += generateSearchParams({
        searchTerm: searchData.search_param,
        page: DEFAULT_PAGE,
        perPage: DEFAULT_PER_PAGE,
        sortBy: DEFAULT_SORT_BY,
        sortOption: DEFAULT_SORT_OPTION,
      });
    }
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    }
    throw error;
  }

  redirect(redirectTo);
};
