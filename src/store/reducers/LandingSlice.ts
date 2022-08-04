import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import SectionEnum from '../../enums/SectionEnum';
import { setSection } from './ActionCreators';

interface SectionState {
  section: SectionEnum;
}

const initialState: SectionState = {
  section: SectionEnum.HOME,
};

const landingSlice = createSlice({
  name: 'section',
  initialState,
  reducers: {},
  extraReducers: {
    [setSection.type]: (state, action: PayloadAction<SectionEnum>) => {
      state.section = action.payload;
    },
  },
});

export default landingSlice.reducer;
