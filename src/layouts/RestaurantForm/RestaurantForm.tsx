'use client';

import { BYTE_SIZE, FileUploadConfig } from '@/constants/config';
import { RestaurantFormSchema } from '@/schemas/rest-registation.schema';
import ApiService from '@/services/api';
import { ActionResponse } from '@/types/global.type';
import { RestaurantFormData } from '@/types/restaurant.type';
import {
  CheckBadgeIcon,
  ExclamationCircleIcon,
  LinkIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input/Input';
import Textarea from '../../components/Textarea/Textarea';
import { getButtonClassName } from '../../utils/getBtnClassName';

export default function RestaurantForm() {
  const { register, handleSubmit, formState, setValue } =
    useForm<RestaurantFormData>({
      mode: 'onChange',
      defaultValues: {
        title: '',
        description: '',
        website: undefined,
        cuisine: '',
        phoneNumber: '',
        address: {
          city: '',
          country: '',
          post_code: '',
          street_address: '',
          region: '',
        },
      },
      resolver: zodResolver(RestaurantFormSchema),
    });
  const { errors } = formState;
  const [submitResponse, setSubmitResponse] = useState<
    ActionResponse | undefined
  >(undefined);

  const onSubmit = async (data: RestaurantFormData) => {
    const response: ActionResponse = {
      success: false,
      message: 'Registration is not successful! Try on more time.',
    };

    const { photos, ...restData } = data;

    const regRes = await ApiService.registerRestaurant(restData);

    if (regRes) {
      setSubmitResponse({ success: true, message: 'Successfully registered' });
    }

    if (photos?.length && regRes) {
      const promiseArray = photos.map((photo) => {
        const formData = new FormData();
        formData.append('restaurant_photo', photo);
        return ApiService.uploadRestPhotos(formData, regRes._id);
      });

      await Promise.all(promiseArray);

      setSubmitResponse({
        success: true,
        message: 'Photos successfully uploaded',
      });
    }
  };

  return (
    <form
      className="mx-auto max-w-[700px] rounded-lg bg-white p-6 shadow-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="mb-4 text-center text-3xl font-bold">
        Register <span className="text-red-500">Your</span> Restaurant
      </h2>

      <div className="mb-5 grid grid-cols-4 gap-x-2 gap-y-[2px]">
        {/* Title */}
        <Input
          labelText="Title"
          type="text"
          {...register('title')}
          required
          className="col-span-full"
          placeholder="Enter a name of your restaurant"
          validErrors={errors}
        />

        {/* Description */}
        <Textarea
          labelText="Description about your place"
          type="text"
          {...register('description')}
          className="col-span-4"
          textareaStyle=" min-h-[80px]"
          placeholder="Consequat sunt ipsum culpa eiusmod reprehenderit esse laboris sit duis nisi cupidatat."
          validErrors={errors}
        />

        {/* Website */}
        <Input
          labelText="Website"
          type="text"
          {...register('website')}
          className="col-span-4"
          inputIcon={<LinkIcon />}
          placeholder="https://your.website.com/"
          validErrors={errors}
        />

        {/* Cuisine */}
        <Input
          labelText="Cuisine (comma separated)"
          {...register('cuisine')}
          className="col-span-full md:col-span-2"
          required
          placeholder="Select cuisine(s)"
          validErrors={errors}
        />

        {/* Phone Number */}
        <Input
          labelText="Phone Number"
          {...register('phoneNumber')}
          type="tel"
          className="col-span-full md:col-span-2"
          required
          mask="phone"
          inputIcon={<PhoneIcon />}
          validErrors={errors}
          placeholder="+380 (89) 999-99-99"
        />

        {/* Address Section */}
        <h3 className="col-span-full mb-2 text-xl font-semibold">Address</h3>
        <Input
          labelText="City"
          {...register('address.city')}
          type="text"
          required
          placeholder="Kyiv"
          className="col-span-2"
          validErrors={errors}
        />
        <Input
          labelText="Country"
          {...register('address.country')}
          type="text"
          required
          placeholder="Ukraine"
          className="col-span-2"
          validErrors={errors}
        />
        <Input
          labelText="Street Address"
          {...register('address.street_address')}
          required
          className="col-span-full"
          validErrors={errors}
        />
        <Input
          labelText="Post Code"
          {...register('address.post_code')}
          type="text"
          required
          className="col-span-2"
          validErrors={errors}
        />
        <Input
          labelText="Region"
          {...register('address.region')}
          type="text"
          className="col-span-2"
          validErrors={errors}
        />

        {/* Input to upload photos */}
        <Input
          labelText={`Restaurant's photos (max: ${
            FileUploadConfig.MAX_FILE_SIZE / BYTE_SIZE / BYTE_SIZE
          }MB per file)`}
          type="file"
          className="col-span-full"
          multiple
          {...register('photos')}
          accept={FileUploadConfig.FILE_TYPES.join(',')}
          size={FileUploadConfig.MAX_FILE_SIZE}
          validErrors={errors}
        />
      </div>

      {submitResponse && (
        <div
          className={`${submitResponse ? 'flex' : 'hidden'} mb-4 items-center justify-center space-x-1`}
        >
          {submitResponse.success ? (
            <CheckBadgeIcon className="h-5 w-5  text-green-500" />
          ) : (
            <ExclamationCircleIcon className="h-5 w-5  text-red-500" />
          )}
          <p
            className={clsx('text-sm', {
              'text-red-500': !submitResponse.success,
              'text-green-500': submitResponse.success,
            })}
          >
            {submitResponse.message}
          </p>
        </div>
      )}

      {/* Submit Button */}
      <div className="col-span-2 flex justify-center">
        <button
          type="submit"
          className={clsx(
            getButtonClassName(),
            'disabled:hover disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60',
          )}
        >
          Register
        </button>
      </div>
    </form>
  );
}
