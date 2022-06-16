// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-components-l-button-index-mdx": () => import("./../../../../src/components/LButton/index.mdx" /* webpackChunkName: "component---src-components-l-button-index-mdx" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

