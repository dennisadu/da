export const getNavLink = (href: string, pathname: string) =>
  pathname !== '/' ? `/${href}` : href;
