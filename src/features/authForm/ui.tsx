import { FC } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

import { useAppDispatch, useAppSelector, useInput, useIsRequire } from 'shared/lib/hooks';
import { fetchUserToken, userErrorSelector, userLoadingSelector } from 'entities/user';

export const AuthFrom: FC = () => {
   const username = useInput();
   const password = useInput();
   const { handleError: usernameHandleError, ...usernameError } = useIsRequire(
      'Укажите имя пользователя',
   );
   const { handleError: passwordHandleError, ...passwordError } = useIsRequire('Введите пароль');
   const isLoading = useAppSelector(userLoadingSelector);
   const requestError = useAppSelector(userErrorSelector);
   const dispatch = useAppDispatch();

   const handleAuth = () => {
      if (!username.value) {
         usernameHandleError(true);
      }
      if (!password.value) {
         passwordHandleError(true);
      }
      if (username.value && password.value) {
         const data = { username: username.value, password: password.value };
         dispatch(fetchUserToken(data));
      }
   };

   return (
      <Box
         component="div"
         sx={{
            width: 600,
            p: '20px 30px',
            m: '0 auto',
            border: '1px solid lightGray',
            borderRadius: 1,
         }}>
         <Box
            component="form"
            autoComplete="true"
            sx={{ display: 'flex', flexDirection: 'column', rowGap: '16px' }}>
            <TextField
               label="Имя пользователя"
               variant="standard"
               {...username}
               {...usernameError}
            />
            <TextField
               type="password"
               label="Пароль"
               variant="standard"
               {...password}
               {...passwordError}
            />
            <Button
               variant="contained"
               disabled={isLoading}
               onClick={handleAuth}
               sx={{ alignSelf: 'center' }}>
               Войти
            </Button>
            {requestError && (
               <Typography variant="body2" sx={{ alignSelf: 'center' }}>
                  Имя пользователя или пароль неверны
               </Typography>
            )}
         </Box>
      </Box>
   );
};
