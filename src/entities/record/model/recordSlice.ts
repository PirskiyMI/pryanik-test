import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchRecords, addRecord, removeRecord } from './recordThunks';

export interface IRecord {
   companySigDate: string;
   companySignatureName: string;
   documentName: string;
   documentStatus: string;
   documentType: string;
   employeeNumber: string;
   employeeSigDate: string;
   employeeSignatureName: string;
}

export interface IData extends IRecord {
   id: string;
}

interface IState {
   data: IData[];
   loading: boolean;
   error: string | null;
}

const initialState: IState = {
   data: [],
   loading: false,
   error: null,
};

const recordSlice = createSlice({
   name: 'record',
   initialState,
   reducers: {
      changeRecord: (
         state,
         { payload: { id, data } }: PayloadAction<{ data: IRecord; id: string }>,
      ) => {
         for (let i = 0; i < state.data.length; i++) {
            if (state.data[i].id === id) {
               state.data[i] = { id, ...data };
               break;
            }
         }
      },
      removeRecord: (state, { payload }: PayloadAction<string>) => {
         state.data = state.data.filter((el) => el.id !== payload);
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchRecords.pending, (state) => {
            state.error = null;
            state.loading = true;
         })
         .addCase(fetchRecords.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.data = payload;
         })
         .addCase(fetchRecords.rejected, (state, { payload }) => {
            state.loading = false;
            if (payload) state.error = payload;
         })
         .addCase(removeRecord.fulfilled, (state) => {
            state.loading = false;
         })
         .addCase(removeRecord.rejected, (state, { payload }) => {
            state.loading = false;
            if (payload) state.error = payload;
         })
         .addCase(addRecord.pending, (state) => {
            state.error = null;
            state.loading = true;
         })
         .addCase(addRecord.fulfilled, (state, { payload }) => {
            state.loading = false;
            if (state.data) state.data = [...state.data, payload];
         })
         .addCase(addRecord.rejected, (state, { payload }) => {
            state.loading = false;
            if (payload) state.error = payload;
         });
   },
});

export const recordReducer = recordSlice.reducer;
export const recordActions = recordSlice.actions;
