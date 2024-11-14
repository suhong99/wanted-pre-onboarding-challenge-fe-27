import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../shared/layout';

import TodoPage from '../pages/TodoPage';
import AuthPage from '../pages/Auth';
import SignUpPage from '../pages/SignUp';
import TodoDetailPage from '../pages/TodoDetailPage';
import CreateTodoPage from '../pages/CreateTodoPage';
import { authLoader } from '../features/todo/api/loader';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    loader: authLoader,
    children: [
      {
        index: true,
        element: <TodoPage />,
      },
      {
        path: 'detail/:id',
        element: <TodoDetailPage />,
      },
      {
        path: 'create',
        element: <CreateTodoPage />,
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
