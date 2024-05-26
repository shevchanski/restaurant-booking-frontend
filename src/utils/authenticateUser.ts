import { API_URI } from '@/constants/config';
import { Credentials } from '@/types/global.type';
import { User } from '@/types/user.types';
import axios from 'axios';
import path from 'path';

export async function authenticateUser(
  credentials: Credentials,
): Promise<User | null> {
  try {
    const response = await axios.post(path.join(API_URI, 'auth'), credentials);

    return response.data?.user;
  } catch (error) {
    console.error('Failed to authenticate user:', error);
    throw new Error(error instanceof Error ? error.message : 'Unknown error');
  }
}
