import { ButtonStyled } from './styles';

interface IProps  {
  type?: 'submit';
  handler?: () => void;
  children: React.ReactNode;
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