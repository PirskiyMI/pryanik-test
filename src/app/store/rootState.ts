import { combineReducers } from '@reduxjs/toolkit';
import { recordReducer } from 'entities/record';

import { userReducer } from 'entities/user';

export const rootReducer = combineReducers({
   user: userReducer,
   record: recordReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
