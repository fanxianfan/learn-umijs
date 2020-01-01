import React, {Component} from 'react';
import {Row, Col, Card, Anchor } from 'antd';
import styles from '@/utils/common.less';

import A_BPMN from './activiti/A_BPMN';
import A_Activiti from './activiti/A_Activiti';

const { Link } = Anchor;

/**
 * 工作流文档
 * @author fxf
 * */
class ActivitiDocument extends Component {


  render() {
    return (
      <>
       <Row gutter={16} className={styles.m10}>
         <Col span={6}>
           <Anchor offsetTop={65}>
             <Link href="#A_BPMN" title="BPMN规范——业务流程建模标记法" />
             <Link href="#A_Activiti" title="Activiti概述" />
           </Anchor>
         </Col>
         <Col span={18} className={`${styles.pl5} ${styles.pr5}`}>
           <Card>
             <A_BPMN/>
             <A_Activiti/>
           </Card>
         </Col>
       </Row>
      </>
    );
  }
}

export default ActivitiDocument;
