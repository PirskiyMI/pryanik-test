import { FC } from 'react';
import { Box, Drawer, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

import { IData } from 'entities/record/model/recordSlice';
import { ChangeRecordForm } from './ChangeRecordForm';
import { useIsOpen } from 'shared/lib/hooks';

interface IProps {
   record: IData;
}

export const ChangeRecordButton: FC<IProps> = ({ record }) => {
   const { isOpen, toggleIsOpen } = useIsOpen();

   const DrawerBody = (
      <Box sx={{ width: 600 }}>
         <ChangeRecordForm {...record} />
      </Box>
   );

   return (
      <>
         <IconButton size="small" onClick={toggleIsOpen(true)}>
            <EditIcon fontSize="small" />
         </IconButton>
         <Drawer open={isOpen} onClose={toggleIsOpen(false)}>
            {DrawerBody}
         </Drawer>
      </>
   );
};
