import './index.less';
import './themeStyle/index.less';
import mergeTheme from './theme'
import React, { useContext } from "react";
import { ThemeContext } from '../../theme/themeProvider'
export default function LText(props: any) {
  const {currentTheme} = useContext(ThemeContext)
  const theme = mergeTheme(currentTheme, {});
  return (
    <div className="LText-container">
        {props.children || theme.text}
    </div>
  );
}
