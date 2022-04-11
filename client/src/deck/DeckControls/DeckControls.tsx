import { useContext } from 'react';
import { Checkbox, Button } from '../../components';
import { ModalContext } from '../../context';
import { TopicSelectContainer } from './styles';

export const DeckControls: React.FC = () => {
  const {setModalActive} = useContext(ModalContext);
 
  return (
    <TopicSelectContainer>
      <Checkbox topic="HTML" />
      <Checkbox topic="CSS" />
      <Checkbox topic="JS" />
      <Button
        type="submit"
        handler={() => setModalActive(true)}
      >
        get card
      </Button>
    </TopicSelectContainer>
  );
};