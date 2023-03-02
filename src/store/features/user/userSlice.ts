import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from '../../../services/userApi/user';
import { FETCH_DATA_FAILURE,FETCH_DATA_SUCCESS, FETCH_DATA_REQUEST } from './userActionTypes';

interface State {
  data: any[];
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  data: [],
  loading: false,
  error: null,
};

export const fetchDataRequest  = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data: any[]) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataError = (error: string) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});



// Create a slice for managing the data state
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? 'An error occurred';
    });
  },
});




export default dataSlice.reducer;
