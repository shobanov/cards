import { BadgeStyled } from './styles';

interface IProps  {
  badgeContent: number;
};

export const Badge: React.FC<IProps> = ({ badgeContent }) => {
  return (
    <BadgeStyled>
      { badgeContent }
    </BadgeStyled>
  );
};