import { createAction } from '@reduxjs/toolkit';
import SectionEnum from '../../enums/SectionEnum';

const setSection = createAction<SectionEnum>('SET_SECTION');

export { setSection };
