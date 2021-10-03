import Card from '../components/card/Card'
import s from './App.module.scss'

function App() {
  return (
    <div className={s.app}>
      <Card />
      <Card showCircle={true} />
      <Card />
    </div>
  )
}

export default App