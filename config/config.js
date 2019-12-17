import routesConfig from './router.config'

/*系统配置 ：https://umijs.org/config/*/
export default {
  treeShaking: true,
  /*路由配置：基于react-router实现*/
  routes: routesConfig,
  /*插件列表*/
  plugins: [
    // react插件 ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true, //引入antd样式组件
        dva: true, //引入dva数据控制组件
        dynamicImport: {webpackChunkName: true}, //按需加载
        title: 'miaowPanel', //项目标题
        dll: false, //关闭dll功能

        routes: { //路由配置
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      }
    ],
  ],
}
