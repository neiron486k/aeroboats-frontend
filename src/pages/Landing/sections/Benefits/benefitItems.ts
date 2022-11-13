import delivery from '../../../../assets/landing/images/benefits/delivery.svg';
import support from '../../../../assets/landing/images/benefits/support.svg';
import BenefitInterface from './BenefitInterface';

interface BenefitItemProps extends BenefitInterface {
  key: number;
}

const benefitItems: BenefitItemProps[] = [
  {
    key: 1,
    image: delivery,
    text: 'delivery',
  },
  {
    key: 2,
    image: support,
    text: 'support',
  },
  {
    key: 3,
    image: 'https://picsum.photos/id/237/200/300',
    text: 'test test',
  },
  {
    key: 4,
    image: 'https://picsum.photos/id/237/200/300',
    text: 'test test',
  },
  {
    key: 5,
    image: 'https://picsum.photos/id/237/200/300',
    text: 'test test',
  },
  {
    key: 6,
    image: 'https://picsum.photos/id/237/200/300',
    text: 'test test',
  },
  {
    key: 7,
    image: 'https://picsum.photos/id/237/200/300',
    text: 'test test',
  },
];

export default benefitItems;
