import { useState } from 'react';
import { ModalContext } from './ModalContext';
 
export const ModalContextProvider: React.FC = ({children}) => {
  const [isModalActive, setModalActive] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{isModalActive, setModalActive}}>
      {children}
    </ModalContext.Provider>
  );
};