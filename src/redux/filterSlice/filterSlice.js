import { createSlice } from '@reduxjs/toolkit';
const filterSlice = createSlice({
  name: 'filter',
  initialState: "",
  reducers:{
    getFiltered: {
      reducer (_, action) {
     return action.payload
    }}
  
  },
});

export const { getFiltered } = filterSlice.actions;
export default filterSlice.reducer;
