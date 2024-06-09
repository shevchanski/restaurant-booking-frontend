'use server';

import { ApiRoutes } from '@/constants/config';
import { SearchParams, SearchResponse } from '@/types/search.type';
import ErrorLogger from '@/utils/ErrorLogger';
import { generateSearchParams } from '@/utils/generateSearchParams';
import path from 'path';
import { api_instance } from './axios_instance';

export async function searchRestaurants(
  searchParams: SearchParams,
): Promise<SearchResponse | null> {
  try {
    const res = await api_instance.get<SearchResponse>(
      path.join(ApiRoutes.RESTAURANTS, generateSearchParams(searchParams)),
    );

    return res.data;
  } catch (error) {
    ErrorLogger(error);
  }
  return null;
}
