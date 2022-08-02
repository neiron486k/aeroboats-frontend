import SectionEnum from '../enums/SectionEnum';
import About from '../pages/Landing/sections/About';
import Home from '../pages/Landing/sections/Home';
import Catalog from '../pages/Landing/sections/Catalog';
import Contacts from '../pages/Landing/sections/Contacts';

export default [
  {
    key: SectionEnum.HOME,
    text: 'Главная',
    component: Home,
  },
  {
    key: SectionEnum.ABOUT,
    text: 'О нас',
    component: About,
  },
  {
    key: SectionEnum.CATALOG,
    text: 'Каталог',
    component: Catalog,
  },
  {
    key: SectionEnum.CONTACTS,
    text: 'Контакты',
    component: Contacts,
  },
];
