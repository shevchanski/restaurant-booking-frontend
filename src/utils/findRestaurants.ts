import { API_URI } from '@/constants/config';
import { SearchParams, SearchResponse } from '@/types/search.type';
import axios, { AxiosError } from 'axios';
import path from 'path';
import generateSearchParams from './generateSearchParams';

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
    if (error instanceof AxiosError) {
      console.error(error.response?.data?.errorMessage);
    } else if (error instanceof Error) {
      console.error(error.message);
    }
    console.error(error);
  }
  return null;
};

export default findRestaurants;
