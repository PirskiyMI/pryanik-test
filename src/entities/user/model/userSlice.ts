import { createSlice } from '@reduxjs/toolkit';
import { fetchUserToken } from './userThunks';

export interface IState {
   token: string | null;
   loading: boolean;
   error: string | null;
}

const initialState: IState = {
   token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
   loading: false,
   error: null,
};

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchUserToken.pending, (state) => {
            state.error = null;
            state.loading = true;
         })
         .addCase(fetchUserToken.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.token = payload;
         })
         .addCase(fetchUserToken.rejected, (state, { payload }) => {
            state.loading = false;
            if (payload) state.error = payload;
         });
   },
});

export const userReducer = userSlice.reducer;
