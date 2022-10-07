enum SectionEnum {
  HOME = 'home',
  ABOUT = 'about',
  CONTACTS = 'contacts',
  PRODUCTS = 'products',
}

function getKeyByValue(value: SectionEnum): string {
  const indexOfSection = Object.values(SectionEnum).indexOf(value);
  return Object.keys(SectionEnum)[indexOfSection];
}

export default SectionEnum;
export { getKeyByValue };
