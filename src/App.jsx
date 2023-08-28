import GameProvider from "./Components/Game/GameProvider";
import CustomizationsProvider from "./Components/Customizations/CustomizationsProvider";
import "./styles.css";
import TicTacToe from "./Components/TicTacToe";

function App() {

  return (
    //Enter name for first or second player
    <GameProvider>
      <CustomizationsProvider>
        <TicTacToe />
      </CustomizationsProvider>
    </GameProvider>
  );
}

export default App;
