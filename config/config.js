import routesConfig from './router.config'

/*系统配置 ：https://umijs.org/config/*/
export default {
  treeShaking: true,
  /*配置浏览器最低版本*/
  targets: {
    ie: 10,
  },
  /*开启 hash 文件后缀*/
  hash: true,
  /*路由配置：基于react-router实现*/
  routes: routesConfig,
  /*插件列表*/
  plugins: [
    // react插件 ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        //引入antd样式组件
        antd: true,
        // 引入dva数据控制组件
        dva: {
          immer: true
        },
        //按需加载
        dynamicImport: {webpackChunkName: true},
        //项目标题
        title: 'miaow面板',
        //关闭dll功能
        dll: false,
        //路由配置
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      }
    ]
  ],
}
