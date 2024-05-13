import axios from 'axios';
import { settings } from '../settings';
import Cookies from 'js-cookie';
import { AUTH_TOKEN_COOKIE } from '../auth/auth-token';

export const RESTAPIClient = axios.create({
  baseURL: settings.env.NEXT_PUBLIC_API_URL,
  // TODO: change logic, take access token from server
  headers: {
    Authorization: `Bearer ${Cookies.get(AUTH_TOKEN_COOKIE)}`,
  },
});
