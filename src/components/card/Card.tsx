import Circle from '../Circle'
import s from './Card.module.scss'

interface IProps {
  showCircle?: boolean
}

const Card: React.FC<IProps> = ({showCircle}) => {
  
  return (
    <div className={s.mainBlock}>
      {showCircle && <Circle />}
      {showCircle && <Circle />}
      {showCircle && <Circle />}
    </div>
  )
}

export default Card