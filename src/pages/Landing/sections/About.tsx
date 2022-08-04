import React, { FC } from 'react';
import Section from './Section';
import SectionEnum from '../../../enums/SectionEnum';

const About: FC = () => {
  return (
    <Section id={SectionEnum.ABOUT}>
      <div>about</div>
    </Section>
  );
};

export default About;
