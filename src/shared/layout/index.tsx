import { Outlet } from 'react-router';
import { useAuthChecker } from '../hooks/useAuthChecker';

const RootLayout = () => {
  useAuthChecker();

  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
