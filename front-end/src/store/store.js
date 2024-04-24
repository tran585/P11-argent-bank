import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { usersSlice } from "./reducers/userReducers";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

let state = {};

const persistConfig = {
  key: 'root',
  storage: storage,
};

const persistedUsersReducer = persistReducer(persistConfig, usersSlice.reducer);

export const store = configureStore({
    preloadedState: state,
    reducer: combineReducers({
      user: persistedUsersReducer,
    }),
  });

export const persistor = persistStore(store)