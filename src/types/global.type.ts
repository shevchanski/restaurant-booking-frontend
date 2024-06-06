import { RestaurantFormData } from './restaurant.type';

export interface Credentials {
  email: string;
  password: string;
}

export interface ActionResponse {
  success: boolean;
  message: string;
}

export type FormAction = (
  prevState: ActionResponse | undefined,
  formData: RestaurantFormData,
) => Promise<ActionResponse>;
