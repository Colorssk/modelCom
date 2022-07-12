import styleInject from '../../node_modules/style-inject/dist/style-inject.es.js';
import React, { ReactNode } from 'react';

var css_248z$2 = ":root{--font-size-xs:10px;--font-size-sm:12px;--font-size-md:14px;--font-size-lg:16px;--color-primary:#000;--color-primary-disabled:#211c1c;--color-background:#fff;--color-background-disabled:#9f8484;--color-text-primary:#ff0;--color-text-primary-disabled:#b5b560}.LText-container{background:#fff;background:var(--color-background);color:#ff0;color:var(--color-text-primary);font-size:10px;font-size:var(--font-size-xs)}";
styleInject(css_248z$2);

var css_248z$1 = "[data-theme=dark]{--font-size-xs:10px;--color-text-primary:#fff;--color-background:#000}[data-theme=light]{--font-size-xs:10px;--color-text-primary:#000;--color-background:#fff}";
styleInject(css_248z$1);

declare function LText(props: any): JSX.Element;

var css_248z = "[data-theme=dark] .u-button-wrapper button{min-width:60px}[data-theme=dark] .u-button-wrapper-basic .ant-btn{background-color:#136c5e;border-color:#136c5e;color:#fff}[data-theme=dark] .u-button-wrapper-basic .ant-btn:hover{background-color:#308376;border-color:#308376}[data-theme=dark] .u-button-wrapper-basic .ant-btn:active{background-color:#193d37;border-color:#193d37}[data-theme=dark] .u-button-wrapper-gray .ant-btn{background-color:#4a4d4c;border-color:#4a4d4c;color:#fff}[data-theme=dark] .u-button-wrapper-gray .ant-btn:hover{background-color:#8f9598;border-color:#8f9598}[data-theme=dark] .u-button-wrapper-gray .ant-btn:active{background-color:#303231;border-color:#303231}[data-theme=dark] .u-button-wrapper-blue .ant-btn{background-color:#24a4b4;border-color:#24a4b4;color:#000}[data-theme=dark] .u-button-wrapper-blue .ant-btn:hover{background-color:#1bc7dd;border-color:#1bc7dd}[data-theme=dark] .u-button-wrapper-blue .ant-btn:active{background-color:#157a87;border-color:#157a87}[data-theme=light]{--font-size-xs:10px;--color-text-primary:#000;--color-background:#fff}";
styleInject(css_248z);

declare const LButton: ({ className, type, disabled, tooltip, width, ...restProps }: any) => JSX.Element;

interface contextprops {
    [propName: string]: any;
}
declare const ThemeContext: React.Context<contextprops>;
interface providerInterface {
    children: ReactNode;
}
declare const ThemeProvider: React.FC<providerInterface>;
declare const themeTypes: string[];
declare const setAttribute: (themeTarget: any) => void;
declare const setDoczAttribute: (themeTarget: any) => void;
declare const requireAll: (requireContext: any) => any;

export { LButton, LText, ThemeContext, ThemeProvider, requireAll, setAttribute, setDoczAttribute, themeTypes };
