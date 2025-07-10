export const navMenus = [
  {
    title: 'ABOUT US',
    href: '#hero',
  },
  {
    title: 'SERVICES',
    href: '#feature',
  },
  {
    title: 'CONCTACT US',
    href: '#contact',
  },
];

export const handleNavigation = (href) => {
  return (window.location.href = href);
};
