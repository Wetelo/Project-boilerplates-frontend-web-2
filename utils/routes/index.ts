// Automatically generated by declarative-routing, do NOT edit
import { z } from 'zod';
import { makeRoute } from './makeRoute';

const defaultInfo = {
  search: z.object({}),
};

import * as ConfirmChangeMyEmailRoute from '@/app/(auth)/change-email/page.info';
import * as ConfirmChangeMyPhoneRoute from '@/app/(auth)/change-phone/page.info';
import * as LoginRoute from '@/app/(auth)/login/page.info';
import * as RegistrationRoute from '@/app/(auth)/registration/page.info';
import * as ResetPasswordRoute from '@/app/(auth)/reset-password/page.info';
import * as HomeRoute from '@/app/(main-layout)/page.info';
import * as StaticPageRoute from '@/app/(main-layout)/[slug]/page.info';
import * as MyProfileRoute from '@/app/(main-layout)/my/profile/page.info';
import * as LogoutRoute from '@/app/logout/page.info';

export const ConfirmChangeMyEmail = makeRoute('/(auth)/change-email', {
  ...defaultInfo,
  ...ConfirmChangeMyEmailRoute.Route,
});
export const ConfirmChangeMyPhone = makeRoute('/(auth)/change-phone', {
  ...defaultInfo,
  ...ConfirmChangeMyPhoneRoute.Route,
});
export const Login = makeRoute('/(auth)/login', {
  ...defaultInfo,
  ...LoginRoute.Route,
});
export const Registration = makeRoute('/(auth)/registration', {
  ...defaultInfo,
  ...RegistrationRoute.Route,
});
export const ResetPassword = makeRoute('/(auth)/reset-password', {
  ...defaultInfo,
  ...ResetPasswordRoute.Route,
});
export const Home = makeRoute('/(main-layout)', {
  ...defaultInfo,
  ...HomeRoute.Route,
});
export const StaticPage = makeRoute('/(main-layout)/[slug]', {
  ...defaultInfo,
  ...StaticPageRoute.Route,
});
export const MyProfile = makeRoute('/(main-layout)/my/profile', {
  ...defaultInfo,
  ...MyProfileRoute.Route,
});
export const Logout = makeRoute('/logout', {
  ...defaultInfo,
  ...LogoutRoute.Route,
});
