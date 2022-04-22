import { useContext } from 'react';
import { Button } from '../../components/Button';
import { ModalVisual, ModalWrapper } from './styles';
import { ModalContext } from '../../context';

interface IProps {
  children: React.ReactNode;
};

export const DeckModal: React.FC<IProps> = ({ children }) => {
const {isModalActive, setModalActive} = useContext(ModalContext);

  return (
    <ModalWrapper
      active={isModalActive}
    >
      <ModalVisual
        active={isModalActive}
      >
        <Button
          handler={() => setModalActive(false)}
        >
          X
        </Button>
        {children}
      </ModalVisual>
    </ModalWrapper>
  );
};