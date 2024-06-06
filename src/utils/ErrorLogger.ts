import { AxiosError } from 'axios';

function ErrorLogger(error: any) {
  let errorLog: string = `[Error]: `;
  if (error instanceof AxiosError) {
    errorLog += error.response?.data?.errorMessage ?? error.message;
  } else if (error instanceof Error) {
    errorLog += error.message;
  } else {
    errorLog += error;
  }
  console.error(errorLog);
}

export default ErrorLogger;
