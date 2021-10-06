import s from './Modal.module.scss'

export type ModalPropsType = {
  active: boolean
  setActive: any
}


const Modal: React.FC<ModalPropsType> = ({active, setActive, children}) => {

  return (
    <div className={active ? s.modal__active : s.modal} onClick={() => setActive(false)}>
      <div className={active ? s.modal__content__active : s.modal} onClick={e => e.stopPropagation()}>
        {children}      
      </div>
    </div>
  )
}

export default Modal