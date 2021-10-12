import React, { useState } from 'react';
import Card from './components/Card';
import s from './App.module.scss';
import Modal from './components/Modal';
import { fetchRandomCardTC } from './Redux/cards-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from './Redux/store';
import { CardsType } from './Api/cards-api';

const App: React.FC = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const state = useSelector<AppRootStateType, Array<CardsType>>(state => state.decks)

  const dispatch = useDispatch();

  const fetchRandomCard = () => {
    dispatch(fetchRandomCardTC());
  };

  const commonDeckHandler = () => {
    setModalActive(true);
    fetchRandomCard();
  };

  return (
    <div className={s.app}>
      <Card />
      <div onClick={commonDeckHandler}>
        <Card showCircle />
      </div>
      <Card />
      <Modal active={modalActive} setActive={setModalActive}>
        {state.map(home => <div>{home.body}</div>)}
      </Modal>
    </div>
  );
};

export default App;

// const cardReact = () => {
//   const deckReact = state.themes.react
//   const itemReact = deckReact[Math.floor(Math.random() * deckReact.length)]
//   alert(itemReact.description)
// }

// const commonCard = () => {
//   const items = Object.values(state.themes).flat();
//   const randomItem = items[(Math.random() * items.length) | 0];
//   return randomItem.description;
// };