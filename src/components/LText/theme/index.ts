import {lightTheme} from './light';
import {darkTheme} from './dark';
import { TextComponentProps } from '../../../theme/themeConfig'
const mergeTheme = (currentTheme: string, IParamater: {}) => {
    const theme: TextComponentProps = {...themeConfig[currentTheme], ...IParamater}
    return theme
}
interface themeConfigInterface{
    [key: string]: any
}
export const themeConfig: themeConfigInterface = {
    light: lightTheme,
    dark: darkTheme
}
export default mergeTheme;