import { Provider } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { store } from 'app/store';
import { AppRouter } from 'app/router';

export const AppProvider = () => {
   return (
      <Provider store={store}>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
            <AppRouter />
         </LocalizationProvider>
      </Provider>
   );
};
