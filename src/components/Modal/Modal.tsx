import s from './Modal.module.scss'

export type ModalPropsType = {
  active: boolean
  setActive: any
}

const Modal: React.FC<ModalPropsType> = ({active, setActive}) => {
  return (
    <div className={active ? s.active : s.modal} onClick={() => setActive(false)}>
      <div className={s.modalContent} onClick={e => e.stopPropagation}>
              
      </div>
    </div>
  )
}

export default Modal