import { combineReducers, configureStore } from '@reduxjs/toolkit';
import SectionSlice from './reducers/SectionSlice';

const rootReducer = combineReducers({
  section: SectionSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
