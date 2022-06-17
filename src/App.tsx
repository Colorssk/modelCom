import { LText } from "./components";
import "./App.css";
import React, { useContext } from "react";
import { ThemeContext } from './theme/themeProvider'

function App() {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
  const changeTheme = () => {
    // temporary
    if(currentTheme === 'light'){
      setCurrentTheme('dark')
    } else {
      setCurrentTheme('light')
    }
  }
  return (
    <div className="App">
      <div onClick={changeTheme}>click</div>
      <LText></LText>
    </div>
  );
}

export default App;
