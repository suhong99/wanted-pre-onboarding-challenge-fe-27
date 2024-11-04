import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../shared/layout';

import TodoPage from '../pages/TodoPage';
import AuthPage from '../pages/Auth';
import SignUpPage from '../pages/SignUp';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <TodoPage />,
      },
      {
        path: 'auth',
        children: [
          {
            index: true,
            element: <AuthPage />,
          },
          {
            path: 'signup',
            element: <SignUpPage />,
          },
        ],
      },
    ],
  },
]);
