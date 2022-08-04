import React from 'react';
import SectionEnum from '../enums/SectionEnum';
import About from '../pages/Landing/sections/About';
import Home from '../pages/Landing/sections/Home';
import Catalog from '../pages/Landing/sections/Catalog';
import Contacts from '../pages/Landing/sections/Contacts';

interface SectionProps {
  key: SectionEnum;
  title: string;
  component: React.FC;
}

const sections: SectionProps[] = [
  {
    key: SectionEnum.HOME,
    title: 'Главная',
    component: Home,
  },
  {
    key: SectionEnum.ABOUT,
    title: 'О нас',
    component: About,
  },
  {
    key: SectionEnum.CATALOG,
    title: 'Каталог',
    component: Catalog,
  },
  {
    key: SectionEnum.CONTACTS,
    title: 'Контакты',
    component: Contacts,
  },
];

export default sections;
