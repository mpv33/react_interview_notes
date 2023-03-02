import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import { fetchData} from '../../../services/userApi/user';
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




// Create a slice for managing the data state
const dataSlice = createSlice({
  name: 'data',
  initialState,
  //method-1 : without using createAsyncThunk reducer
  reducers: {
    fetchDataRequest: (state) => {
      state.loading=true
    },
    fetchDataError: (state,action) => {
      state.error=action.payload
      state.loading=false
    },
    fetchDataSuccess: (state, action: PayloadAction<any[]>) => {
      state.data = action.payload;
      state.loading=false
      state.error=null
    },
  },

  //method-2: using createAsyncThunk reducer
  // reducers:{}
  // extraReducers: (builder) => {
  //   builder.addCase(fetchData.pending, (state) => {
  //     state.loading = true;
  //   });
  //   builder.addCase(fetchData.fulfilled, (state, action) => {
  //     state.loading = false;
  //     state.error = null;
  //     state.data = action.payload;
  //   });
  //   builder.addCase(fetchData.rejected, (state, action) => {
  //     state.loading = false;
  //     state.error = action.error.message ?? 'An error occurred';
  //   });
  // },
});



export default dataSlice.reducer;
