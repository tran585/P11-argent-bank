import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { userReducer, eventsReducer } from '..'
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const userPersistConfig = {
  key: 'root',
  storage: storage,
}
// only userReducer is persisted //
const persistedUsersReducer = persistReducer(userPersistConfig, userReducer.reducer)

export const store = configureStore({
  reducer: combineReducers({
    user: persistedUsersReducer,
    events: eventsReducer.reducer,
  }),
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})

export const persistor = persistStore(store)