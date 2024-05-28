import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosRequest } from 'shared/api';
import { IState } from './userSlice';

interface IResponse {
   data: {
      token: string;
   };
   error_code: number;
   error_message: string;
   profiling: string;
   timings: unknown;
}

export const fetchUserToken = createAsyncThunk<
   IState['token'],
   { username: string; password: string },
   { rejectValue: string }
>('user/fetchUserToken', async (user, { rejectWithValue }) => {
   try {
      return await axiosRequest
         .post<IResponse>('/ru/data/v3/testmethods/docs/login', user)
         .then((res) => {
            localStorage.setItem('token', res.data.data.token);
            return res.data.data.token;
         });
   } catch (error) {
      console.log(error);
      return rejectWithValue('Ошибка при запросе токена');
   }
});
