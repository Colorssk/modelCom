/* eslint-disable @typescript-eslint/no-unused-vars */
import "./index.less";
import React, { useContext, useEffect, useState } from "react";
import { LText, LButton } from "../components";
import { ThemeContext, setAttribute } from '../theme/themeProvider';
import images from '../components/assets';

//img
const BackPng = require('./assets/back.png');
const NextPng = require('./assets/next.png');
const ThemePng = require('./assets/theme.png');
interface Func {
  ():  React.ReactNode
}
interface componentItemInterface {
  key: string;
  component: Func;
}
function Pannel() {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
  const [ activeComponent, setActiveComponent ] = useState('LText')
  const [ themeList ] = useState(['dark', 'light'])
  const [ list, setList ] = useState<componentItemInterface[]>([]);
  const changeTheme = (theme) => {
    setCurrentTheme(theme)
    setAttribute(theme)
  }
  const onChangeItem = (key) => {
    setActiveComponent(key)
  }
  useEffect(()=>{
    setList([
      {
        key: 'LText',
        component: () => {return (<LText>{currentTheme && <img src={images[currentTheme]?.demo.img} alt={images[currentTheme]?.demo.path}></img>}xxxxxxxxxxxxxxxxx{currentTheme}</LText>)}
      }, {
        key: 'LButton',
        component: () => {return (<LButton>按钮</LButton>)}
      }
    ])
  },[currentTheme])
  const listContentRender = (item: componentItemInterface) => {
    const itemClassName = `list-item-content ${activeComponent === item.key ? 'list-item-content_active' : ''}`
    return <div key={item.key} className={itemClassName} onClick={()=>{onChangeItem(item.key)}}>{item.key}</div>
  }
  const renderCurrentComponent = () => {
    const currentComponent = list.filter(el=>el.key ===  activeComponent)
    return list.length && (
      <div>
        {currentComponent[0].component()}
      </div>
    )
  }
  const onChangeByOneStep = (type) => {
    const index = list.findIndex(e=>e.key === activeComponent);
    if(index === list.length - 1){
      setActiveComponent(type==='pre' ? list[index - 1]?.key : list[0]?.key)
      return 
    }
    if(index === 0){
      setActiveComponent(type==='pre' ? list[list.length - 1]?.key : list[index + 1]?.key)
      return
    }
    setActiveComponent(type==='pre' ? list[index - 1]?.key : list[index + 1]?.key)
  }
  const renderThemeList = (theme) => {
    const themeTitleClassname = `them-list-title ${ theme === currentTheme ? 'theme-title_active' : ''}`
    return (
      <div key={theme} className={themeTitleClassname} onClick={()=>{changeTheme(theme)}}>{theme}</div>
    )
  }
  return (
    <div className="pannel-container">
        <div className="pannel-components-list-wraper">
          {
            list.length && list.map(el=>{
              return listContentRender(el) 
            })
          }
        </div>
        <div className="pannel-components-pannel-wraper">
          <div className="pannel-components-pannel-content">
            {renderCurrentComponent()}
            {
              list.length > 1 && (
                <div className="pannel-components-arrow">
                  <img src={BackPng} alt="back-icon"  className="back-png" onClick={()=>{onChangeByOneStep('pre')}}/>
                  <img src={NextPng} alt="next-icon" className="next-png" onClick={()=>{onChangeByOneStep('next')}}/>
                </div>
              )
            }
            <img src={ThemePng} alt="theme-png" className="theme-png"/>
            <div className="theme-list-content">
              {
                themeList.length && themeList.map(el=>{
                  return renderThemeList(el);
                })
              }
            </div>
          </div>
         
        </div>
    </div>
  );
}

export default Pannel;
