import React, {Component} from 'react';
import {Row, Col, notification} from 'antd';

/**页面布局*/
class BasicLayout extends Component {

  componentDidMount() {
    notification.success({message: "欢迎进入首页"});
  }

  render() {
    return (
      <>
        <Row>
          <Col span={12}>
          </Col>
        </Row>
        {this.props.children}
      </>
    );
  }
}

export default BasicLayout;
