import Card from './components/Card'
import s from './App.module.scss'
import m from './components/Modal/Modal.module.scss'
import state from './mock/State'
import Modal from './components/Modal'
import { useState } from 'react'

function App() {

const cardOfReact = () => {
  const deckOfReact = state.themes.react
  const itemReact = deckOfReact[Math.floor(Math.random() * deckOfReact.length)]
  alert(itemReact.description)
}

const commonCard = () => {
  const items = Object.values(state.themes).flat()
  const {description} = items[Math.random() * items.length | 0]
  alert(description)
}

const [modalActive, setModalActive] = useState(true)

  return (
    <div className={s.app}>
      <Card />
      <div
        className={m.openModal}
        onClick={() => setModalActive(true)}
      >
          <Card showCircle />
      </div>
      <Card />
      <Modal active={modalActive} setActive={setModalActive} />
    </div>
  )
}

export default App