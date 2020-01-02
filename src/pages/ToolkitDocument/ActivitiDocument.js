import React, {Component} from 'react';
import {Row, Col, Card, Anchor } from 'antd';
import styles from '@/utils/common.less';

import ABPMN from './activiti/ABPMN';
import AActiviti from './activiti/AActiviti';
import CModeOrder from './activiti/CModeOrder';
import CModeChain from './activiti/CModeChain';
import TableGeneral from "@/pages/ToolkitDocument/activiti/TableGeneral";
import TableRepository from "@/pages/ToolkitDocument/activiti/TableRepository";
import TableIdentity from "@/pages/ToolkitDocument/activiti/TableIdentity";
import TableRuntime from "@/pages/ToolkitDocument/activiti/TableRuntime";

const { Link } = Anchor;

/**
 * 工作流文档
 * @author fxf
 * */
class ActivitiDocument extends Component {

  /**锚点变化事件*/
  eventAnchorOnChange = (bean) => {
    console.log(bean);
  };

  render() {
    return (
      <>
       <Row gutter={16} className={styles.m10}>
         <Col span={6}>
           <Anchor offsetTop={65} bounds={0} getCurrentAnchor={() => {return '#A_BPMN'}} onChange={this.eventAnchorOnChange}>
             <Link href="#ABPMN" title="BPMN规范——业务流程建模标记法" />
             <Link href="#AActiviti" title="Activiti概述" />
             <Link href="#CModeOrder" title='Activiti中的命令模式'/>
             <Link href="#CModeChain" title='Activiti中的责任链模式'/>
             <Link href='#TableGeneral' title='Activiti中的表：通用数据表'/>
             <Link href='#TableRepository' title='Activiti中的表：流程存储表' />
             <Link href='#TableIdentity' title='Activiti中的表：身份数据表'/>
             <Link href='#TableRuntime' title='Activiti中的表：运行时数据表' />
           </Anchor>
         </Col>
         <Col span={18} className={`${styles.pl5} ${styles.pr5}`}>
           <Card>
             <ABPMN/>
             <AActiviti/>
             <CModeOrder/>
             <CModeChain/>
             <TableGeneral/>
             <TableRepository/>
             <TableIdentity/>
             <TableRuntime/>
           </Card>
         </Col>
       </Row>
      </>
    );
  }
}

export default ActivitiDocument;
