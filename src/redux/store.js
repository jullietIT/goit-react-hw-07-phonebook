import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  REGISTER,
  PURGE,
  PAUSE,
  PERSIST,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};
const persistedContactsReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedContactsReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
//
// const initialState = {
//   contacts: [],
//   filter: '',
// };

// export const store = configureStore({
//   reducer: rootReducer,
// });
// const rootReducer = (state = initialState, action) => {
//   return state;
// };

// // Создаем расширение стора чтобы добавить инструменты разработчика
// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);
