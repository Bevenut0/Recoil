import './App.css'
import { useRecoilState } from 'recoil'
import { countState } from './atoms/state'

function App() {

  const [count, setCount] = useRecoilState(countState);
  return (
    <>
      <p>Contagem</p>

      <button
        onClick={() => setCount(count + 1)}
      >
        Incrementar {count}
      </button>
    </>
  )
}

export default App
