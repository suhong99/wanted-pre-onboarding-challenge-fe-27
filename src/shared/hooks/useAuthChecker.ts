import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { PROTECTED_ROUTES } from '../const/auth';
import { URL_CONST } from '../const/url';

export const useAuthChecker = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const auth = localStorage.getItem('auth');
    const isProtectedRoute = PROTECTED_ROUTES.includes(location.pathname);

    if (isProtectedRoute && !auth) {
      navigate(URL_CONST.auth);
    }

    if (
      auth &&
      (location.pathname === URL_CONST.auth ||
        location.pathname === URL_CONST.signup)
    ) {
      navigate(URL_CONST.home);
    }
  }, [location.pathname, navigate]);
};
