import { combineReducers, configureStore } from '@reduxjs/toolkit';
import LandingSlice from './reducers/LandingSlice';

const rootReducer = combineReducers({
  landing: LandingSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
