import {
   Box,
   Button,
   FormControl,
   InputLabel,
   MenuItem,
   Select,
   SelectChangeEvent,
   TextField,
} from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { IData } from 'entities/record/model/recordSlice';
import { changeRecord } from 'entities/record/model/recordThunks';
import { ChangeEvent, FC, useState } from 'react';
import { useAppDispatch, useIsRequire } from 'shared/lib/hooks';

export const ChangeRecordForm: FC<IData> = ({ id, ...props }) => {
   const [data, setData] = useState({ ...props });
   const { handleError: handleDocumentNameError, ...documentName } = useIsRequire();
   const dispatch = useAppDispatch();

   const handleChangeRecord = () => {
      if (!data.documentName) {
         handleDocumentNameError(true);
      }
      if (data.documentName) dispatch(changeRecord({ id, newRow: data }));
   };

   const handleChangeCompanySignatureName = (e: ChangeEvent<HTMLInputElement>) =>
      setData((prev) => ({ ...prev, companySignatureName: e.target.value }));
   const handleChangeDocumentName = (e: ChangeEvent<HTMLInputElement>) =>
      setData((prev) => ({ ...prev, documentName: e.target.value }));
   const handleChangeDocumentStatus = (e: SelectChangeEvent) => {
      setData((prev) => ({ ...prev, documentStatus: e.target.value }));
   };
   const handleChangeDocumentType = (e: ChangeEvent<HTMLInputElement>) =>
      setData((prev) => ({ ...prev, documentType: e.target.value }));
   const handleChangeEmployerNumber = (e: ChangeEvent<HTMLInputElement>) =>
      setData((prev) => ({ ...prev, employeeNumber: e.target.value }));
   const handleChangeEmployerSignatureName = (e: ChangeEvent<HTMLInputElement>) =>
      setData((prev) => ({ ...prev, employeeSignatureName: e.target.value }));

   return (
      <Box sx={{ p: 4 }}>
         <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
               value={data.companySignatureName}
               onChange={handleChangeCompanySignatureName}
               variant="standard"
               label="Название компании"
            />
            <TextField
               value={data.documentName}
               onChange={handleChangeDocumentName}
               variant="standard"
               label="Название документа"
               {...documentName}
            />
            <TextField
               value={data.documentType}
               onChange={handleChangeDocumentType}
               variant="standard"
               label="Тип документа"
            />
            <TextField
               type="number"
               value={data.employeeNumber}
               onChange={handleChangeEmployerNumber}
               variant="standard"
               label="Количество сотрудников"
            />
            <TextField
               value={data.employeeSignatureName}
               onChange={handleChangeEmployerSignatureName}
               variant="standard"
               label="Имя сотрудника"
            />
            <Box>
               <FormControl fullWidth>
                  <InputLabel id="document-status-select">Статус документа</InputLabel>
                  <Select
                     defaultValue="Ожидает подписания"
                     value={data.documentStatus}
                     onChange={handleChangeDocumentStatus}
                     label="Статус документа"
                     labelId="document-status-select">
                     <MenuItem value={'Ожидает подписания'}>Ожидает подписания</MenuItem>
                     <MenuItem value={'Подписан'}>Подписан</MenuItem>
                     <MenuItem value={'Не подписан'}>Не подписан</MenuItem>
                  </Select>
               </FormControl>
            </Box>
            <DateTimePicker
               value={dayjs(data.companySigDate)}
               label="Дата подписание компанией"
               onChange={(newDate) =>
                  setData((prev) => ({
                     ...prev,
                     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                     //@ts-expect-error
                     companySigDate: new Date(newDate?.$d).toISOString(),
                  }))
               }
            />
            <DateTimePicker
               value={dayjs(data.employeeSigDate)}
               label="Дата подписание сотрудником"
               onChange={(newDate) =>
                  setData((prev) => ({
                     ...prev,
                     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                     //@ts-expect-error
                     employeeSigDate: new Date(newDate?.$d).toISOString(),
                  }))
               }
            />
            <Button onClick={handleChangeRecord} sx={{ alignSelf: 'flex-end' }}>
               Сохранить
            </Button>
         </Box>
      </Box>
   );
};
