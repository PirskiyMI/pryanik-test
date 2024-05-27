import { fetchUserToken } from 'entities/user';
import { useEffect } from 'react';

import { useAppDispatch } from 'shared/lib/hooks';

export const AuthPage = () => {
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(fetchUserToken({ username: 'user13', password: 'password1' }));
   }, [dispatch]);

   return <div>AuthPage</div>;
};
