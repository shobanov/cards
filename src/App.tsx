import React, { useState } from 'react';
import Card from './components/Decks';
import appStyles from './App.module.scss';
import modalStyles from './components/Modal/Modal.module.scss';
import deckStyles from './components/Decks/Deck.module.scss';
import Modal from './components/Modal';
import { fetchRandomCardTC } from './Redux/cards-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from './Redux/store';
import { CardsType } from './Api/cards-api';

const App: React.FC = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const state = useSelector<AppRootStateType, Array<CardsType>>(state => state.decks);

  const dispatch = useDispatch();

  const fetchRandomCard = () => {
    dispatch(fetchRandomCardTC());
  };

  const sendToLearnedDeck = () => {

  };

  const sendToUnlearnedDeck = () => {

  };

  const commonDeckHandler = () => {
    setModalActive(true);
    fetchRandomCard();
  };

  return (
    <div className={appStyles.app}>
      <div className={appStyles.wrapper}>
        <div className={deckStyles.decks__container}>
          <Card />
          <Card
            showCircle
            commonDeckHandler={commonDeckHandler}
          />
          <Modal
            active={modalActive}
            setActive={setModalActive}>
            <button>X</button>
            <button>V</button>
            {state.map(item =>
              <div className={modalStyles.container__content}>
                <div className={modalStyles.title}>{item.title}</div>
                <div className={modalStyles.answer}>{item.answer}</div>
              </div>
            )}
          </Modal>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default App;

// const cardReact = () => {
//   const deckReact = state.themes.react
//   const itemReact = deckReact[Math.floor(Math.random() * deckReact.length)]
//   alert(itemReact.description)
// }