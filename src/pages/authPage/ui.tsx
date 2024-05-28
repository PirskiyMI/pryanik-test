import { Navigate } from 'react-router-dom';
import { Box } from '@mui/material';

import { routeEnum } from 'shared/constants';
import { useAppSelector } from 'shared/lib/hooks';
import { userTokenSelector } from 'entities/user';
import { AuthFrom } from 'features/authForm';

export const AuthPage = () => {
   const accessToken = useAppSelector(userTokenSelector);

   if (accessToken) return <Navigate to={routeEnum.MAIN_PAGE} replace />;

   return (
      <Box component="div">
         <AuthFrom />
      </Box>
   );
};
