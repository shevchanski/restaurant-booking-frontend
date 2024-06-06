import { IRestaurant } from '@/types/restaurant.type';

function getRestaurantsIds(restArray: IRestaurant[]) {
  return restArray.length ? restArray.map((rest) => rest._id) : [];
}

export default getRestaurantsIds;
