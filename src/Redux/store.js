import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from 'Redux/phonebookSlice';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import authSlice from './auth/auth-slice';
import persistStore from 'redux-persist/es/persistStore';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist:['token'],
}

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice),
    phonebook: phonebookReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

