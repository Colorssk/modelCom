import { LText } from "./components";
import "./App.css";
import React, { useContext } from "react";
import { ThemeContext, setAttribute } from './theme/themeProvider'
import images from './components/assets'
function App() {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
  const changeTheme = () => {
    // temporary
    if(currentTheme === 'light'){
      setCurrentTheme('dark')
      setAttribute('dark')
    } else {
      setCurrentTheme('light')
      setAttribute('light')
    }
  }
  return (
    <div className="App">
      <div onClick={changeTheme}>click</div>
      <LText>{currentTheme && <img src={images[currentTheme][0].img} alt={images[currentTheme][0].path}></img>}xxxxxxxxxxxxxxxxx</LText>
    </div>
  );
}

export default App;
