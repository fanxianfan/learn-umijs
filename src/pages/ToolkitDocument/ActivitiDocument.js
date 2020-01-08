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
import EngineTenant from "@/pages/ToolkitDocument/activiti/EngineTenant";
import UActivitiSimpleProcess from "@/pages/ToolkitDocument/activiti/UActivitiSimpleProcess";
import UActivitiDeployment from "@/pages/ToolkitDocument/activiti/UActivitiDeployment";

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
           <Anchor getContainer={() => (document.getElementById(uniqueID))} style={{maxHeight: '91vh'}}>
             <Link href="#ABPMN" title="BPMN规范——业务流程建模标记法"/>
             <Link href="#AActiviti" title="Activiti概述" />
             <Link href='#TableGeneral' title={<b>Activiti中的表：通用数据表(2张)</b>}>
               <Link href='#@act_ge_bytearray' title='全局资源表(act_ge_bytearray)'/>
               <Link href='#@act_ge_property' title='全局属性表(act_ge_property)'/>
             </Link>
             <Link href='#TableRepository' title={<b>Activiti中的表：流程存储表(4张)</b>}>
               <Link href='#@act_procdef_info' title='流程定义变更表(act_procdef_info)'/>
               <Link href='#@act_re_deployment' title='流程部署表(act_re_deployment)'/>
               <Link href='#@act_re_model' title='流程模型表(act_re_model)'/>
               <Link href='#@act_re_procdef' title='流程定义表(act_re_procdef)'/>
             </Link>
             <Link href='#TableIdentity' title={<b>Activiti中的表：身份数据表(4张)</b>}>
               <Link href='#@act_id_group' title='用户组表(act_id_group)'/>
               <Link href='#@act_id_user' title='用户基本信息表(act_id_user)'/>
               <Link href='#@act_id_info' title='用户详细信息表(act_id_info)'/>
               <Link href='#@act_id_membership' title='中间关系表(act_id_membership)'/>
             </Link>
             <Link href='#TableRuntime' title={<b>Activiti中的表：运行时数据表(9张)</b>} >
               <Link href='#@act_ru_job' title='异步工作表(act_ru_job)'/>
               <Link href='#@act_ru_suspended_job' title='暂停工作表(act_ru_suspended_job)'/>
               <Link href='#@act_ru_timer_job' title='定时工作表(act_ru_timer_job)'/>
               <Link href='#@act_ru_deadletter_job' title='死信工作表(act_ru_deadletter_job)'/>
               <Link href='#@act_ru_execution' title='流程实例与分支执行表(act_ru_execution)'/>
               <Link href='#@act_ru_event_subscr' title='事件监听表(act_ru_event_subscr)'/>
               <Link href='#@act_ru_identitylink' title='参与者相关信息表(act_ru_identitylink)'/>
               <Link href='#@act_ru_task' title='用户任务表(act_ru_task)'/>
               <Link href='#@act_ru_variable' title='运行中变量表(act_ru_variable)'/>
             </Link>
             <Link href='#TableHistory' title={<b>Activiti中的表：历史数据表(9张)</b>}>
               <Link href='#@act_hi_procinst' title='历史流程实例表(act_hi_procinst)'/>
               <Link href='#@act_hi_detail' title='历史流程明细表(act_hi_detail)'/>
               <Link href='#@act_hi_actinst' title='历史节点信息表(act_hi_actinst)'/>
               <Link href='#@act_hi_identitylink' title='历史参与者关联表(act_hi_identitylink)'/>
               <Link href='#@act_hi_taskinst' title='历史任务表(act_hi_taskinst)'/>
               <Link href='#@act_hi_varinst' title='历史变量表(act_hi_varinst)'/>
               <Link href='#@act_hi_attachment' title='附件表(act_hi_attachment)'/>
               <Link href='#@act_hi_comment' title='评论表(act_hi_comment)'/>
               <Link href='#@act_evt_log' title='事件日志表(act_evt_log)'/>
             </Link>
             <Link href='#EngineTenant' title='Activiti引擎多租户方案'/>
             <Link href='#UActivitiSimpleProcess' title='使用详解：简单示例'/>
             <Link href='#UActivitiDeployment' title='使用详解：流程部署'/>
             <Link href="#CModeOrder" title='Activiti中的命令模式'/>
             <Link href="#CModeChain" title='Activiti中的责任链模式'/>
           </Anchor>
         </Col>
         <Col span={18} className={`${styles.pl5} ${styles.pr5}`}>
           <Card>
             <ABPMN/>
             <AActiviti/>
             <TableGeneral/>
             <TableRepository/>
             <TableIdentity/>
             <TableRuntime/>
             <TableHistory/>
             <EngineTenant/>
             <UActivitiSimpleProcess/>
             <UActivitiDeployment/>
             <CModeOrder/>
             <CModeChain/>
           </Card>
         </Col>
       </Row>
      </>
    );
  }
}

export default ActivitiDocument;
