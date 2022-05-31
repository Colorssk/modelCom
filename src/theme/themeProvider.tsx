import React, { createContext, ReactNode, useState } from 'react';
import { compontListInterface, CommonComponentProps } from './themeConfig';
interface contextprops{
  [propName: string]: any
}
export const ThemeContext = createContext<contextprops>({});

interface providerInterface {
  children: ReactNode;
}
const ThemeProvider: React.FC<providerInterface> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<string>('');
  const [currentThemesStyle, setCurrentThemesStyle] = useState<CommonComponentProps>();
  const [configAllStyle, setConfigAllStyle] = useState<compontListInterface>();
  const handleTheme = (theme: string, styleConfig: CommonComponentProps) => {
    setCurrentTheme(theme);
    setCurrentThemesStyle(styleConfig);
  }
  return (
    <ThemeContext.Provider value={{
      currentTheme,
      setCurrentTheme,
      handleTheme,
      currentThemesStyle,
      setConfigAllStyle,
      configAllStyle
    }}>{children}</ThemeContext.Provider>
  )
}

export default ThemeProvider;