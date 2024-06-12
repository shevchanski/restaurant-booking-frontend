import { BYTE_SIZE, FileUploadConfig } from '@/constants/config';
import { z } from 'zod';

const AddressSchema = z.object({
  city: z.string(),
  country: z.string(),
  post_code: z.string(),
  street_address: z.string(),
  region: z.string().optional(),
});

const RestaurantFormSchema = z.object({
  title: z.string({ required_error: 'Title is required' }),
  description: z.string().optional(),
  website: z.string().optional(),
  //   cuisine: z.array(z.string()),
  cuisine: z.string(), // FIXME temporary change it to string, for test
  phoneNumber: z.string(),
  address: AddressSchema,
  photos: z
    .any()
    .optional()
    .refine(
      (files: FileList) =>
        !files ||
        Object.values(files).every((file) =>
          FileUploadConfig.FILE_TYPES.includes(file.type),
        ),

      { message: 'File type is not supported!' },
    )
    .refine(
      (files: FileList) =>
        !files ||
        Object.values(files).every(
          (file) => file.size < FileUploadConfig.MAX_FILE_SIZE,
        ),
      {
        message: `One of files is bigger than ${FileUploadConfig.MAX_FILE_SIZE / BYTE_SIZE / BYTE_SIZE}MB!`,
      },
    )
    .transform((files: FileList) => (files ? Object.values(files) : undefined)),
});

export { RestaurantFormSchema };
