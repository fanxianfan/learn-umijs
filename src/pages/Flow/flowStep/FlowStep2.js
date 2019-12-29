import React, {Component} from 'react';
import {Row, Divider, Button, Icon} from 'antd';
import PropTypes from 'prop-types';
import styles from "@/utils/common.less";

/**
 * 流程步骤2
 * @author fxf
 * */
class FlowStep2 extends Component {

  /**上一步*/
  eventPrevStep = () => {
    this.props.prevStep();
  };

  /**下一步*/
  eventNextStep = () => {
    this.props.nextStep();
  };

  render() {
    return (
      <>

        <Divider/>
        <Row className={styles.textAlignC}>
          <Button type='primary' className={styles.mr10} onClick={this.eventPrevStep}><Icon type="caret-left" />上一步</Button>
          <Button type='primary' className={styles.mr10} onClick={this.eventNextStep}>下一步<Icon type="caret-right" /></Button>
          <Button type='default' onClick={this.props.stopStep}>放弃<Icon type="rollback" /></Button>
        </Row>
      </>
    );
  }
}

FlowStep2.propTypes = {
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  stopStep: PropTypes.func.isRequired,
  saveData: PropTypes.func.isRequired,
};

export default FlowStep2;
