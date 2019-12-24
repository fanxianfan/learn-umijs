import React, {Component} from 'react';
import router from 'umi/router';

/**
 * 应用页面入口
 * @author fxf
 * */
class Authority extends Component {

  constructor(props) {
    super(props);
    /*权限校验 */
    //TODO 403 | Login
    const currentUrl = props.location.pathname;
    const routeArray = props.route.routes;
    if (!Array.isArray(routeArray) || routeArray.length < 1) {
      console.error("路由为空，请先设置路由！");
      return;
    }
    //校验：首页"/"
    if (props.match.isExact) {
      router.replace(routeArray[0].path);
      return;
    }
    //校验：子页面
    if (!this.checkRouteArray(currentUrl, routeArray)) {
        router.replace('/404');
    }
  }

  /**
   * 校验页面是否存在
   * @param {string} currentUrl 当前页面路径
   * @param {array} routeArray 路由数组
   * */
  checkRouteArray(currentUrl, routeArray) {
    if (Array.isArray(routeArray)) {
      for (let i = 0; i < routeArray.length; i++) {
        const pathCheck = currentUrl === routeArray[i].path;
        const componentCheck = routeArray[i].hasOwnProperty('component');
        if (pathCheck && componentCheck) {
          return true;
        }
        if (routeArray[i].hasOwnProperty('routes')) {
          const flag = this.checkRouteArray(currentUrl, routeArray[i].routes);
          if (flag) {
            return true;
          }
        }
      }
    }
    return false;
  }

  render() {
    return (<>{this.props.children}</>);
  }
}

export default Authority;
