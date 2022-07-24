import React, { FC } from 'react';
import Section from '../components/Section';
import SectionEnum from '../enums/SectionEnum';

const Contacts: FC = () => {
  return (
    <Section id={SectionEnum.CONTACTS}>
      <div>contacts</div>
    </Section>
  );
};

export default Contacts;
