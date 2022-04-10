import React from 'react';

interface ModalContextData {
  isModalActive: boolean;
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>
};

export const ModalContext = React.createContext<ModalContextData | any>(false);