import styleInject from '../../node_modules/style-inject/dist/style-inject.es.js';
import React, { ReactNode } from 'react';

var css_248z$2 = ":root{--font-size-xs:10px;--font-size-sm:12px;--font-size-md:14px;--font-size-lg:16px;--color-primary:#000;--color-primary-disabled:#211c1c;--color-background:#fff;--color-background-disabled:#9f8484;--color-text-primary:#ff0;--color-text-primary-disabled:#b5b560}.LText-container{background:#fff;background:var(--color-background);color:#ff0;color:var(--color-text-primary);font-size:10px;font-size:var(--font-size-xs)}";
styleInject(css_248z$2);

var css_248z$1 = "[data-theme=dark]{--font-size-xs:10px;--color-text-primary:#fff;--color-background:#000}[data-theme=light]{--font-size-xs:10px;--color-text-primary:#000;--color-background:#fff}";
styleInject(css_248z$1);

declare function LText(props: any): JSX.Element;

var css_248z = ".LButton-container{background-color:#000;color:#9acd32}";
styleInject(css_248z);

declare function LButton(props: any): JSX.Element;

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
declare const requireAll: (requireContext: any) => any;

export { LButton, LText, ThemeContext, ThemeProvider, requireAll, setAttribute, themeTypes };
