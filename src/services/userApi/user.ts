// async function that handles the API request

import { createAsyncThunk }  from '@reduxjs/toolkit';

 export const fetchData = createAsyncThunk('data/fetchData', async () => {
    const response = await fetch('https://api.publicapis.org/entries');
    const data = await response.json();
    return data?.entries
});



  