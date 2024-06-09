import { getRestaurantById } from './getRestaurantsById';
import { getUserFavorites } from './getUserFavorites';
import getUserRecommendations from './getUserRecommendations';
import { searchRestaurants } from './searchRestaurants';

const ApiService = {
  searchRestaurants,
  getRestaurantById,
  getUserFavorites,
  getUserRecommendations,
};

export default ApiService;
