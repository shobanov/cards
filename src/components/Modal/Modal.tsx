import styles from './Modal.module.scss';
import cn from 'classnames';

export type ModalPropsType = {
  active: boolean;
  setActive: (_: boolean) => void;
};

const Modal: React.FC<ModalPropsType> = ({ active, setActive, children }) => {
  return (
    <div
      className={cn(styles.modal, { [styles.active]: active })}
      onClick={() => setActive(false)}
    >
      <div
        className={cn(styles.modal__visual, {[styles.active]: active })}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
