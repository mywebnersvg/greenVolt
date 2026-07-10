import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['de', 'en'],
  defaultLocale: 'de',
  pathnames: {
    '/': '/',
    '/pathnames': {
      de: '/pfadnamen'
    }
  }
});
