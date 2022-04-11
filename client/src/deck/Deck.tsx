import { DeckControls } from './DeckControls';
import { DeckContainer, DeckTitle } from './styles';

interface Iprops {
  title: string;
};

export const Deck: React.FC<Iprops> = ({ title }) => {
  return (
    <DeckContainer>
      <DeckTitle>{title}</DeckTitle>
      <DeckControls />
    </DeckContainer>
  );
};