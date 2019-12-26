import React, {Component} from 'react';
import {Icon, Menu, Breadcrumb} from 'antd';
import Link from 'umi/link';
import PropTypes from 'prop-types';
import router from 'umi/router';
import styles from './VerticalMenu.less';
import {uuid} from '@/utils/common';


const {SubMenu} = Menu;

/**
 * 垂直边栏菜单
 * @author fxf
 * */
class VerticalMenu extends Component {

  static propTypes = {
    route: PropTypes.object.isRequired, //路由
    location: PropTypes.object.isRequired, //路径
  };
  static routesArray = []; //自定义路由变量（数组型）
  static location = []; //当前地址

  constructor(props) {
    super(props);
    /*校验*/
    if (!props.route.hasOwnProperty('routes')) {
      console.error("没有配置任何菜单项，垂直菜单无法加载");
      return;
    }
    /*初始化*/
    VerticalMenu.location = props.location;
    this.setRoutesTree(props.route.routes);
    this.setRoutesArray(props.route.routes, undefined);
    this.defaultRoute = this.setDefaultRoute();//默认的路由
    this.state = {
      menuElements: this.installMenu(props.route.routes) //菜单DOM
    };
  }

  /**在最近一次渲染输出（提交到 DOM 节点）之前调用                                                                               */
  componentDidUpdate() {
    VerticalMenu.location = this.props.location;
    return null;
  }

  /**
   * 组装路由树型变量
   * @param {array} routes 路由
   * */
  setRoutesTree = (routes) => {
    if (Array.isArray(routes)) {
      routes.forEach((route) => {
        if (route.hasOwnProperty('path')) {
          route.key = uuid();
        }
        if (route.hasOwnProperty('routes') && Array.isArray(route.routes)) {
          this.setRoutesTree(route.routes);
        }
      });
    }
  };


  /**
   * 将路由转为单层数组结构
   * @param {array} routes 路由
   * @param {string} parent 路由的父key
   * */
  setRoutesArray = (routes, parent) => {
    if (!Array.isArray(routes)) {
      return null;
    }
    routes.forEach((route) => {
      const keys = Object.keys(route);
      if (keys.includes('path')) {
        /*组装routesArray*/
        const bean = {parent: parent};
        keys.forEach((key) => {
          if (typeof route[key] !== 'function' && key !== 'routes') {
            bean[key] = route[key];
          }
        });
        VerticalMenu.routesArray.push(bean);
        //迭代子菜单
        if (keys.includes('routes') && Array.isArray(route.routes)) {
          this.setRoutesArray(route.routes, bean.key);
        }
      }
    });
  };

  /**
   * 设置默认的路由
   * */
  setDefaultRoute = () => {
    const currentPath = this.props.location.pathname;
    for (let i = 0; i < VerticalMenu.routesArray.length; i++) {
      const route = VerticalMenu.routesArray[i];
      if (route.path === currentPath) {
        return route;
      }
    }
    return null;
  };

  /**
   * 菜单组装
   * @param {array} routes 路由数组
   * @return {array} JSX
   * */
  installMenu = (routes) => {
    const menuDom = [];
    routes.forEach((route) => {
      if (!route.hasOwnProperty('path')) {
        return;
      }
      //校验子类是否全部隐藏
      let noChildren = true;
      if (route.hasOwnProperty('routes')) {
        for (let i = 0; i < route.routes.length; i++) {
          const isMenu = route.routes[i].hasOwnProperty('path');
          const isHidden = route.routes[i].hasOwnProperty('hidden') && route.routes[i].hidden === true;
          if (isMenu && !isHidden) {
            noChildren = false;
            break;
          }
        }
      }
      //生成菜单
      if (noChildren) {
        menuDom.push(this.installMenuItem(route));
      } else {
        menuDom.push(this.installSubMenu(route));
      }
    });
    return menuDom;
  };


  /**
   * 组装SubMenu对象
   * @param {object} subMenu 菜单对象
   * */
  installSubMenu = (subMenu) => {
    if (subMenu.hasOwnProperty('hidden') && subMenu.hidden === true) {
      return null;
    }
    //图标
    const icon = subMenu.hasOwnProperty('icon') ? <Icon type={subMenu.icon}/> : null;
    //名称
    const text = subMenu.hasOwnProperty('name')
      ? <span className='nav-text'>{subMenu.name}</span>
      : <span className='nav-text'>未定义菜单名</span>;
    //子菜单
    const children = subMenu.hasOwnProperty('routes') ? this.installMenu(subMenu.routes) : null;

    return (
      <SubMenu
        key={subMenu.key}
        title={<span>{icon}{text}</span>}
      >
        {children}
      </SubMenu>
    );
  };

  /**
   * 组装Menu.Item对象
   * @param {object} item 菜单对象
   * */
  installMenuItem = (item) => {
    if (item.hasOwnProperty('hidden') && item.hidden === true) {
      return null;
    }
    //图标
    const icon = item.hasOwnProperty('icon') ? <Icon type={item.icon}/> : null;
    //名称
    const text = item.hasOwnProperty('name')
      ? <span className='nav-text'>{item.name}</span>
      : <span className='nav-text'>未定义菜单名</span>;

    return (
      <Menu.Item key={item.key}>
        {icon}
        {text}
      </Menu.Item>
    );
  };

  /**
   * 菜单选中事件，跳转页面
   * @param {string} key 选中的路由key
   * */
  handleMenuOnSelect = ({key}) => {
    for (let i = 0; i < VerticalMenu.routesArray.length; i++) {
      const route = VerticalMenu.routesArray[i];
      if (route.key === key) {
        router.push(route.path);
        return;
      }
    }
  };

  render() {
    return (
      <Menu theme='dark'
            mode='inline'
            defaultSelectedKeys={this.defaultRoute ? this.defaultRoute.key : ''}
            defaultOpenKeys={[this.defaultRoute ? this.defaultRoute.parent : '']}
            onSelect={this.handleMenuOnSelect}>
        {this.state.menuElements}
      </Menu>
    );
  }
}

VerticalMenu.Breadcrumb = class DBreadcrumb extends Component {
  constructor(props) {
    super(props);
    this.itemArray = [];
    //当前页面节点
    for (let i = 0; i < VerticalMenu.routesArray.length; i++) {
      const route = VerticalMenu.routesArray[i];
      if (route.path === VerticalMenu.location['pathname']) {
        this.itemArray.push({
          parent: route.parent,
          key: route.key,
          element: (<Breadcrumb.Item key={route.key}><Link to={route.path}>{route.name}</Link></Breadcrumb.Item>)
        });
        break;
      }
    }
    //迭代父节点
    this.iteration();
  }

  iteration = () => {
    const child = this.itemArray[0];
    for (let i = 0; i < VerticalMenu.routesArray.length; i++) {
      const route = VerticalMenu.routesArray[i];
      if (route.key === child.parent) {
        this.itemArray.unshift({
          parent: route.parent,
          key: route.key,
          element: (<Breadcrumb.Item key={route.key}><Link to={route.path}>{route.name}</Link></Breadcrumb.Item>)
        });
        this.iteration();
        break;
      }
    }
  };

  render() {
    return (
      <>
        <Breadcrumb className={styles.breadcrumb}>
          <Breadcrumb.Item>
            首页
          </Breadcrumb.Item>
          {this.itemArray.map((item) => {
            return item.element;
          })}
        </Breadcrumb>
      </>
    )
  }

};

export default VerticalMenu;
