export const API_URI = process.env.API_URI ?? 'http://localhost:3001';

export enum ApiRoutes {
  RESTAURANTS = 'restaurants',
  USERS = 'users',
  FAVORITES = 'favorites',
  RECOMMENDATIONS = 'restaurants/recommendations',
  TOP_RATED = `restaurants/top_rated`,
  REST_PHOTO_UPLOAD = '/files/restaurants',
}

export const MIN_FAVORITES_FOR_RECOMMENDATIONS = 2;
export const DEFAULT_LIMIT_RECOMMENDATIONS = 4;

export const SUPPORT_EMAIL = 'support@table.bar.com';
export const DEFAULT_TOP_RATED_LIMIT = 4;

export const BYTE_SIZE = 1024;

export const FileUploadConfig = {
  MAX_FILE_SIZE: 15 * BYTE_SIZE * BYTE_SIZE, // 15 MB
  FILE_TYPES: [
    'image/jpeg', // .jpg, .jpeg, .jfif, .pjpeg, .pjp
    'image/png', // .png
  ],
};
