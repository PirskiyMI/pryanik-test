import { FC, ReactNode } from 'react';
import { TableCell } from '@mui/material';

interface IProps {
   children?: ReactNode;
}

export const MyCell: FC<IProps> = ({ children }) => {
   return <TableCell sx={{ textAlign: 'center' }}>{children}</TableCell>;
};
