import { Details } from '@components/pages/details';
import { Todo } from '@components/pages/todo';
import { AppRoutes } from '@constants/app-routes';
import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AppRouter: FC = () => {
  return (
    <BrowserRouter basename={process.env.REACT_APP_BASE_NAME}>
      <Routes>
        <Route path={AppRoutes.Todo} element={<Todo />} />
        <Route path={AppRoutes.Details} element={<Details />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
