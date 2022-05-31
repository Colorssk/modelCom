import './index.less';
import mergeTheme from './theme'
import { useContext } from "react";
import { ThemeContext } from '../../theme/themeProvider'
export default function LText(props: any) {
  const {currentTheme} = useContext(ThemeContext)
  const theme = mergeTheme(currentTheme, {});
  return (
    <div className="LText-container" style={{color: theme.color, background: theme.backgroundColor}}>
        {props.children || theme.text}
    </div>
  );
}
