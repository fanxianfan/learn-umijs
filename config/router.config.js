/**
 * 路由配置文件
 * 匹配规则：按照数组顺序并深度遍历匹配
 * */
export default [
  /*404页面*/
  {
    path: '/404',
    component: './Error/Error404'
  },
  /*403页面*/
  {
    path: '/403',
    component: './Error/Error403'
  },
  /*500页面*/
  {
    path: '/500',
    component: './Error/Error500'
  },
  /*应用路由*/
  {
    path: '/', //请求路径
    component: '../layouts/BasicLayout', //组件加载路径，相对于src/pages目录
    Routes: ['src/authorities/Authority'], // 权限路由，umi会通过Routes来渲染此路由
    routes: [ //子组件
      {
        /*业务管理*/
        path: '/business',
        name: '业务管理',
        icon: 'profile',
        routes: [
          { //流程分页
            path: '/business/flow',
            name: '业务流程管理',
            icon: 'pull-request',
            component: './Flow/FlowPaging',
          },
          { //流程编辑
            path: '/business/flow/edit',
            name: '流程修改',
            component: './Flow/FlowEdit',
            hidden: true
          },
          { //活动分页
            path: '/business/activity',
            name: '业务活动管理',
            icon: 'inbox',
            component: './Activity/ActivityPaging',
          },
          { //活动编辑
            path: '/business/activity/edit',
            name: '活动编辑',
            component: './Activity/ActivityEdit',
            hidden: true
          }
        ]
      },
      /*工具箱*/
      {
        path: '/toolkit',
        name: '工具箱',
        icon: 'appstore',
        routes: [
          //JS语句实验
          {
            path: '/toolkit/jsTest',
            name: 'JS语句实验',
            icon: 'experiment',
            component: './ToolkitJs/JsIndex'
          },
          //动画效果
          {
            path: '/toolkit/animation',
            name: '动画效果',
            icon: 'smile',
            component: './ToolkitAnimation/AnimationIndex',
          },
          //生活日历
          {
            path: '/toolkit/antCalendar',
            name: '生活日历',
            icon: 'calendar',
            component: './ToolkitCalendar/AntCalendarIndex',
          },
          //事件日历
          {
            path: '/toolkit/fullCalendar',
            name: '事件日历',
            icon: 'clock-circle',
            component: './ToolkitCalendar/FullCalendarIndex',
          },
          //工作流文档
          {
            path: '/toolkit/document/activiti',
            name: '工作流文档',
            icon: 'book',
            component: './ToolkitDocument/ActivitiDocument',
          }
        ]
      }
    ]
  },

]
