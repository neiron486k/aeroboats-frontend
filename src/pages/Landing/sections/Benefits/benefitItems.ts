import available from '../../../../assets/landing/images/benefits/available.svg';
import delivery from '../../../../assets/landing/images/benefits/delivery.svg';
import guarantee from '../../../../assets/landing/images/benefits/guarantee.svg';
import handshake from '../../../../assets/landing/images/benefits/handshake.svg';
import modulBuild from '../../../../assets/landing/images/benefits/modul-build.svg';
import security from '../../../../assets/landing/images/benefits/security.svg';
import support from '../../../../assets/landing/images/benefits/support.svg';
import BenefitInterface from './BenefitInterface';

interface BenefitItemProps extends BenefitInterface {
  key: number;
}

const benefitItems: BenefitItemProps[] = [
  {
    key: 1,
    image: delivery,
    title: 'Доставка',
    text: 'Упакуем и доставим вашу лодку до транспортной компании бесплатно.',
  },
  {
    key: 2,
    image: support,
    title: 'Поддержка',
    text: 'Проконсультируем и поможем с возникшими вопросами по эксплуатации в любое время суток.',
  },
  {
    key: 3,
    image: guarantee,
    title: 'Гарантия',
    text: 'Даем гарантию на наши лодки и установки 1 год, а так же расширяем ее, если покупка совершалась вне сезона.',
  },
  {
    key: 4,
    image: available,
    title: 'Доступность',
    text: 'Держим приемлемые цены по отношению к нашим конкурентам.',
  },
  {
    key: 5,
    image: modulBuild,
    title: 'Модульная конструкция',
    text:
      'Благодаря модульной конструкции, нашу лодку проще обслуживать, модернизировать,' +
      ' а так же легко разобрать, что облегчает перевозку и хранение.',
  },
  {
    key: 6,
    image: security,
    title: 'Безопасность и надежность',
    text:
      'Проверенные годами конструкции и составляющие наших лодок доведены до максимальной надежности.' +
      ' Технически рассчитанный центр тяжести при соблюдении инструкций исключает переворот лодки.',
  },
  {
    key: 7,
    image: handshake,
    title: 'Индивидуальный подход',
    text:
      'Поможем подобрать подходящую лодку и комплектацию в зависимости от ваших желаний и потребностей.' +
      ' Так же у нас можно приобрести все компектующие отдельно.',
  },
];

export default benefitItems;
