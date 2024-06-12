'use server';

import { API_URI, ApiRoutes } from '@/constants/config';
import { FormAction } from '@/types/global.type';
import ErrorLogger from '@/utils/ErrorLogger';
import axios, { AxiosError } from 'axios';
import path from 'path';

export const registerRestaurant: FormAction = async (prevState, formData) => {
  const actionResponse = {
    success: false,
    message: 'Some error ocurred.',
  };
  try {
    await axios.post(path.join(API_URI, ApiRoutes.RESTAURANTS), {
      ...formData,
      cuisine: formData.cuisine.split(', '),
    });

    return { success: true, message: 'Restaurant successfully registered' };
  } catch (error) {
    ErrorLogger(error);
    if (error instanceof AxiosError) {
      actionResponse.message =
        error.response?.data.errorMessage ?? error.message;
    } else if (error instanceof Error) {
      actionResponse.message = error.message;
    }
  }

  return actionResponse;
};
