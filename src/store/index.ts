import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { orderApi } from '../services/order';
import { productsApi } from '../services/product';
import { workApi } from '../services/work';

const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  [workApi.reducerPath]: workApi.reducer,
  [orderApi.reducerPath]: orderApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsApi.middleware, workApi.middleware, orderApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
