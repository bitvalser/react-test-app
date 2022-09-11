import Details from 'components/pages/details/details.component';
import Main from 'components/pages/main/main.component';
import { AppRoutes } from 'constants/app-routes';
import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AppRouter: FC = () => {
  return (
    <BrowserRouter basename="/test-app">
      <Routes>
        <Route path={AppRoutes.Main} element={<Main />} />
        <Route path={AppRoutes.Details} element={<Details />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
