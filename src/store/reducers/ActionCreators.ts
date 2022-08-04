import { createAction } from '@reduxjs/toolkit';

import SectionEnum from '../../enums/SectionEnum';

const setSection = createAction<SectionEnum>('landing/set_section');

export { setSection };
