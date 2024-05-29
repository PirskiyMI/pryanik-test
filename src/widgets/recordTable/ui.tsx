import { FC } from 'react';
import {
   Box,
   TableContainer,
   Table,
   TableHead,
   TableRow,
   TableBody,
   CircularProgress,
} from '@mui/material';

import { MyCell } from 'shared/ui/myCell';
import { useAppSelector } from 'shared/lib/hooks';
import { Record, recordLoadingSelector } from 'entities/record';
import { AddRecordButton } from 'features/record/addRecordButton';
import { ChangeRecordButton } from 'features/record/changeRecordButton';
import { RemoveRecordButton } from 'features/record/removeRecordButton';

export const RecordTable: FC = () => {
   const recordList = useAppSelector((state) => state.record.data);
   const isLoading = useAppSelector(recordLoadingSelector);

   const tableHead = (
      <TableHead>
         <TableRow>
            <MyCell>Дата подписи компанией</MyCell>
            <MyCell>Название компании</MyCell>
            <MyCell>Название документа</MyCell>
            <MyCell>Статус документа</MyCell>
            <MyCell>Тип документа</MyCell>
            <MyCell>Кол-во сотрудников</MyCell>
            <MyCell>Дата подписи сотрудника</MyCell>
            <MyCell>Имя сотрудника</MyCell>
            <MyCell></MyCell>
         </TableRow>
      </TableHead>
   );

   if (!recordList.length)
      return (
         <Box
            sx={{
               height: '100%',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
            }}>
            <CircularProgress />
         </Box>
      );

   return (
      <Box
         sx={{
            p: '2rem 0',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '2rem',
         }}>
         <TableContainer>
            <Table>
               {tableHead}
               <TableBody>
                  {recordList.map((el) => (
                     <Record
                        key={el.id}
                        record={el}
                        changeRecordButton={<ChangeRecordButton record={el} />}
                        removeRecordButton={<RemoveRecordButton recordId={el.id} />}
                     />
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
         {isLoading ? (
            <Box sx={{ m: '0 auto' }}>
               <CircularProgress />
            </Box>
         ) : null}
         <Box sx={{ alignSelf: 'flex-end' }}>
            <AddRecordButton />
         </Box>
      </Box>
   );
};
