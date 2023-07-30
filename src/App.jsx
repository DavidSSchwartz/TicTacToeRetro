import Customizations from "./Components/Customizations";
import Game from "./Components/Game";
import GameProvider from "./Components/Game/GameProvider";
import CustomizationsProvider from "./Components/Customizations/CustomizationsProvider";
import "./styles.css";

function App() {
  return (
    //Enter name for first or second player
    <GameProvider>
      <CustomizationsProvider>
        <div style={{ display: "flex" }}>
          <Game />
          <Customizations />
        </div>
      </CustomizationsProvider>
    </GameProvider>
  );
}

export default App;
