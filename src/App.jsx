import './App.css'
import { Header } from './components/Header'
import { Tiles } from './components/Tiles'
import { WinStatus } from './components/WinStatus'
import { WordInput } from './components/WordInput'
import { Keyboard } from './components/Keyboard'
import { NewGame } from './components/NewGame'
import ReactConfetti from 'react-confetti'
import { useHasWon } from './store/useCurrentWordStore'

function App() {
  const { hasWon } = useHasWon();

  return (
    <>
      <div className='flex flex-col h-screen items-center justify-center gap-4'>
       { hasWon && <ReactConfetti></ReactConfetti>}
        <Header />
        <WinStatus />
        <Tiles />
        <WordInput />
        <Keyboard />
        <NewGame />
      </div>
    </>
  )
}

export default App
