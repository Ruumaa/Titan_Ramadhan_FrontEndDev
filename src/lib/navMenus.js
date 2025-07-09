export const navMenus = [
  {
    title: 'ABOUT US',
    href: '#hero',
  },
  {
    title: 'SERVICES',
    href: '#features',
  },
  {
    title: 'CONCTACT US',
    href: '#contact',
  },
];

export const handleNavigation = (href) => {
  return (window.location.href = href);
};
