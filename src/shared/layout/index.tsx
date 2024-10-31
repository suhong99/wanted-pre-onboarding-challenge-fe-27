import { Outlet } from 'react-router';
import { useAuthChecker } from '../hooks/useAuthChecker';

const RootLayout = () => {
  useAuthChecker();

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default RootLayout;
