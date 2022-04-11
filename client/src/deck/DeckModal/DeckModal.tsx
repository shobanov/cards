import { useContext } from 'react';
import { Button } from '../../components/Button';
import { ModalVisual, ModalWrapper } from './styles';
import { ModalContext } from '../../context';

export const DeckModal: React.FC = ({ children }) => {
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

    // (e) => e.stopPropagation()