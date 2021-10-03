import CircleTopik from '../circle-topik/CircleTopik'
import s from './Card.module.scss'


function Card({showCircle}: any) {
  return (
    <div className={s.mainBlock}>
      {showCircle ? <CircleTopik /> : null}
      {showCircle ? <CircleTopik /> : null}
      {showCircle ? <CircleTopik /> : null}
    </div>
  )
}

export default Card