import { ButtonStyled } from './styles';

interface IProps  {
  type?: 'submit';
  onClick?: any;
};

export const Button: React.FC<IProps> = ({ type, children }) => {
  return (
    <ButtonStyled type={type}>{children}</ButtonStyled>
  );
};