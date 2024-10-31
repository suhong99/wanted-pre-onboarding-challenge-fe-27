import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../shared/layout';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Auth from '../pages/Auth';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'auth',
        children: [
          {
            index: true,
            element: <Auth />,
          },
          {
            path: 'signup',
            element: <SignUp />,
          },
        ],
      },
    ],
  },
]);
