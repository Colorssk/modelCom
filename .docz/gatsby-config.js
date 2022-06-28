const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: '组件库左上角标题',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'theme',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: ['快速上手', '业务组件'],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'C:\\unite-project\\获取template模板\\modelCom\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: ['**/*.mdx'],
        public: '/public',
        dest: 'docsite',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: '组件库左上角标题',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'C:\\unite-project\\获取template模板\\modelCom',
          templates:
            'C:\\unite-project\\获取template模板\\modelCom\\node_modules\\docz-core\\dist\\templates',
          docz: 'C:\\unite-project\\获取template模板\\modelCom\\.docz',
          cache: 'C:\\unite-project\\获取template模板\\modelCom\\.docz\\.cache',
          app: 'C:\\unite-project\\获取template模板\\modelCom\\.docz\\app',
          appPackageJson:
            'C:\\unite-project\\获取template模板\\modelCom\\package.json',
          appTsConfig:
            'C:\\unite-project\\获取template模板\\modelCom\\tsconfig.json',
          gatsbyConfig:
            'C:\\unite-project\\获取template模板\\modelCom\\gatsby-config.js',
          gatsbyBrowser:
            'C:\\unite-project\\获取template模板\\modelCom\\gatsby-browser.js',
          gatsbyNode:
            'C:\\unite-project\\获取template模板\\modelCom\\gatsby-node.js',
          gatsbySSR:
            'C:\\unite-project\\获取template模板\\modelCom\\gatsby-ssr.js',
          importsJs:
            'C:\\unite-project\\获取template模板\\modelCom\\.docz\\app\\imports.js',
          rootJs:
            'C:\\unite-project\\获取template模板\\modelCom\\.docz\\app\\root.jsx',
          indexJs:
            'C:\\unite-project\\获取template模板\\modelCom\\.docz\\app\\index.jsx',
          indexHtml:
            'C:\\unite-project\\获取template模板\\modelCom\\.docz\\app\\index.html',
          db:
            'C:\\unite-project\\获取template模板\\modelCom\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
