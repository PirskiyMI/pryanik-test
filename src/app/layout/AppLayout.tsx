import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

export const AppLayout = () => {
   return (
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
         <Box component="header">Header</Box>
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
