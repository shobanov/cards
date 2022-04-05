import { ToggleSwitch } from '../../components';
import { TopicSelectContainer } from './styles';

export const DeckControls: React.FC = () => {
  return (
    <TopicSelectContainer>
      <ToggleSwitch topic="HTML" />
      <ToggleSwitch topic="CSS" />
      <ToggleSwitch topic="JS" />
    </TopicSelectContainer>
  );
};