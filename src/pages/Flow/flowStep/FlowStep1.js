import React, {Component} from 'react';
import {Row, Col, Form, Input, Select, Divider, Button, Icon, Modal, Tree} from 'antd';
import PropTypes from 'prop-types';
import {FlowTypes, GroupTree} from '@/constants/FlowContants';
import styles from '@/utils/common.less';


const {Option} = Select;
const {TextArea} = Input;

/**
 * 流程步骤1
 * @author fxf
 * */
@Form.create()
class FlowStep1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modalDisplay : false, // modal显示状态
      flowBelongKey: [], //归属机构key
    };
  }

  /**下一步*/
  eventNextStep = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.flowGroupName = this.state.flowBelongKey;
        this.props.saveData(values);
        this.props.nextStep();
      }
    });

  };

  /**事件：选择机构树*/
  eventGroupSelect = () => {
    this.setState({modalDisplay: true});
  };

  /**事件：modal取消*/
  eventModalCancel = () => {
    this.setState({modalDisplay: false});
  };

  /**事件：modal确认*/
  eventModalOk = () => {
    this.setState({modalDisplay: false});
  };

  /**事件：tree选择*/
  eventTreeCheck = (checkedKeys, {checkedNodes}) => {
    const { flowBelongKey } = this.state;
    for (let i = 0; i < checkedNodes.length; i++) {
      if (flowBelongKey[0] !== checkedNodes[i].key) {
        this.setState({
          flowBelongKey: [checkedNodes[i].key],
        });
        this.props.form.setFieldsValue({flowGroupName: checkedNodes[i].props.title});
        break;
      }
    }

  };

  render() {
    const {getFieldDecorator} = this.props.form;

    const itemStyle = {
      labelCol: {span: 6},
      wrapperCol: {span: 18}
    };
    const colStyle = {
      span:18,
      push:3
    };

    return (
      <>
        <Form>
          <Row>
            <Col {...colStyle}>
              <Form.Item label='流程名称' {...itemStyle}>
                {
                  getFieldDecorator('flowName', {
                    rules: [{required: true, message: '此项为必填项'}]
                  })(
                    <Input placeholder='请输入流程名称'/>
                  )
                }
              </Form.Item>
            </Col>
            <Col {...colStyle}>
              <Form.Item label='流程类型' {...itemStyle}>
                {
                  getFieldDecorator('flowType', {
                    rules: [{required: true, message: '此项为必选项'}]
                  })(
                    <Select placeholder='请选择流程类型'>
                      {FlowTypes.map((type) => {
                        return (<Option key={type.key}>{type.desc}</Option>);
                      })}
                    </Select>
                  )
                }
              </Form.Item>
            </Col>
            <Col {...colStyle}>
              <Form.Item label='流程描述' {...itemStyle}>
                {
                  getFieldDecorator('flowDesc', {
                    rules: [{required: true, message: '此项为必填项'}]
                  })(
                    <TextArea placeholder='这里输入流程描述' />
                  )
                }
              </Form.Item>
            </Col>
            <Col {...colStyle}>
              <Form.Item label='归属机构' {...itemStyle}>
                <Row>
                  <Col span={18}>
                    {
                      getFieldDecorator('flowGroupName', {
                        rules: [{required: true, message: '此项为必选项'}]
                      })(
                        <Input placeholder='选择归属机构' readOnly/>
                      )
                    }
                  </Col>
                  <Col span={5} offset={1}>
                    <Button type='primary' onClick={this.eventGroupSelect}>选择<Icon type='check'/></Button>
                  </Col>
                </Row>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Divider/>
        <Row className={styles.textAlignC}>
          <Button type='primary' className={styles.mr10} onClick={this.eventNextStep}>下一步<Icon type="caret-right" /></Button>
          <Button type='default' onClick={this.props.stopStep}>放弃<Icon type="rollback" /></Button>
        </Row>

        <Modal title="请选择流程归属机构"
               visible={this.state.modalDisplay}
               footer={null}
               onCancel={this.eventModalCancel}
               onOk={this.eventModalOk}
        >
          <Tree defaultExpandParent={true}
                onCheck={this.eventTreeCheck}
                checkedKeys={this.state.flowBelongKey}
                checkStrictly={true}
                checkable={true}
                treeData={GroupTree}
                multiple={false}
          />
        </Modal>
      </>
    );
  }
}

FlowStep1.propTypes = {
  nextStep: PropTypes.func.isRequired, //下一步
  stopStep: PropTypes.func.isRequired, //放弃步骤
  saveData: PropTypes.func.isRequired, //保存对象
};

export default FlowStep1;
