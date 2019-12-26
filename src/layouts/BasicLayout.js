import React, {Component} from 'react';
import {
  Layout,
  Icon,
  ConfigProvider
} from 'antd';
import styles from './BasicLayout.less';
import favicon from '../../public/favicon.ico';
import VerticalMenu from "@/components/Menu/VerticalMenu";
import zhCN from 'antd/es/locale/zh_CN';


const {Header, Footer, Sider, Content} = Layout;


/**
 * 页面布局
 * @author fxf
 * */
class BasicLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapsed: false, //是否压缩边栏菜单
    };
  }

  /**边栏菜单压缩控制*/
  handleToggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <>
        <ConfigProvider locale={zhCN}>
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
           <VerticalMenu route={this.props.route} location={this.props.location}/>
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
        </ConfigProvider>
      </>
    );
  }
}

export default BasicLayout;
