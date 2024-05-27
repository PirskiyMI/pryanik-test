import {
   Route,
   RouterProvider,
   createHashRouter,
   createRoutesFromElements,
} from 'react-router-dom';

import { routeEnum } from 'shared/constants';
import { MainPage } from 'pages/mainPage';
import { AuthPage } from 'pages/authPage';

import { AppLayout } from 'app/layout';

export const AppRouter = () => {
   const routes = createRoutesFromElements(
      <Route path={routeEnum.MAIN_PAGE} element={<AppLayout />}>
         <Route index element={<MainPage />} />
         <Route path={routeEnum.AUTH_PAGE} element={<AuthPage />} />
      </Route>,
   );

   const router = createHashRouter(routes, {});

   return <RouterProvider router={router} />;
};
