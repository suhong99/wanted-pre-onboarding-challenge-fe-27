import { redirect } from 'react-router';
import { PROTECTED_ROUTES, URL_CONST } from '../../../shared/const/url';

export const authLoader = ({ request }: { request: Request }) => {
  const auth = localStorage.getItem('auth');
  const pathname = new URL(request.url).pathname;

  const isProtectedRoute = PROTECTED_ROUTES.includes(pathname);

  if (isProtectedRoute && !auth) {
    return redirect(URL_CONST.auth);
  }

  if (auth && (pathname === URL_CONST.auth || pathname === URL_CONST.signup)) {
    return redirect(URL_CONST.home);
  }

  return null;
};
