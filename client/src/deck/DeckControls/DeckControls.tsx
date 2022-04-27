import { useContext } from 'react';

import { Checkbox, Button } from '../../components';
import { ModalContext } from '../../context';
import { DeckControlsContainer } from './styles';

interface IProps {
  isSelected: boolean;
};

export const DeckControls: React.FC<IProps> = ({ isSelected }) => {
  const {setModalActive} = useContext(ModalContext);
 
  return (
    <DeckControlsContainer>
      <Checkbox topic="HTML" disabled={isSelected} />
      <Checkbox topic="CSS" disabled={isSelected} />
      <Checkbox topic="JS" disabled={isSelected} />
      <Button
        type="submit"
        disabled={isSelected}
        handler={() => setModalActive(true)}
      >
        get card
      </Button>
    </DeckControlsContainer>
  );
};