'use server';

import { API_URI } from '@/constants/config';
import { SearchParams, SearchResponse } from '@/types/search.type';
import axios from 'axios';
import path from 'path';
import ErrorLogger from './ErrorLogger';
import { generateSearchParams } from './generateSearchParams';

const findRestaurants = async (
  searchParams: SearchParams,
): Promise<SearchResponse | null> => {
  const apiQueryRoute = path.join(
    API_URI,
    'restaurants',
    generateSearchParams(searchParams),
  );

  try {
    const response = await axios.get(apiQueryRoute);
    return response.data;
  } catch (error) {
    ErrorLogger(error);
  }
  return null;
};

export default findRestaurants;
