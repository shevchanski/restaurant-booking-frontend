import { getRestaurantById } from './getRestaurantsById';
import { getTopRatedRestaurants } from './getTopRatedRestaurants';
import { getUserFavorites } from './getUserFavorites';
import getUserRecommendations from './getUserRecommendations';
import { searchRestaurants } from './searchRestaurants';

const ApiService = {
  searchRestaurants,
  getRestaurantById,
  getUserFavorites,
  getUserRecommendations,
  getTopRatedRestaurants,
};

export default ApiService;
