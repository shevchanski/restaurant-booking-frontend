import { getRestaurantById } from './getRestaurantsById';
import { getTopRatedRestaurants } from './getTopRatedRestaurants';
import { getUserFavorites } from './getUserFavorites';
import getUserRecommendations from './getUserRecommendations';
import { registerRestaurant } from './registerRestaurant';
import { searchRestaurants } from './searchRestaurants';
import { uploadRestPhotos } from './uploadRestPhotos';

const ApiService = {
  searchRestaurants,
  getRestaurantById,
  getUserFavorites,
  getUserRecommendations,
  getTopRatedRestaurants,
  uploadRestPhotos,
  registerRestaurant,
};

export default ApiService;
