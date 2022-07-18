export default {
    files: ['**/*.mdx'], 
    dest: 'docsite', // 打包 docz 文档到哪个文件夹下
    title: 'component ui',  // 设置文档的标题
    typescript: true, // 支持 typescript 语法
    themesDir: 'theme', 
    menu: ['Introduction', 'BasicComponents'], // 生成文档的左侧菜单分类
    modifyBundlerConfig: bundlerConfig => {
      const rules = [
        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        }
      ];
      bundlerConfig.module.rules.push(...rules);
      return bundlerConfig;
    }
  }