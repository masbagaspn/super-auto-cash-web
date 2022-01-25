import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, compose } from 'redux';
import apiReducer from '../features/api/Api';
import loggerMiddleware from './middleware/loggerMiddleware';
import tokenMiddleware from './middleware/tokenMiddleware';


export const store = configureStore({
  reducer: {
      api: apiReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tokenMiddleware).concat(loggerMiddleware),
});
