import { useContext } from 'react';
import { Button } from '../../components/Button';
import { ModalVisual, ModalWrapper } from './styles';
import { ModalContext } from '../../context';

export const DeckModal: React.FC = () => {
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
      </ModalVisual>
    </ModalWrapper>
  );
};