// async function that handles the API request

import { createAsyncThunk }  from '@reduxjs/toolkit';
import { fetchDataError, fetchDataRequest, fetchDataSuccess } from '../../store/features/user/userActions';


 export const fetchData = createAsyncThunk('data/fetchData', async () => {
    const response = await fetch('https://api.publicapis.org/entries');
    const data = await response.json();
    return data?.entries
});



export const fetchData1 = () => {
    return async (dispatch: any) => {
      try {
        dispatch(fetchDataRequest());
        const response = await fetch('https://api.publicapis.org/entries');
        const data = await response.json();
        dispatch(fetchDataSuccess(data?.entries));
      } catch (error) {
        dispatch(fetchDataError('An error occurred'));
      }
    };
  };