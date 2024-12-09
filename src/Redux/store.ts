// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore , persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '.';

const persistConfg = {
  key : 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfg ,rootReducer )

const store = configureStore({
  reducer:persistedReducer
});



const persister = persistStore(store)

export  {
   store , persister
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
