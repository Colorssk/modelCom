import styleInject from '../../node_modules/style-inject/dist/style-inject.es.js';

var css_248z$1 = ".LText-container{background:var(--color-background);color:var(--color-text-primary);font-size:var(--font-size-xs)}";
styleInject(css_248z$1);

declare function LText(props: any): JSX.Element;

var css_248z = ".LButton-container{background-color:#000;color:#9acd32}";
styleInject(css_248z);

declare function LButton(props: any): JSX.Element;

export { LButton, LText };
