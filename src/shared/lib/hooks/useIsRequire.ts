import { useState } from 'react';

export const useIsRequire = (errorMessage?: string) => {
   const [error, setError] = useState(false);
   const helperText = error
      ? errorMessage
         ? errorMessage
         : 'Поле обязательно для заполнения'
      : '';

   const handleError = (arg: boolean) => setError(arg);

   return { error, handleError, helperText };
};
