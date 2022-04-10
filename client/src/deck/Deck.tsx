import { DeckControls } from './DeckControls';
import { DeckContainer } from './styles';

export const Deck: React.FC = () => {
  return (
    <DeckContainer>
      <DeckControls />
    </DeckContainer>
  );
};