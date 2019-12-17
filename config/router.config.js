/**
 * 路由配置文件
 * 匹配规则：按照数组顺序并深度遍历匹配
 * */
export default [
  /*用户路由（登录 | 注册）*/
  {
    path: '/user', //请求路径
    component: './User/UserLogin', //组件加载路径，相对于src/pages目录
    routes: [ //子组件
      {//登录页
        path: '/user/login',
        component: './User/UserLogin'
      },
      {//注册页
        path: '/user/register',
        component: './User/UserRegister',
      }
    ]
  },
  // /*应用路由*/
  // {
  //   path: '/', //请求路径
  //   component: '../layouts/BasicLayout', //组件加载路径，相对于src/pages目录
  //   Routes:['src/authority/Authority'], // 权限路由，umi会通过Routes来渲染此路由
  //   routes: [ //子组件
  //     { //流程分页
  //       path: '/flow',
  //       component: './Flow/FlowPaging'
  //     },
  //     { //404页面
  //       path: '/404',
  //       component: './Error/Error404'
  //     },
  //     { //403页面
  //       path: '/403',
  //       component: './Error/Error403'
  //     }
  //   ]
  // }
]
