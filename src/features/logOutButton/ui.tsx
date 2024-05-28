import { FC } from 'react';
import { Button } from '@mui/material';

import { useAppDispatch } from 'shared/lib/hooks';
import { userActions } from 'entities/user';

export const LogOutButton: FC = () => {
   const { clearToken } = userActions;
   const dispatch = useAppDispatch();

   const handleLogOut = () => {
      localStorage.removeItem('token');
      dispatch(clearToken());
   };

   return (
      <Button
         variant="outlined"
         onClick={handleLogOut}
         sx={{ color: 'whitesmoke', borderColor: 'whitesmoke' }}>
         Выйти
      </Button>
   );
};
