import { getRestaurantById } from './getRestaurantsById';
import { getTopRatedRestaurants } from './getTopRatedRestaurants';
import { getUserFavorites } from './getUserFavorites';
import getUserRecommendations from './getUserRecommendations';
import { registerRestaurant } from './registerRestaurant';
import { searchRestaurants } from './searchRestaurants';

const ApiService = {
  searchRestaurants,
  getRestaurantById,
  getUserFavorites,
  getUserRecommendations,
  getTopRatedRestaurants,
  registerRestaurant,
};

export default ApiService;
