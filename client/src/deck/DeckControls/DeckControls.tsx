import { ToggleSwitch, Button } from '../../components';
import { TopicSelectContainer } from './styles';

export const DeckControls: React.FC = () => {
  return (
    <TopicSelectContainer>
      <ToggleSwitch topic="HTML" />
      <ToggleSwitch topic="CSS" />
      <ToggleSwitch topic="JS" />
      <Button type="submit">
        get card
      </Button>
    </TopicSelectContainer>
  );
};