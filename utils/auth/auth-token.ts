import { setCookie } from '../cookies';

type Params = { accessToken: string };

export const AUTH_TOKEN_COOKIE = 'auth-token';

export const saveAuthToken = ({ accessToken }: Params) => {
  setCookie(AUTH_TOKEN_COOKIE, accessToken);
};
