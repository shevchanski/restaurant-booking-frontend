export const API_URI = process.env.API_URI ?? 'http://localhost:3001';

export enum ApiRoutes {
  RESTAURANTS = 'restaurants',
  USERS = 'users',
  FAVORITES = 'favorites',
  RECOMMENDATIONS = 'restaurants/recommendations',
}

export const MIN_FAVORITES_FOR_RECOMMENDATIONS = 2;
export const DEFAULT_LIMIT_RECOMMENDATIONS = 4;

export const SUPPORT_EMAIL = 'support@table.bar.com';
