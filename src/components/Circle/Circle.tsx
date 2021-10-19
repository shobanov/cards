import CircleStyles from './Circle.module.scss';

const Circle: React.FC = () => {
  return (
    <div className={CircleStyles.circle__box} onClick={(e) => e.stopPropagation()}>
      <div className={CircleStyles.css}></div>
      <div className={CircleStyles.js}></div>
      <div className={CircleStyles.react}></div>
    </div>
  );
};

export default Circle;
