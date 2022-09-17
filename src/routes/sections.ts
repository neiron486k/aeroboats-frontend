import React from 'react';

import SectionEnum from '../enums/SectionEnum';
import About from '../pages/Landing/sections/About';
import Contacts from '../pages/Landing/sections/Contacts';
import Home from '../pages/Landing/sections/Home';
import Products from '../pages/Landing/sections/Products';

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
    title: 'Продукты',
    component: Products,
  },
  {
    key: SectionEnum.CONTACTS,
    title: 'Контакты',
    component: Contacts,
  },
];

export default sections;
