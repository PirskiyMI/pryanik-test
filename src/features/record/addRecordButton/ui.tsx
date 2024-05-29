import { FC } from 'react';
import { Button } from '@mui/material';

import { addRecord } from 'entities/record/model/recordThunks';
import { useAppDispatch } from 'shared/lib/hooks';

export const AddRecordButton: FC = () => {
   const dispatch = useAppDispatch();

   const onclick = () => {
      const currentDate = new Date(Date.now()).toISOString();
      dispatch(
         addRecord({
            companySigDate: currentDate,
            employeeSigDate: currentDate,
            companySignatureName: 'Название компании',
            documentName: 'Название документа',
            documentStatus: 'Ожидает подписания',
            documentType: 'Тип документа',
            employeeNumber: '1',
            employeeSignatureName: 'Имя сотрудника',
         }),
      );
   };
   return (
      <Button variant="contained" onClick={onclick}>
         Добавить запись
      </Button>
   );
};
