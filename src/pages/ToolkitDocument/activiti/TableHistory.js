import React, {Component} from 'react';
import styles from '@/utils/common.less';
import {Tag} from "antd";

/**
 * Activiti历史数据表
 * @author fxf
 * */
class TableHistory extends Component {
  render() {
    return (
      <>
        <blockquote id='TableHistory' className={styles.blockquote}>
          Activiti历史数据表（History）9张
        </blockquote>
        <div className={styles.m10}>
          <Tag color='#108ee9'>act_hi_procinst</Tag>
          <Tag color='#108ee9'>act_hi_detail</Tag>
          <Tag color='#108ee9'>act_hi_actinst</Tag>
          <Tag color='#108ee9'>act_hi_identitylink</Tag>
          <Tag color='#108ee9'>act_hi_taskinst</Tag>
          <Tag color='#108ee9'>act_hi_varinst</Tag>
          <Tag color='#108ee9'>act_hi_attachment</Tag>
          <Tag color='#108ee9'>act_hi_comment</Tag>
          <Tag color='#108ee9'>act_evt_log</Tag>
        </div>
        <p>
          历史数据表就像流程引擎的日志表。被操作过的流程元素，将会被记录到历史表中。
          历史数据表以ACT_HI开头
        </p>
        <ul>
          <li id='@act_hi_procinst'>
            <b>历史流程实例表（act_hi_procinst）</b>
            <p>
              只要流程被启动，Activiti就会将流程实例的数据写入ACT_HI_PROCINST表中。
              除了基本的流程字段外，与运行时数据表不同的是，历史流程实例表还会记录流程的开始活动ID、结束活动ID等信息
            </p>
            <ol>
              <li><b>ID_：</b>主键</li>
              <li><b>PROC_INST_ID_：</b>关联流程实例ID</li>
              <li><b>BUSINESS_KEY_：</b>业务标识key</li>
              <li><b>PROC_DEF_ID_：</b>关联流程定义ID</li>
              <li><b>START_TIME_：</b>开始时间</li>
              <li><b>END_TIME_：</b>结束时间</li>
              <li><b>DURATION_：</b>持续时间</li>
              <li><b>START_USER_ID_：</b>开始时关联的用户ID</li>
              <li><b>START_ACT_ID_：</b>开始节点的ID,一般是流程开始事件的ID，在流程文件中定义。</li>
              <li><b>END_ACT_ID_：</b>流程最后一个节点ID,一般是流程结束事件的ID,在流程文件中定义。</li>
              <li><b>SUPER_PROCESS_INSTANCE_ID_：</b>父流程的实例ID</li>
              <li><b>DELETE_REASON_：</b>该流程实例的删除原因，如果流程是正常结束，那么该字段值将会是completed</li>
              <li><b>TENANT_ID_：</b>租户ID</li>
              <li><b>NAME_：</b>实例名称</li>
            </ol>
          </li>
          <br/>
          <li id='@act_hi_detail'>
            <b>历史流程明细表（act_hi_detail）</b>
            <p>
              流程明细表会记录流程执行过程中的参数或者表单数据。由于在流程执行过程中，会产生大量这类数据，因此默认不会保存流程明细数据。
              除非将流程引擎的历史数据（history）配置为full。流程的历史明细数据表与运行时参数表的设计类似。
            </p>
            <ol>
              <li><b>ID_：</b>主键</li>
              <li><b>TYPE_：</b>类型</li>
              <li><b>PROC_INST_ID_：</b>关联流程实例ID</li>
              <li><b>EXECUTION_ID_：</b>关联流程执行ID</li>
              <li><b>TASK_ID_：</b>关联流程任务ID</li>
              <li><b>ACT_INST_ID_：</b>关联节点实例ID</li>
              <li><b>NAME_：</b>流程名称</li>
              <li><b>VAR_TYPE_：</b>变量类型</li>
              <li><b>REV_：</b>数据版本</li>
              <li><b>TIME_：</b>创建时间</li>
              <li><b>BYTEARRAY_ID_：</b>关联资源数据ID</li>
              <li><b>DOUBLE_：</b>double类型的数据内容</li>
              <li><b>LONG_：</b>long类型的数据内容</li>
              <li><b>TEXT_：</b>text类型的数据内容</li>
              <li><b>TEXT2_：</b>text类型的数据内容</li>
            </ol>
          </li>
          <br/>
          <li id='@act_hi_actinst'>
            <b>历史节点信息表（act_hi_actinst）</b>
            <ol>
              <li><b>ID_：</b>主键</li>
              <li><b>PROC_DEF_ID_：</b>关联流程定义ID</li>
              <li><b>PROC_INST_ID_：</b>关联流程实例ID</li>
              <li><b>EXECUTION_ID_：</b>关联流程执行ID</li>
              <li><b>ACT_ID_：</b>节点ID</li>
              <li><b>TASK_ID_：</b>关联任务ID</li>
              <li><b>CALL_PROC_INST_ID_：</b></li>
              <li><b>ACT_NAME_：</b>节点名称</li>
              <li><b>ACT_TYPE_：</b>节点类型</li>
              <li><b>ASSIGNEE_：</b>指派人</li>
              <li><b>START_TIME_：</b>开始时间</li>
              <li><b>END_TIME_：</b>结束时间</li>
              <li><b>DURATION_：</b>持续时间</li>
              <li><b>DELETE_REASON_：</b>删除原因</li>
              <li><b>TENANT_ID_：</b>不同系统用一个流程定义来启动流程实例，tenantId用以区分同一个流程定义下分属不同系统的流程实例</li>
            </ol>
          </li>
          <br/>
          <li id='@act_hi_identitylink'>
            <b>历史参与者关联表（act_hi_identitylink）</b>
            <ol>
              <li><b>ID_:</b>主键</li>
              <li><b>GROUP_ID_:</b>关联用户组ID</li>
              <li><b>TYPE_:</b>类型</li>
              <li><b>USER_ID_:</b>关联用户ID</li>
              <li><b>TASK_ID_:</b>关联任务ID</li>
              <li><b>PROC_INST_ID_:</b>关联流程实例ID</li>
            </ol>
          </li>
          <br/>
          <li id='@act_hi_taskinst'>
            <b>历史任务表（act_hi_taskinst）</b>
            <p>
              当流程到达某个任务节点时，就会向历史任务表中写入历史任务数据。
              历史任务表与运行时的任务表设计类似，在运行时任务表的基础上，额外提供了任务开始时间、结束时间、删除原因三个字段。
              如果任务被正常完成，那么删除原因字段值为completed。
            </p>
            <p>
              历史行为表会记录每一个流程活动的实例，一个流程活动将会被记录为一条数据。
            </p>
            <ol>
              <li><b>ID_：</b>主键</li>
              <li><b>PROC_DEF_ID_：</b>流程定义ID</li>
              <li><b>TASK_DEF_KEY_：</b>任务定义标识key</li>
              <li><b>PROC_INST_ID_：</b>关联流程实例ID</li>
              <li><b>EXECUTION_ID_：</b>关联流程执行ID</li>
              <li><b>NAME_：</b>任务名称</li>
              <li><b>PARENT_TASK_ID_：</b>父任务ID</li>
              <li><b>DESCRIPTION_：</b>描述内容</li>
              <li><b>OWNER_：</b>任务拥有人</li>
              <li><b>ASSIGNEE_：</b>任务指派人</li>
              <li><b>START_TIME_：</b>任务开始时间，即执行流到达活动的时间</li>
              <li><b>CLAIM_TIME_：</b>任务发布时间</li>
              <li><b>END_TIME_：</b>活动结束时间，即执行流离开该活动时的时间</li>
              <li><b>DURATION_：</b>活动持续时间，单位为毫秒</li>
              <li><b>DELETE_REASON_：</b>删除原因</li>
              <li><b>PRIORITY_：</b>优先权</li>
              <li><b>DUE_DATE_：</b>到期时间</li>
              <li><b>FORM_KEY_：</b>表单key</li>
              <li><b>CATEGORY_：</b>任务类别</li>
              <li><b>TENANT_ID_：</b>租户ID</li>
            </ol>
          </li>
          <br/>
          <li id='@act_hi_varinst'>
            <b>历史变量表（act_hi_varinst）</b>
            <ol>
              <li><b>ID_：</b>主键</li>
              <li><b>PROC_INST_ID_：</b>关联流程实例ID</li>
              <li><b>EXECUTION_ID_：</b>关联流程执行ID</li>
              <li><b>TASK_ID_：</b>关联流程任务ID</li>
              <li><b>NAME_：</b>变量名</li>
              <li><b>VAR_TYPE_：</b>变量类型</li>
              <li><b>REV_：</b>数据版本</li>
              <li><b>BYTEARRAY_ID_：</b>关联资源ID</li>
              <li><b>DOUBLE_：</b>double类型数据内容</li>
              <li><b>LONG_：</b>long类型数据内容</li>
              <li><b>TEXT_：</b>text类型数据内容</li>
              <li><b>TEXT2_：</b>text类型数据内容</li>
              <li><b>CREATE_TIME_：</b>创建时间</li>
              <li><b>LAST_UPDATED_TIME_：</b>最近的更新时间</li>
            </ol>
          </li>
          <br/>
          <li id='@act_hi_attachment'>
            <b>附件表（act_hi_attachment）</b>
            <p>
              使用任务服务（TaskService）的API，可以添加附件，这些附件的数据将会保存到附件表中
            </p>
            <ol>
              <li><b>ID_:</b>主键</li>
              <li><b>REV_:</b>数据版本号</li>
              <li><b>USER_ID_:</b>附件对应的用户ID</li>
              <li><b>NAME_:</b>附件名称</li>
              <li><b>DESCRIPTION_:</b>附件描述</li>
              <li><b>TYPE_:</b>附件类型</li>
              <li><b>TASK_ID_:</b>附加对应的任务ID</li>
              <li><b>PROC_INST_ID_:</b>对应流程实例ID</li>
              <li><b>URL_:</b>连接到附件的URL</li>
              <li><b>CONTENT_ID_:</b>附件内容ID，附件的内容将会保存到资源表中，该字段记录资源数据ID</li>
              <li><b>TIME_:</b>数据产生的时间</li>
            </ol>
          </li>
          <br/>
          <li id='@act_hi_comment'>
            <b>评论表（act_hi_comment)</b>
            <p>
              使用任务服务（TaskService）的API，可以添加评论，这些评论的数据将会保存到附件表中
            </p>
            <ol>
              <li><b>ID_:</b>主键</li>
              <li><b>TYPE_</b>评论的类型</li>
              <li><b>TIME_</b>数据产生的时间</li>
              <li><b>USER_ID_</b>产生评论数据的用户</li>
              <li><b>TASK_ID_</b>该评论数据的任务ID</li>
              <li><b>PROC_INST_ID_</b>数据对应的流程实例ID</li>
              <li><b>ACTION_</b>该评论数据的操作标识</li>
              <li><b>MESSAGE_</b>该评论数据的信息</li>
              <li><b>FULL_MSG_</b>该字段同样记录评论数据的信息</li>
            </ol>
          </li>
          <br/>
          <li id='@act_evt_log'>
            <b>事件日志表（act_evt_log）</b>
            <ol>
              <li><b>LOG_NR_：</b>主键(bigint)</li>
              <li><b>TYPE_：</b>事件类型</li>
              <li><b>PROC_DEF_ID_：</b>关联流程定义ID</li>
              <li><b>PROC_INST_ID_：</b>关联流程实例ID</li>
              <li><b>EXECUTION_ID_：</b>关联流程执行ID</li>
              <li><b>TASK_ID_：</b>关联任务ID</li>
              <li><b>TIME_STAMP_：</b>创建时间</li>
              <li><b>USER_ID_：</b>关联用户ID</li>
              <li><b>DATA_：</b>日志数据</li>
              <li><b>LOCK_OWNER_：</b>锁的拥有者</li>
              <li><b>LOCK_TIME_：</b>锁定时间</li>
              <li><b>IS_PROCESSE：</b></li>
            </ol>
          </li>
        </ul>
      </>
    );
  }
}

export default TableHistory;
