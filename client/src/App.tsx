import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

import { Modal } from './decs';
import { Deck } from './decs';
import { AppRootStateType } from './Redux/store';
import { CardType } from './api/api';
import appStyles from './App.module.scss';
import modalStyles from './decs/Modal/Modal.module.scss';
import deckStyles from './decs/Deck.module.scss';

const App: React.FC = () => {
  const state = useSelector<AppRootStateType, Array<CardType>>(state => state.decks);
  const [modalActive, setModalActive] = useState<boolean>(false);
  const { data, isLoading } = useQuery("topicList", () =>
    fetch('http://localhost:5000/topic/list').then(
      res => res.json()
    )
  );

  // mutation 

  return (
    <div className={appStyles.app}>
      <div className={appStyles.wrapper}>
        <div className={deckStyles.decks__container}>
          <Deck />
          <Deck
            // showSelect
          />
          <Modal
            active={modalActive}
            setActive={setModalActive}>
            <button>X</button>
            <button>V</button>
            {state.map(item =>
              <div className={modalStyles.container__content}>
                <div className={modalStyles.title}>{item.title}</div>
                <div className={modalStyles.answer}>{item.description}</div>
              </div>
            )}
          </Modal>
          <Deck />
        </div>
      </div>
    </div>
  );
};

export default App;





            // data?.topics.map((topic: any) => {
            //   return <Card key={topic.id} />
            // })
         

// const cardReact = () => {
//   const deckReact = state.themes.react
//   const itemReact = deckReact[Math.floor(Math.random() * deckReact.length)]
//   alert(itemReact.description)
// }

// const dispatch = useDispatch();

//   const fetchRandomCard = () => {
//     dispatch(fetchRandomCardTC());
//   };

//   const commonDeckHandler = () => {
//     setModalActive(true);
//     fetchRandomCard();
//   };