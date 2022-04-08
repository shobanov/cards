import { useState } from 'react';
import { Button } from '../../components/Button';
import { ModalVisual, ModalWrapper } from './styles';

interface IProps {
  // active: boolean;
  // setActive: (_: boolean) => void;
};

export const DeckModal: React.FC<IProps> = ({ children }) => {
  const [modalActive, setModalActive] = useState<boolean>(false);

  return (
    <ModalWrapper
      active={modalActive}
      // onClick={() => setModalActive(false)}
    >
      <ModalVisual
        active={modalActive}
        onClick={(e) => e.stopPropagation()}
      >
        <Button onClick={() => setModalActive(false)}>
          X
        </Button>
        {children}
      </ModalVisual>
    </ModalWrapper>
  );
};

{/* <div
      className={cn(styles.modal, { [styles.active]: active })}
      onClick={() => setActive(false)}
    >
      <div
        className={cn(styles.modal__visual, {[styles.active]: active })}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div> */}