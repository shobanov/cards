// import { useQuery } from 'react-query';
import { Root } from './Root';
import { Deck, DeckModal } from './deck';
import * as hooks from './hooks';

export const App: React.FC = () => {
  const fetchCardsQ = hooks.useFetchCards();
  console.log(fetchCardsQ);

  return (
    <Root>
      <DeckModal />
      <Deck title="Learned" />
      <Deck title="Common" />
      <Deck title="Unlearned" />
    </Root>
  );
};

// const state = useSelector<AppRootStateType, Array<CardType>>(state => state.decks);

  // const { data, isLoading } = useQuery("topicList", () =>
  //   fetch('http://localhost:5000/topic/list').then(
  //     res => res.json()
  //   )
  // );
            // data?.topics.map((topic: any) => {
            //   return <Card key={topic.id} />
            // })
         

// const cardReact = () => {
//   const deckReact = state.themes.react
//   const itemReact = deckReact[Math.floor(Math.random() * deckReact.length)]
// }

// DeckControlsQuery.ts
// DeckControlsCreateMutation.ts