import { useState } from 'react';

export const useIsOpen = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleIsOpen = (isOpen: boolean) => () => {
      setIsOpen(isOpen);
   };

   return { isOpen, toggleIsOpen };
};
