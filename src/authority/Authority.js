import React, {Component} from 'react';
import Redirect from 'umi/redirect';

/**
 * 应用页面入口
 * @author fxf
 * */
class Authority extends Component {

  constructor(props) {
    super(props);
    console.log("authority:", props);
    this.state = {
      redirect: '/404', //重定向路径，默认404
    };
    /*权限校验*/
    const currentUrl = props.location.pathname;
    const routeArray = props.route.routes;
    if (!Array.isArray(routeArray) || routeArray.length < 1) {
      console.error("路由为空，请先设置路由！");
      return;
    }
    //请求路径："/**"，应用页面
    for (let i = 0; i < routeArray.length; i++) {
      if (routeArray[i].path === currentUrl) {
        this.state.redirect = null;
        break;
      }
    }
    //请求路径："/" 首页
    if (props.match.isExact) {
      this.state.redirect = routeArray[0].path;
    }
    //TODO 403 | Login
  }

  render() {
    const {redirect} = this.state;
    if (redirect === null) {
      return (<>{this.props.children}</>);
    } else {
      return (<Redirect to={this.state.redirect} />);
    }
  }
}

export default Authority;
