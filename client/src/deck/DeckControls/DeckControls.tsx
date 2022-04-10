import { useContext } from 'react';
import { ToggleSwitch, Button } from '../../components';
import { ModalContext } from '../../context';
import { TopicSelectContainer } from './styles';

export const DeckControls: React.FC = () => {

  const {setModalActive} = useContext(ModalContext);

  return (
    <TopicSelectContainer>
      <ToggleSwitch topic="HTML" />
      <ToggleSwitch topic="CSS" />
      <ToggleSwitch topic="JS" />
      <Button type="submit" onClick={() => setModalActive(true)}>
        get card
      </Button>
    </TopicSelectContainer>
  );
};