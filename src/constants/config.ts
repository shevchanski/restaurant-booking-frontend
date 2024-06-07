export const API_URI = process.env.API_URI ?? 'http://localhost:3001';

export enum ApiRoutes {
  RESTAURANTS = 'restaurants',
  USERS = 'users',
  FAVORITES = 'favorites',
}
