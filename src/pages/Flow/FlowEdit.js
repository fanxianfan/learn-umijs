import React, {Component} from 'react';
import {Row, Col, Card, Steps} from 'antd';
import CrumbsNav from '@/components/Nav/NavCrumbs';
import styles from '@/utils/common.less';


const {Step} = Steps;
/**
 * 流程编辑页面
 * */
class FlowEdit extends Component {
  render() {
    return (
      <>
        <CrumbsNav/>
        <Card className={styles.m10}>
          <Row>
            <Col span={24}>
              <Steps current={1}>
                <Step title="Finished" description="This is a description." />
                <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
                <Step title="Waiting" description="This is a description." />
              </Steps>,
            </Col>
          </Row>
        </Card>
      </>
    );
  }
}

export default FlowEdit;
