import { ButtonStyled } from './styles';

interface IProps  {
  type?: 'submit';
  handler?: () => void;
};

export const Button: React.FC<IProps> = ({ type, handler, children }) => {
  return (
    <ButtonStyled
      type={type}
      onClick={handler}
    >
      {children}
    </ButtonStyled>
  );
};