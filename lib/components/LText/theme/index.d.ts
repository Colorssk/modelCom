import { TextComponentProps } from '../../../theme/themeConfig';
declare const mergeTheme: (currentTheme: string, IParamater: {}) => TextComponentProps;
interface themeConfigInterface {
    [key: string]: any;
}
export declare const themeConfig: themeConfigInterface;
export default mergeTheme;
