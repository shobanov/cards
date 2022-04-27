import { useState } from 'react';
import { ModalContext } from './ModalContext';

interface IProps {
  children: React.ReactNode;
};
 
export const ModalContextProvider: React.FC<IProps> = ({ children }) => {
  const [isModalActive, setModalActive] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{isModalActive, setModalActive}}>
      {children}
    </ModalContext.Provider>
  );
};