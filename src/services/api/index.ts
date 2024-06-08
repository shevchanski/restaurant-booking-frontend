import { getRestaurantById } from './getRestaurantsById';
import { getUserFavorites } from './getUserFavorites';
import { searchRestaurants } from './searchRestaurants';

const ApiService = {
  searchRestaurants,
  getRestaurantById,
  getUserFavorites,
};

export default ApiService;
