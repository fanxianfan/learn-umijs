import React, {Component} from 'react';
import {Form, Card, Input, Row, Col, Select, DatePicker, Table, Divider, Button, Icon} from 'antd';
import VerticalMenu from "@/components/VerticalMenu";
import styles from '@/utils/common.less';
import {FlowTypes, FlowStates} from '@/constants/FlowContants';
import router from 'umi/router';
import {connect} from 'dva';

const {Option} = Select;
const {RangePicker} = DatePicker;

/**流程列表*/
const columns = [
  {
    title: '流程名称',
    dataIndex: 'flowName',
  },
  {
    title: '流程类型',
    dataIndex: 'flowType',
    render: (val) => {
      for (let i = 0; i < FlowTypes.length; i++) {
        if (val === FlowTypes[i].key) {
          return FlowTypes[i].desc;
        }
      }
      return '未知类型';
    }
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
  },
  {
    title: '发布时间',
    dataIndex: 'payloadTime'
  },
  {
    title: '操作',
    dataIndex: 'options',
    render: (val, row) => {
      return (
        <>
          <span>发布</span>
          <Divider type='horizontal'/>
          <span>删除</span>
        </>
      );
    }
  }
];

/**
 * 流程分页页面
 * */
@connect(({flowModel, loading}) => ({
  flowModel,
  loading: loading.models.flowModel
}))
@Form.create()
class FlowPaging extends Component {

  state = {
    dataSource: []
  };

  componentDidMount() {
    this.eventQuery();
  }

  /**
   * 查询事件
   * */
  eventQuery = () => {
    const {form, dispatch} = this.props;
    const values = form.getFieldsValue();

    const params = Object.assign(values);

    dispatch({
      type: 'flowModel/query',
      payload: params
    });
  };

  /**
   * 重置事件
   * */
  eventReload = () => {
    this.props.form.reset();
    this.eventQuery();
  };

  /**新建流程事件*/
  eventCreate = () => {
    router.push('/business/flow/edit');
  };


  render() {
    const {getFieldDecorator} = this.props.form;

    const fromItemStyle = {
      labelCol: {md: {span: 9}, sm: {span: 10}},
      wrapperCol: {md: {span: 15}, sm: {span: 14}}
    };

    return (
      <>
        <VerticalMenu.Breadcrumb/>
        <Row className={styles.m10}>
          <Card>
            <Form>
              <Row>
                <Col span={8}>
                  <Form.Item label='流程名称' {...fromItemStyle}>
                    {
                      getFieldDecorator('flowName')(<Input placeholder='筛选流程名称'/>)
                    }
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label='流程类型' {...fromItemStyle}>
                    {
                      getFieldDecorator('flowType', {
                        initialValue: ''
                      })(
                        <Select>
                          <Option value=''>默认全选</Option>
                          {FlowTypes.map((item) => {
                            return (<Option key={item.key} value={item.key}>{item.desc}</Option>);
                          })}
                        </Select>
                      )
                    }
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label='流程状态' {...fromItemStyle}>
                    {
                      getFieldDecorator('flowState', {
                        initialValue: ''
                      })(
                        <Select>
                          <Option value=''>默认全选</Option>
                          {FlowStates.map((item) => {
                            return (<Option key={item.key} value={item.key}>{item.desc}</Option>)
                          })}
                        </Select>
                      )
                    }
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  <Form.Item label='创建时间' {...fromItemStyle}>
                    {
                      getFieldDecorator('createTime')(
                        <RangePicker className={styles.width100per} showTime placeholder={['开始时间', '结束时间']}/>
                      )
                    }
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label='发布时间' {...fromItemStyle}>
                    {
                      getFieldDecorator('payloadTime')(
                        <RangePicker className={styles.width100per} showTime placeholder={['开始时间', '结束时间']}/>
                      )
                    }
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={12} className={styles.textAlignL}>
                  <Button type='primary' onClick={this.eventCreate}>新建流程</Button>
                </Col>
                <Col span={12} className={styles.textAlignR}>
                  <Button type='primary' className={styles.mr5} onClick={this.eventQuery}><Icon
                    type="search"/>查询</Button>
                  <Button type='default' onClick={this.eventReload}><Icon type="reload"/>重置</Button>
                </Col>
              </Row>
            </Form>
          </Card>
          <Card className={styles.mt10}>
            <Table bordered columns={columns} dataSource={this.state.dataSource}/>
          </Card>
        </Row>
      </>
    );
  }
}

export default FlowPaging;
