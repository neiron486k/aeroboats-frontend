import SectionEnum from '../enums/SectionEnum';

const scrollToSection = (id: SectionEnum): void => {
  document.getElementById(id)?.scrollIntoView();
};

export default scrollToSection;
