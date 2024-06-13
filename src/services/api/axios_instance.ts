import { API_URI } from '@/constants/config';
import axios from 'axios';

export const api_instance = axios.create({ baseURL: API_URI });
