import { ButtonStyled } from './styles';

interface IProps  {
  type?: 'submit';
  handler?: () => void;
  disabled?: boolean;  
  children: React.ReactNode;
};

export const Button: React.FC<IProps> = ({ type, handler, children, disabled }) => {
  return (
    <ButtonStyled
      type={type}
      disabled={!disabled}
      onClick={handler}
    >
      {children}
    </ButtonStyled>
  );
};