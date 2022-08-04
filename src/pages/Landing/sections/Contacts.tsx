import React, { FC } from 'react';

import SectionEnum from '../../../enums/SectionEnum';
import Section from './Section';

const Contacts: FC = () => {
  return (
    <Section id={SectionEnum.CONTACTS}>
      <div>contacts</div>
    </Section>
  );
};

export default Contacts;
