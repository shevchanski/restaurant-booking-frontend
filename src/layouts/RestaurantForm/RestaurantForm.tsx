'use client';

import { registerRestaurant } from '@/actions/registerRestaurant';
import { RestaurantFormSchema } from '@/schemas/rest-registation.schema';
import { RestaurantFormData } from '@/types/restaurant.type';
import {
  CheckBadgeIcon,
  ExclamationCircleIcon,
  LinkIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { useFormState } from 'react-dom';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input/Input';
import Textarea from '../../components/Textarea/Textarea';
import { getButtonClassName } from '../../components/helpers/getBtnClassName';

export default function RestaurantForm() {
  const { register, handleSubmit, formState } = useForm<RestaurantFormData>({
    mode: 'onSubmit',
    defaultValues: {
      title: '',
      description: '',
      website: '',
      rating: '',
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
  const [actionResponse, dispatch] = useFormState(
    registerRestaurant,
    undefined,
  );

  const onSubmit = (data: RestaurantFormData) => {
    console.log(data);
    dispatch(data);
  };

  return (
    <form
      className="mx-auto max-w-[700px] rounded-lg bg-white p-6 shadow-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="mb-4 text-center text-3xl font-bold">
        Register <span className="text-red-500">Your</span> Restaurant
      </h2>

      <div className="grid grid-cols-4 gap-x-2 gap-y-4">
        {/* Title */}
        <Input
          labelText="Title"
          type="text"
          {...register('title')}
          required
          className="col-span-full"
          placeholder="Enter a name of your restaurant"
          errorMessage={errors.title ? errors.title.message : ''}
        />

        {/* Description */}
        <Textarea
          labelText="Description about your place"
          type="text"
          required
          {...register('description')}
          className="col-span-4"
          textareaStyle=" min-h-[80px]"
          placeholder="Consequat sunt ipsum culpa eiusmod reprehenderit esse laboris sit duis nisi cupidatat."
        />

        {/* Website */}
        <Input
          labelText="Website"
          type="text"
          required
          {...register('website')}
          className="col-span-4"
          inputIcon={<LinkIcon />}
          placeholder="https://your.website.com/"
        />

        {/* Rating */}
        {/* <Input labelText="Rating" {...register('rating')} type="number" /> */}

        {/* Cuisine */}
        <Input
          labelText="Cuisine (comma separated)"
          {...register('cuisine')}
          className="col-span-2"
          required
          placeholder="Select cuisine(s)"
          errorMessage={errors.title ? errors.title.message : ''}
        />

        {/* Phone Number */}
        <Input
          labelText="Phone Number"
          {...register('phoneNumber')}
          type="tel"
          className="col-span-2"
          required
          inputIcon={<PhoneIcon />}
        />

        {/* Address Section */}
        <div className="col-span-full mb-6 grid grid-cols-2 gap-x-2 gap-y-4">
          <h3 className="col-span-2 mb-2 text-xl font-semibold">Address</h3>
          <Input
            labelText="City"
            {...register('address.city')}
            type="text"
            required
            placeholder="Kyiv"
          />
          <Input
            labelText="Country"
            {...register('address.country')}
            type="text"
            required
            placeholder="Ukraine"
          />
          <Input
            labelText="Street Address"
            {...register('address.street_address')}
            required
            className="col-span-2"
          />
          <Input
            labelText="Post Code"
            {...register('address.post_code')}
            type="text"
            required
          />

          <Input
            labelText="Region"
            {...register('address.region')}
            type="text"
          />
        </div>
      </div>

      {actionResponse && (
        <div
          className={`${actionResponse ? 'flex' : 'hidden'} mb-4 items-center justify-center space-x-1`}
        >
          {actionResponse.success ? (
            <CheckBadgeIcon className="h-5 w-5  text-green-500" />
          ) : (
            <ExclamationCircleIcon className="h-5 w-5  text-red-500" />
          )}
          <p
            className={clsx('text-sm', {
              'text-red-500': !actionResponse.success,
              'text-green-500': actionResponse.success,
            })}
          >
            {actionResponse.message}
          </p>
        </div>
      )}
      {/* Submit Button */}
      <div className="col-span-2 flex justify-center">
        <button
          type="submit"
          //  className="rounded-md bg-blue-500 px-6 py-2 text-white hover:bg-blue-600"
          className={getButtonClassName()}
        >
          Register
        </button>
      </div>
    </form>
  );
}
