import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { carouselApi } from '../services/carousel';
import { productsApi } from '../services/product';
import LandingSlice from './reducers/LandingSlice';

const rootReducer = combineReducers({
  landing: LandingSlice,
  [carouselApi.reducerPath]: carouselApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(carouselApi.middleware, productsApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
