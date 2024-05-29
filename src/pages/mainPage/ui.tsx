import { lazy, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Container } from '@mui/material';

import { useAppDispatch, useAppSelector } from 'shared/lib/hooks';
import { routeEnum } from 'shared/constants';
import { userTokenSelector } from 'entities/user';
import { fetchRecords } from 'entities/record';

const LazyRecordTable = lazy(async () => {
   const { RecordTable } = await import('widgets/recordTable');
   return { default: RecordTable };
});

export const MainPage = () => {
   const accessToken = useAppSelector(userTokenSelector);
   const dispatch = useAppDispatch();

   useEffect(() => {
      if (accessToken) {
         dispatch(fetchRecords());
      }
   }, [accessToken, dispatch]);

   if (!accessToken) return <Navigate to={routeEnum.AUTH_PAGE} />;

   return (
      <Container maxWidth={false} sx={{ height: '100%' }}>
         <LazyRecordTable />
      </Container>
   );
};
