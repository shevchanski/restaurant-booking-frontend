import { z } from 'zod';

const AddressSchema = z.object({
  city: z.string(),
  country: z.string(),
  post_code: z.string(),
  street_address: z.string(),
  region: z.string().optional(),
});

const RestaurantFormSchema = z.object({
  title: z.string({ message: 'Title is required' }),
  description: z.string().optional(),
  website: z.string().optional(),
  rating: z.string().optional(),
  cuisine: z.array(z.string()),
  phoneNumber: z.string(),
  address: AddressSchema,
});

export { RestaurantFormSchema };
