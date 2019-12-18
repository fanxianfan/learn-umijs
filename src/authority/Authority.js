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
    let isChild = false;
    for (let i = 0; i < routeArray.length; i++) {
      if (routeArray[i].path === currentUrl) {
        isChild = true;
        break;
      }
    }
    if (!isChild) {
        router.replace('/404');
    }
  }

  render() {
    return (<>{this.props.children}</>);
  }
}

export default Authority;
