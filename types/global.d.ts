declare module '*.module.scss';

declare global {
   type RootState = import('./../src/app/store/rootState').RootState;
   type AppDispatch = import('./../src/app/store/appStore').AppDispatch;
}

export {};
