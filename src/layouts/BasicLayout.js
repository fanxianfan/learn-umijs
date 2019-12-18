import React, {Component} from 'react';
import {
  Layout,
  Button,
  Menu,
  Icon,
  notification,
} from 'antd';
import styles from './BasicLayout.less';
import favicon from '../public/favicon.ico';

const { Header, Footer, Sider, Content } = Layout;

/**
 * 页面布局
 * @author fxf
 * */
class BasicLayout extends Component {

  constructor(props) {
    super(props);
    console.log("props",props);
  }

  componentDidMount() {
    notification.success({message: "欢迎进入首页"});
  }

  state = {
    collapsed: false,
  };

  toggle = () => {
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
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'fixed',
              left: 0,
            }}
          >
            <div className={styles.basicLogo}>
              <img src={favicon} alt="logo"/>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span className="nav-text">nav 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span className="nav-text">nav 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span className="nav-text">nav 3</span>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="bar-chart" />
                <span className="nav-text">nav 4</span>
              </Menu.Item>
              <Menu.Item key="5">
                <Icon type="cloud-o" />
                <span className="nav-text">nav 5</span>
              </Menu.Item>
              <Menu.Item key="6">
                <Icon type="appstore-o" />
                <span className="nav-text">nav 6</span>
              </Menu.Item>
              <Menu.Item key="7">
                <Icon type="team" />
                <span className="nav-text">nav 7</span>
              </Menu.Item>
              <Menu.Item key="8">
                <Icon type="shop" />
                <span className="nav-text">nav 8</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className={styles.basicBodyLayout}>
            <Header className={styles.basicBodyHeader} />
            <Content className={styles.basicBodyContent}>
              {this.props.children}
            </Content>
            <Footer className={styles.basicBodyFooter}>@2019 create by fxf</Footer>
          </Layout>
        </Layout>
      </>
    );
  }
}

export default BasicLayout;
