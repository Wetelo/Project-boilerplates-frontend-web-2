import axios from 'axios';
import { settings } from '../settings';

export const RESTAPIClient = axios.create({
  baseURL: settings.env.NEXT_PUBLIC_API_URL,
  // TODO: add access token
});
