import {
   Route,
   RouterProvider,
   createHashRouter,
   createRoutesFromElements,
} from 'react-router-dom';

import { routeEnum } from 'shared/constants';

import { AppLayout } from 'app/layout';
import { LazyAuthPage, LazyErrorPage, LazyMainPage } from './lazyImports';

export const AppRouter = () => {
   const routes = createRoutesFromElements(
      <Route path={routeEnum.MAIN_PAGE} element={<AppLayout />}>
         <Route index element={<LazyMainPage />} errorElement={<LazyErrorPage />} />
         <Route
            path={routeEnum.AUTH_PAGE}
            element={<LazyAuthPage />}
            errorElement={<LazyErrorPage />}
         />
         <Route path="*" element={<LazyErrorPage />} />
      </Route>,
   );

   const router = createHashRouter(routes, {});

   return <RouterProvider router={router} />;
};
