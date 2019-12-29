import React, {Component} from 'react';
import {Row, Col, Card, Steps} from 'antd';
import CrumbsNav from '@/components/Nav/NavCrumbs';
import styles from '@/utils/common.less';
import router from 'umi/router';
import FlowStep1 from './flowStep/FlowStep1';
import FlowStep2 from './flowStep/FlowStep2';
import FlowStep3 from './flowStep/FlowStep3';
import FlowStep4 from './flowStep/FlowStep4';
import FlowStep5 from './flowStep/FlowStep5';


const {Step} = Steps;

/**
 * 流程编辑页面
 * @author fxf
 * */
class FlowEdit extends Component {

  flowData = {
    basic: null, //基础信息
    nodes: null, //节点信息
    transfer: null, //节点流转信息
    business: null, //流程业务属性配置
    auth: null, //流程权限信息
  };

  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0, //当前页
    }
  }

  /**下一步*/
  nextStep = () => {
    const {currentStep} = this.state;
    this.setState({currentStep: currentStep + 1});
  };

  /**上一步*/
  prevStep = () => {
    const {currentStep} = this.state;
    this.setState({currentStep: currentStep - 1});
  };

  /**放弃操作*/
  stopStep = () => {
    router.push('/business/flow');
  };

  /**保存数据：步骤1*/
  saveBasic = (basic) => {
    this.flowData.basic = basic;
  };

  /**保存数据：步骤2*/
  saveNodes = (nodes) => {
    this.flowData.nodes = nodes;
  };

  /**保存数据：步骤3*/
  saveTransfer = (transfer) => {
    this.flowData.transfer = transfer;
  };

  /**保存数据：步骤4*/
  saveBusiness = (business) => {
    this.flowData.business = business;
  };

  /**保存数据：步骤5*/
  saveAuth = (auth) => {
    this.flowData.auth = auth;
  };

  /**
   * 当前页面Element
   * @return {object} 页面Element
   * */
  handleStepElement = () => {
    const {currentStep} = this.state;
    switch (currentStep) {
      case 0:
        return <FlowStep1 nextStep={this.nextStep} stopStep={this.stopStep} saveData={this.saveBasic} />;
      case 1:
        return <FlowStep2 prevStep={this.prevStep} nextStep={this.nextStep} stopStep={this.stopStep} saveData={this.saveBasic} />;
      case 2:
        return <FlowStep3/>;
      case 3:
        return <FlowStep4/>;
      case 4:
        return <FlowStep5/>;
      default:
        return <FlowStep1 nextStep={this.nextStep} saveData={this.saveBasic} stopStep={this.stopStep}/>;
    }
  };


  render() {

    return (
      <>
        <CrumbsNav/>
        <Card className={styles.m10}>
          <Row>
            <Col span={24}>
              <Steps current={this.state.currentStep}>
                <Step title="基本信息"/>
                <Step title="节点配置"/>
                <Step title="节点流转"/>
                <Step title="业务属性配置"/>
                <Step title="权限配置"/>
              </Steps>
            </Col>
          </Row>
        </Card>
        <Card className={`${styles.ml10} ${styles.mr10} ${styles.mt5}`}>
          {this.handleStepElement()}
        </Card>
      </>
    );
  }
}

export default FlowEdit;
