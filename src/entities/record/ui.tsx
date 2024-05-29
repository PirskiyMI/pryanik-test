import { FC, ReactNode } from 'react';
import dayjs from 'dayjs';
import { TableRow } from '@mui/material';
import { MobileDateTimePicker } from '@mui/x-date-pickers';

import { MyCell } from 'shared/ui/myCell';

import { IData } from './model/recordSlice';

interface IProps {
   record: IData;
   removeRecordButton: ReactNode;
   changeRecordButton: ReactNode;
}

export const Record: FC<IProps> = ({ record, removeRecordButton, changeRecordButton }) => {
   const {
      companySigDate,
      companySignatureName,
      documentName,
      documentStatus,
      documentType,
      employeeNumber,
      employeeSigDate,
      employeeSignatureName,
   } = record;

   return (
      <TableRow>
         <MyCell>
            <MobileDateTimePicker value={dayjs(companySigDate)} disabled />
         </MyCell>
         <MyCell>{companySignatureName}</MyCell>
         <MyCell>{documentName}</MyCell>
         <MyCell>{documentStatus}</MyCell>
         <MyCell>{documentType}</MyCell>
         <MyCell>{employeeNumber}</MyCell>
         <MyCell>
            <MobileDateTimePicker value={dayjs(employeeSigDate)} disabled />
         </MyCell>
         <MyCell>{employeeSignatureName}</MyCell>
         <MyCell>
            {changeRecordButton}
            {removeRecordButton}
         </MyCell>
      </TableRow>
   );
};
