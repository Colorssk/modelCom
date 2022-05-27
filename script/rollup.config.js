import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import postcss from "rollup-plugin-postcss";
// 可以处理组件中import图片的方式，将图片转换成base64格式，但会增加打包体积，适用于小图标
import image from "@rollup/plugin-image";
import { terser } from "rollup-plugin-terser";
// PostCSS plugins
import simplevars from "postcss-simple-vars";
import nested from "postcss-nested";
import postcssPresetEnv from "postcss-preset-env";
import cssnano from "cssnano";
// 支持typescript
import typescript from "rollup-plugin-typescript2";
// 用于打包生成*.d.ts文件
import dts from "rollup-plugin-dts";
// 引入package
import pkg from "../package.json";

const env = process.env.NODE_ENV;

const config = [
  {
    // 入口文件我这里在components下统一导出所有自定义的组件
    input: "src/components/index.tsx",
    // 输出文件夹，可以是个数组输出不同格式（umd,cjs,es...）通过env是否是生产环境打包来决定文件命名是否是.min
    output: [
      {
        file: `dist/index.umd${env === "production" ? ".min" : ""}.js`,
        format: "umd",
        name: "wcpnts",
      },
      {
        file: `dist/index.esm${env === "production" ? ".min" : ""}.js`,
        format: "esm",
      },
    ],
    // 注入全局变量
    globals: {
      react: "React", // external
    },
    onwarn: function (warning) {
      if (warning.code === "THIS_IS_UNDEFINED") {
        return;
      }
    },
    // 将模块视为外部模块，不会打包在库中
    external: ["react", "react-dom"],
    // 插件
    plugins: [
      typescript(),
      image(),
      postcss({
        plugins: [
          simplevars(),
          nested(),
          // cssnext({ warnForDuplicates: false, }),
          postcssPresetEnv(),
          cssnano(),
        ],
        extensions: [".css", ".less"],
      }),
      resolve(),
      // babel处理不包含node_modules文件的所有js
      babel({
        exclude: "node_modules/**",
        runtimeHelpers: true,
        plugins: ["@babel/plugin-external-helpers"],
        extensions: [".js", ".ts", "tsx"],
      }),
      // 将 CommonJS 转换成 ES2015 模块
      // 这里有些引入使用某个库的api但报未导出该api通过namedExports来手动导出
      commonjs({
        namedExports: {
          // Without this mapping the transformed import import {jsx as _jsx} from 'react/jsx-runtime' will fail.
          "react/jsx-runtime": ["jsx", "jsxs"],
          "node_modules/react-is/index.js": ["isFragment"],
          "node_modules/react/index.js": [
            "Fragment",
            "cloneElement",
            "isValidElement",
            "Children",
            "createContext",
            "Component",
            "useRef",
            "useImperativeHandle",
            "forwardRef",
            "useState",
            "useEffect",
            "useMemo",
          ],
          "node_modules/react-dom/index.js": [
            "render",
            "unmountComponentAtNode",
            "findDOMNode",
          ],
          "node_modules/gojs/release/go.js": [
            "Diagram",
            "GraphLinksModel",
            "Overview",
            "Spot",
          ],
        },
      }),
      replace({
        "process.env.NODE_ENV": JSON.stringify(env || "development"),
      }),
      env === "production" && terser(),
    ],
  },
  {
    // 入口文件我这里在components下统一导出所有自定义的组件
    input: "src/components/index.tsx",
    // 输出文件夹，可以是个数组输出不同格式（umd,cjs,es...）通过env是否是生产环境打包来决定文件命名是否是.min
    output: [
      {
        file: `${pkg.types}`,
        format: "esm",
      },
    ],
    plugins: [
      dts(),
      postcss({
        plugins: [
          simplevars(),
          nested(),
          // cssnext({ warnForDuplicates: false, }),
          postcssPresetEnv(),
          cssnano(),
        ],
        // 处理.css和.less文件
        extensions: [".css", ".less"],
      }),
    ],
  },
];

export default config;
