import { Root } from './Root';
import { Deck } from './deck';
import * as hooks from './hooks';

export const App: React.FC = () => {
  const fetchCardsQ = hooks.useFetchCards();
  console.log(fetchCardsQ);

  return (
    <Root>
      <Deck title="Learned" />
      <Deck title="Common" />
      <Deck title="Unlearned" />
    </Root>
  );
};

 
          
// const cardReact = () => {
//   const deckReact = state.themes.react
//   const itemReact = deckReact[Math.floor(Math.random() * deckReact.length)]
// }

// DeckControlsQuery.ts
// DeckControlsCreateMutation.ts