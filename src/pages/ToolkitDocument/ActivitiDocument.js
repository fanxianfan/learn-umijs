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
import TableHistory from "@/pages/ToolkitDocument/activiti/TableHistory";
import {uniqueID} from "@/utils/common";

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
           <Anchor getContainer={() => (document.getElementById(uniqueID))}>
             <Link href="#ABPMN" title="BPMN规范——业务流程建模标记法" />
             <Link href="#AActiviti" title="Activiti概述" />
             <Link href="#CModeOrder" title='Activiti中的命令模式'/>
             <Link href="#CModeChain" title='Activiti中的责任链模式'/>
             <Link href='#TableGeneral' title='Activiti中的表：通用数据表(2张)'/>
             <Link href='#TableRepository' title='Activiti中的表：流程存储表(4张)'>
               <Link href='#@act_procdef_info' title='act_procdef_info'/>
               <Link href='#@act_re_deployment' title='act_re_deployment'/>
               <Link href='#@act_re_model' title='act_re_model'/>
               <Link href='#@act_re_procdef' title='act_re_procdef'/>
             </Link>
             <Link href='#TableIdentity' title='Activiti中的表：身份数据表(4张)'/>
             <Link href='#TableRuntime' title='Activiti中的表：运行时数据表(9张)' >
               <Link href='#@act_ru_deadletter_job' title='act_ru_deadletter_job'/>
               <Link href='#@act_ru_event_subscr' title='act_ru_event_subscr'/>
               <Link href='#@act_ru_execution' title='act_ru_execution'/>
               <Link href='#@act_ru_identitylink' title='act_ru_identitylink'/>
               <Link href='#@act_ru_job' title='act_ru_job'/>
               <Link href='#@act_ru_suspended_job' title='act_ru_suspended_job'/>
               <Link href='#@act_ru_task' title='act_ru_task'/>
               <Link href='#@act_ru_timer_job' title='act_ru_timer_job'/>
               <Link href='#@act_ru_variable' title='act_ru_variable'/>
             </Link>
             <Link href='#TableHistory' title='Activiti中的表：历史数据表(9张)'>
               <Link href='#@act_evt_log' title='act_evt_log'/>
               <Link href='#@act_hi_actinst' title='act_hi_actinst'/>
               <Link href='#@act_hi_attachment' title='act_hi_attachment'/>
               <Link href='#@act_hi_comment' title='act_hi_comment'/>
               <Link href='#@act_hi_detail' title='act_hi_detail'/>
               <Link href='#@act_hi_identitylink' title='act_hi_identitylink'/>
               <Link href='#@act_hi_procinst' title='act_hi_procinst'/>
               <Link href='#@act_hi_taskinst' title='act_hi_taskinst'/>
               <Link href='#@act_hi_varinst' title='act_hi_varinst'/>
             </Link>
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
             <TableHistory/>
           </Card>
         </Col>
       </Row>
      </>
    );
  }
}

export default ActivitiDocument;
