import React, { createContext, ReactNode, useState, useEffect } from 'react';
import { compontListInterface, CommonComponentProps } from './themeConfig';
interface contextprops{
  [propName: string]: any
}
export const ThemeContext = createContext<contextprops>({});

interface providerInterface {
  children: ReactNode;
}
const ThemeProvider: React.FC<providerInterface> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<string>('dark');
  const [currentThemesStyle, setCurrentThemesStyle] = useState<CommonComponentProps>();
  const [configAllStyle, setConfigAllStyle] = useState<compontListInterface>();
  const handleTheme = (theme: string, styleConfig: CommonComponentProps) => {
    setCurrentTheme(theme);
    setCurrentThemesStyle(styleConfig);
  }
  useEffect(()=>{
    setAttribute('dark');
  }, [])
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

export const themeTypes = [
  'light',
  'dark'
]


export const setAttribute = function (themeTarget) {
  const themeCache = themeTarget || 'dark';
  const root = document.getElementById('root');
  if (root && themeCache) {
    console.log('change', themeCache)
    root.setAttribute('data-theme', themeCache)
  } else {
    console.log('default')
    //default theme
    root.setAttribute('data-theme', 'dark')
  }
}
export const setDoczAttribute = function (themeTarget) {
  const themeCache = themeTarget || 'dark';
  const doczRoot = document.getElementById('___gatsby');
  // docz document
  if (doczRoot && themeCache) {
    doczRoot.setAttribute('data-theme', themeCache)
  } else {
      //default theme
    doczRoot.setAttribute('data-theme', 'dark')
  }
}
export const requireAll = requireContext => requireContext.keys().map(requireContext)

export default ThemeProvider;