import { DeckControls } from './DeckControls';
import { DeckContainer } from './styles'; 

interface IProps {
  // showSelect?: boolean;
  // commonDeckHandler?: () => void;
};

export const Deck: React.FC = () => {
  return (
    <DeckContainer>
      <DeckControls />
    </DeckContainer>
  );
};