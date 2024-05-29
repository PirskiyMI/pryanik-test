import { lazy } from 'react';

export const LazyMainPage = lazy(async () => {
   const { MainPage } = await import('pages/mainPage');
   return { default: MainPage };
});

export const LazyAuthPage = lazy(async () => {
   const { AuthPage } = await import('pages/authPage');
   return { default: AuthPage };
});

export const LazyErrorPage = lazy(async () => {
   const { ErrorPage } = await import('pages/errorPage');
   return { default: ErrorPage };
});
