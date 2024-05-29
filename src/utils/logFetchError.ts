import { AxiosError } from 'axios';

function logFetchError(error: any) {
  if (error instanceof AxiosError) {
    console.error(error.response?.data?.errorMessage);
  } else if (error instanceof Error) {
    console.error(error.message);
  }
  console.error(error);
}

export default logFetchError;
