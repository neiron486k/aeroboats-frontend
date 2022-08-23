import { combineReducers, configureStore } from '@reduxjs/toolkit';

import LandingSlice from './reducers/LandingSlice';
import { carouselSlice } from './reducers/api/carouselSlice';

const rootReducer = combineReducers({
  landing: LandingSlice,
  [carouselSlice.reducerPath]: carouselSlice.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(carouselSlice.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
