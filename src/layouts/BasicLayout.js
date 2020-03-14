import React, {Component} from 'react';
import {
  Layout,
  Icon,
  Row,
  Col,
  ConfigProvider,
  BackTop,
  Dropdown,
  Menu, Button
} from 'antd';
import {uniqueID} from '@/utils/common';
import styles from './BasicLayout.less';
import favicon from '../../public/favicon.ico';
import VerticalMenu from "@/components/Menu/VerticalMenu";
import zhCN from 'antd/es/locale/zh_CN';


const {Header, Sider, Content} = Layout;


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
                <Row>
                  <Col span={2}>
                    <Icon
                      className={styles.basicBodyHeaderTrigger}
                      type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                      onClick={this.handleToggle}
                    />
                  </Col>
                  <Col span={10} />
                  <Col span={12}>
                    <ul style={{float: 'right', listStyle: 'none', marginRight: 10}}>
                      <li>
                        <Dropdown
                          overlay={
                            <Menu>
                              <Menu.Item key="1"><Icon type="crown" />个人中心</Menu.Item>
                              <Menu.Item key="2"><Icon type="logout" />退出登录</Menu.Item>
                            </Menu>
                          }
                        >
                          <Button>个人用户</Button>
                        </Dropdown>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Header>
              {/*主体中心*/}
              <Content id={uniqueID} className={styles.basicBodyContent}>
                {this.props.children}
                <div className={styles.basicBodyFooter}>@2019 create by fxf</div>
              </Content>
              <BackTop target={() => (document.getElementById(uniqueID))} visibilityHeight={200}/>
            </Layout>
          </Layout>
        </ConfigProvider>
      </>
    );
  }
}

export default BasicLayout;
