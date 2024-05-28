import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import { TheHeader } from 'widgets/theHeader';

export const AppLayout = () => {
   return (
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
         <TheHeader />
         <Box
            component="main"
            sx={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               flex: '1 1 auto',
            }}>
            <Outlet />
         </Box>
      </Box>
   );
};
