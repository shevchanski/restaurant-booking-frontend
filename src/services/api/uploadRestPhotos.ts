'use server';

import { ApiRoutes } from '@/constants/config';
import { ActionResponse } from '@/types/global.type';
import ErrorLogger from '@/utils/ErrorLogger';
import { AxiosError } from 'axios';
import path from 'path';
import { api_instance } from './axios_instance';

export async function uploadRestPhotos(
  formData: FormData,
  restId: string,
): Promise<ActionResponse> {
  const actionResponse: ActionResponse = {
    success: false,
    message: 'Unknown error ocurred!',
  };
  try {
    await api_instance.post(
      path.join(ApiRoutes.REST_PHOTO_UPLOAD, restId),
      formData,
    );

    return { success: true, message: 'Successfully uploaded' };
  } catch (error) {
    ErrorLogger(error);
    actionResponse.message =
      error instanceof AxiosError
        ? error.response?.data?.errorMessage
        : error instanceof Error
          ? error.message
          : actionResponse.message;
  }
  return actionResponse;
}
