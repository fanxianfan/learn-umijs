import React, {Component} from 'react';
import {
  Layout,
  Menu,
  Icon,
  notification,
} from 'antd';
import router from 'umi/router';
import styles from './BasicLayout.less';
import favicon from '../../public/favicon.ico';
import {getUID} from '@/utils/common';


const {Header, Footer, Sider, Content} = Layout;
const {SubMenu} = Menu;

/**
 * 页面布局
 * @author fxf
 * */
class BasicLayout extends Component {

  constructor(props) {
    super(props);
    this.transformRoutes(props.route.routes);
    this.state = {
      collapsed: false, //是否压缩边栏菜单
      menuElements: this.installMenu(props.route.routes) //边栏菜单
    };
    notification.success({message: "欢迎进入首页"});
  }

  /**
   * 菜单组装
   * @param {array | null} routes 菜单数组
   * */
  installMenu = (routes) => {
    if (!Array.isArray(routes)) {
      return null;
    }
    const menuDom = [];
    routes.forEach((menu) => {
      //判断菜单为SubMenu || Menu.Item
      if (!menu.hasOwnProperty('path')) {
        return;
      }
      //校验子类是否全部隐藏
      let noChildren = true;
      if (menu.hasOwnProperty('routes')) {
        for (let i = 0; i < menu.routes.length; i++) {
          const isMenu = menu.routes[i].hasOwnProperty('path');
          const isHidden = menu.routes[i].hasOwnProperty('hidden') && menu.routes[i].hidden === true;
          if (isMenu && !isHidden) {
            noChildren = false;
            break;
          }
        }
      }
      //生成菜单
      if (noChildren) {
        menuDom.push(this.installMenuItem(menu));
      } else {
        menuDom.push(this.installSubMenu(menu));
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
      ? <span className="nav-text">{subMenu.name}</span>
      : <span className="nav-text">未定义菜单名</span>;
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
      ? <span className="nav-text">{item.name}</span>
      : <span className="nav-text">未定义菜单名</span>;

    return (
      <Menu.Item key={item.key}>
        {icon}
        {text}
      </Menu.Item>
    );
  };

  /**
   * 菜单选中事件
   * @param {string} key 选中的路由key
   * */
  handleMenuOnSelect = ({key}) => {
    const path = this.filterRouter(this.props.route.routes, key);
    if (typeof path === 'string') {
      router.push(path);
    }
  };

  /**
   * 给菜单的每个路由都添加唯一Key
   * @param {array} routes 菜单路由
   * */
  transformRoutes = (routes) => {
    if (!Array.isArray(routes)) {
      return;
    }
    routes.forEach((current) => {
      current.key = getUID();
      //迭代子菜单
      if (current.hasOwnProperty('routes') && Array.isArray(current.routes)) {
        this.transformRoutes(current.routes);
      }
    });
  };

  /**
   * 筛选路由
   * @param {array} routes 路由数组
   * @param {string} key 被筛选的路由key
   * */
  filterRouter = (routes, key) => {
    if (Array.isArray(routes)) {
      for (let i = 0; i < routes.length; i++) {
        const item = routes[i];
        if (item.hasOwnProperty('key') && item.key === key) {
          //筛选当前节点
          return item.path;
        } else {
          //筛选子节点
          if (item.hasOwnProperty('routes')) {
            const path = this.filterRouter(item.routes, key);
            if (typeof path === 'string') {
              return path;
            }
          }
        }
      }
    }
    return undefined;
  };

  /**边栏菜单压缩控制*/
  handleToggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <>
        <Layout>
          {/*垂直边栏*/}
          <Sider
            collapsed={this.state.collapsed}
            collapsedWidth={80}
            className={styles.basicSideBar}
          >
            <div className={styles.basicLogo}>
              <img src={favicon} alt="logo"/>
            </div>
            <Menu theme="dark" mode="inline" onSelect={this.handleMenuOnSelect}>
              {this.state.menuElements}
            </Menu>
          </Sider>
          {/*主体页面*/}
          <Layout className={`${styles.basicBodyLayout} ${this.state.collapsed ? styles.toggle : ''}`}>
            {/*主体头部*/}
            <Header className={styles.basicBodyHeader}>
              <span>
              <Icon
                className={styles.basicBodyHeaderTrigger}
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.handleToggle}
              />
              </span>
            </Header>
            {/*主体中心*/}
            <Content className={styles.basicBodyContent}>
              {this.props.children}
            </Content>
            {/*主体底部*/}
            <Footer className={styles.basicBodyFooter}>@2019 create by fxf</Footer>
          </Layout>
        </Layout>
      </>
    );
  }
}

export default BasicLayout;
