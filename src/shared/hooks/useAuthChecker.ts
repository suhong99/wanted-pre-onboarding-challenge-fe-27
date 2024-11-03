import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { PROTECTED_ROUTES } from '../const/auth';

export const useAuthChecker = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isProtectedRoute = PROTECTED_ROUTES.includes(location.pathname);

  useEffect(() => {
    const auth = localStorage.getItem('auth');

    if (isProtectedRoute && !auth) {
      navigate('/auth');
    }
  }, [isProtectedRoute, navigate]);
};
