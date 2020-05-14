import { combineReducers, getDefaultMiddleware, configureStore } from "@reduxjs/toolkit";
import pagesReducer from './pages';

const rootReducer = combineReducers({
  pages: pagesReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware()]
})

export default store;

export type RootState = ReturnType<typeof store.getState>