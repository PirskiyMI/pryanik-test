import { useNavigate } from 'react-router-dom';

import { useAppSelector } from 'shared/lib/hooks';
import { userTokenSelector } from 'entities/user';

export const MainPage = () => {
   const navigate = useNavigate();
   const accessToken = useAppSelector(userTokenSelector);

   if (!accessToken) navigate('/auth');

   return <div>MainPage</div>;
};
