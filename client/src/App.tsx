// import { useQuery } from 'react-query';
import { Root } from './Root';
import { Deck, DeckModal } from './deck';

export const App: React.FC = () => {
  return (
    <Root>
      <DeckModal />
      <Deck />
      <Deck />
      <Deck />
    </Root>
  );
};


// const state = useSelector<AppRootStateType, Array<CardType>>(state => state.decks);
  // const { data, isLoading } = useQuery("topicList", () =>
  //   fetch('http://localhost:5000/topic/list').then(
  //     res => res.json()
  //   )
  // );

  // mutation 

  //const commonDeckHandler = () => {
  //      setModalActive(true);
        // fetchRandomCard();
  //    };

            // data?.topics.map((topic: any) => {
            //   return <Card key={topic.id} />
            // })
         

// const cardReact = () => {
//   const deckReact = state.themes.react
//   const itemReact = deckReact[Math.floor(Math.random() * deckReact.length)]
// }

// const dispatch = useDispatch();

//   const fetchRandomCard = () => {
//     dispatch(fetchRandomCardTC());
//   };

//   const commonDeckHandler = () => {
//     setModalActive(true);
//     fetchRandomCard();
//   };

// {state.map(item =>
//   <div className={modalStyles.container__content}>
//     <div className={modalStyles.title}>{item.title}</div>
//     <div className={modalStyles.answer}>{item.description}</div>
//   </div>
// )}