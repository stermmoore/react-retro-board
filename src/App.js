import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import { useState } from "react";
import { ColourThemeProvider } from "./contexts/ColourThemeProvider"


function App() {
  const [ theme, setTheme ] = useState("dark");
  return (
    <ColourThemeProvider theme={theme} setTheme={setTheme}>
      <div className="App">
        <Board></Board>
      </div>
    </ColourThemeProvider>
  );
}

export default App;
