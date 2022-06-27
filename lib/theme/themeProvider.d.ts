import React, { ReactNode } from 'react';
interface contextprops {
    [propName: string]: any;
}
export declare const ThemeContext: React.Context<contextprops>;
interface providerInterface {
    children: ReactNode;
}
declare const ThemeProvider: React.FC<providerInterface>;
export declare const themeTypes: string[];
export declare const setAttribute: (themeTarget: any) => void;
export default ThemeProvider;
