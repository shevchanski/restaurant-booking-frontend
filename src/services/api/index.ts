import { addToFavorites } from './addToFavorites';
import { getRestaurantPhotos } from './getRestPhotos';
import { getRestaurantById } from './getRestaurantsById';
import { getTopRatedRestaurants } from './getTopRatedRestaurants';
import { getUserFavorites } from './getUserFavorites';
import getUserRecommendations from './getUserRecommendations';
import { registerRestaurant } from './registerRestaurant';
import { removeFromFavorites } from './removeFromFavorites';
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
  getRestaurantPhotos,
  removeFromFavorites,
  addToFavorites,
};

export default ApiService;
