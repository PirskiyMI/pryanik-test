import { FC } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { useAppDispatch } from 'shared/lib/hooks';
import { removeRecord } from 'entities/record/model/recordThunks';

interface IProps {
   recordId: string;
}

export const RemoveRecordButton: FC<IProps> = ({ recordId }) => {
   const dispatch = useAppDispatch();

   const onclick = () => dispatch(removeRecord(recordId));

   return (
      <IconButton size="small" onClick={onclick}>
         <DeleteIcon fontSize="small" />
      </IconButton>
   );
};
