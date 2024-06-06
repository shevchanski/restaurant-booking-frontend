import { RestaurantFormSchema } from '@/schemas/rest-registation.schema';
import { z } from 'zod';

interface IAddress {
  city: string;
  country: string;
  post_code: string;
  street_address: string;
  region?: string;
}

export interface IRestaurant {
  _id: string;
  title: string;
  description: string;
  website?: string;
  // imageUrl: string;
  rating: number;
  cuisine: string[];
  phoneNumber: string;
  address: IAddress;
  createdAt: string;
}

export type RestaurantFormData = z.infer<typeof RestaurantFormSchema>;

export type RestaurantKeys = keyof IRestaurant;
