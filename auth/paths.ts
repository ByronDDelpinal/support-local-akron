// Core paths
export const PATH_ROOT = '/';
export const PATH_ADMIN = '/admin';
export const PATH_SIGN_IN = '/sign-in';

export const checkPathPrefix = (pathname = '', prefix: string) =>
  pathname.toLowerCase().startsWith(prefix);

export const isPathProtected = (pathname?: string) =>
  checkPathPrefix(pathname, PATH_ADMIN);
