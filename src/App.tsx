import Card from './components/Card'
import s from './App.module.scss'
import state from './mock/State'
import Modal from './components/Modal'
import { useState } from 'react'

function App() {

  const cardReact = () => {
    const deckReact = state.themes.react
    const itemReact = deckReact[Math.floor(Math.random() * deckReact.length)]
    alert(itemReact.description)
  }

  const commonCard = () => {
    const items = Object.values(state.themes).flat()
    const randomItem = items[Math.random() * items.length | 0]
    return randomItem
  }

  const [modalActive, setModalActive] = useState(false)

  return (
    <div className={s.app}>
      <Card />
      <div
        onClick={() => setModalActive(true)}
      >
        <Card showCircle />
      </div>
      <Card />
      <Modal active={modalActive} setActive={setModalActive}>
        <div>{JSON.stringify(commonCard())}</div>
      </Modal>
    </div>
  )
}

export default App