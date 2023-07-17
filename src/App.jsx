import Game from './Components/Game';
import GameProvider from './Components/Game/GameProvider';
import './styles.css';

function App() {

  return (
    <GameProvider>
      <Game />
    </GameProvider>
  )
}

export default App
