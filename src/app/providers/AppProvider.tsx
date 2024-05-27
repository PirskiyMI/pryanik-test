import { Provider } from 'react-redux';

import { store } from 'app/store';
import { AppRouter } from 'app/router';

export const AppProvider = () => {
   return (
      <Provider store={store}>
         <AppRouter />
      </Provider>
   );
};
