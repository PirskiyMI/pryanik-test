import { FC } from 'react';
import { AppBar, Container, Typography } from '@mui/material';
import { useAppSelector } from 'shared/lib/hooks';
import { userTokenSelector } from 'entities/user';
import { LogOutButton } from 'features/logOutButton';

export const TheHeader: FC = () => {
   const isAuth = useAppSelector(userTokenSelector);

   return (
      <AppBar component="header" position="static">
         <Container
            maxWidth={false}
            sx={{
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'space-between',
               p: '1rem 0',
            }}>
            <Typography component="h1" variant="h6">
               Pryanik Test
            </Typography>
            {isAuth && <LogOutButton />}
         </Container>
      </AppBar>
   );
};
