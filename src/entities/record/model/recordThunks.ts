import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosRequest } from 'shared/api';
import { IData, IRecord, recordActions } from './recordSlice';

interface IResponse<T> {
   data: T;
   error_code: number;
   error_message: string;
   profiling: string;
   timings: null;
}

export const fetchRecords = createAsyncThunk<
   IData[],
   void,
   { rejectValue: string; state: RootState }
>('record/fetchRecords', async (_, { rejectWithValue, getState }) => {
   const { token } = getState().user;
   try {
      return await axiosRequest
         .get<IResponse<IData[]>>('/ru/data/v3/testmethods/docs/userdocs/get', {
            headers: { 'x-auth': token },
         })
         .then((res) => res.data.data);
   } catch (error) {
      return rejectWithValue('Ошибка при запросе данных с сервера');
   }
});

export const removeRecord = createAsyncThunk<
   void,
   string,
   { rejectValue: string; state: RootState; dispatch: AppDispatch }
>('record/removeRecord', async (id, { rejectWithValue, getState, dispatch }) => {
   const { token } = getState().user;
   try {
      await axiosRequest
         .post(
            `/ru/data/v3/testmethods/docs/userdocs/delete/${id}`,
            {},
            { headers: { 'x-auth': token } },
         )
         .then(() => {
            const { removeRecord } = recordActions;

            dispatch(removeRecord(id));
         });
   } catch (error) {
      return rejectWithValue('Ошибка при удалении записи на сервере');
   }
});

export const addRecord = createAsyncThunk<
   IData,
   IRecord,
   { rejectValue: string; state: RootState }
>('record/addRecord', async (newRow, { rejectWithValue, getState }) => {
   const { token } = getState().user;
   try {
      return await axiosRequest
         .post<IResponse<IData>>('/ru/data/v3/testmethods/docs/userdocs/create', newRow, {
            headers: { 'x-auth': token },
         })
         .then((res) => res.data.data);
   } catch (error) {
      return rejectWithValue('Ошибка при создании записи на сервере');
   }
});

export const changeRecord = createAsyncThunk<
   void,
   { id: string; newRow: IRecord },
   { rejectValue: string; state: RootState; dispatch: AppDispatch }
>(`record/changeRecord`, async ({ id, newRow }, { rejectWithValue, getState, dispatch }) => {
   const { token } = getState().user;
   const { changeRecord } = recordActions;
   try {
      await axiosRequest
         .post<IResponse<IRecord>>(`/ru/data/v3/testmethods/docs/userdocs/set/${id}`, newRow, {
            headers: { 'x-auth': token },
         })
         .then((res) => {
            const data = res.data.data;
            dispatch(changeRecord({ id, data }));
         });
   } catch (error) {
      return rejectWithValue('Ошибка при создании записи на сервере');
   }
});
