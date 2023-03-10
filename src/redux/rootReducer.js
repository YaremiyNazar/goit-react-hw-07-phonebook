import { combineReducers } from '@reduxjs/toolkit';

import contactSlice from './contactSlice/contactSlice';
import filterSlice from './filterSlice/filterSlice';

const rootReducer = combineReducers({
  contacts: contactSlice,
  filter: filterSlice,
});

export default rootReducer;
