import { configureStore } from '@reduxjs/toolkit';
import apiReducer from '../features/api/Api';

export const store = configureStore({
  reducer: {
      api: apiReducer
  },
});
