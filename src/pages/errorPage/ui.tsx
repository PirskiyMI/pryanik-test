import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { routeEnum } from 'shared/constants';

export const ErrorPage = () => {
   return (
      <Box
         sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2
         }}>
         <Typography component="h2" variant="h5">
            Что-то пошло не так
         </Typography>
         <Button variant="contained">
            <Link to={routeEnum.MAIN_PAGE}>Вернуться на главную страницу</Link>
         </Button>
      </Box>
   );
};
