import './App.css'
import { Header } from './components/Header'
import { Tiles } from './components/Tiles'
import { WinStatus } from './components/WinStatus'
import { WordInput } from './components/WordInput'
import { Keyboard } from './components/Keyboard'
import { NewGame } from './components/NewGame'
import { ScoreDisplay } from './components/ScoreDisplay'
import { Toast } from './components/Toast'
import { Footer } from './components/Footer'
import ReactConfetti from 'react-confetti'
import { useHasWon } from './store/useCurrentWordStore'
import { useToastStore } from './store/useToastStore'

function App() {
  const { hasWon } = useHasWon();
  const { toast, hideToast } = useToastStore();

  return (
    <>
      <div className='flex flex-col h-full items-center justify-center gap-4 py-5'>
       { hasWon && <ReactConfetti></ReactConfetti>}
        <Header />
        <ScoreDisplay />
        <WinStatus />
        <Tiles />
        <WordInput />
        <Keyboard />
        <NewGame />
      </div>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onClose={hideToast}
        />
      )}
      <Footer />
    </>
  )
}

export default App
