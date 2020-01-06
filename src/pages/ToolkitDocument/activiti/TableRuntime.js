import React, {Component} from 'react';
import styles from '@/utils/common.less';
import {Tag} from "antd";

/**
 * Activiti运行时数据表
 * @author fxf
 * */
class TableRuntime extends Component {
  render() {
    return (
      <>
        <blockquote id='TableRuntime' className={styles.blockquote}>
          Activiti运行时数据表（Runtime）9张
        </blockquote>
        <div className={styles.m10}>
          <Tag color='red'>act_ru_deadletter_job</Tag>
          <Tag color='red'>act_ru_event_subscr</Tag>
          <Tag color='red'>act_ru_execution</Tag>
          <Tag color='red'>act_ru_identitylink</Tag>
          <Tag color='red'>act_ru_job</Tag>
          <Tag color='red'>act_ru_suspended_job</Tag>
          <Tag color='red'>act_ru_task</Tag>
          <Tag color='red'>act_ru_timer_job</Tag>
          <Tag color='red'>act_ru_variable</Tag>
        </div>
        <p>运行时数据表用来保存流程在运行中产生的数据。<code>例如：流程实例、执行流、任务</code></p>
        <ul>
          <li id='@act_ru_deadletter_job'>
            <b>流程死信工作表（act_ru_deadletter_job）</b>
            <ol>
              <li><b>ID_：</b>主键</li>
              <li><b>REV_：</b>数据版本</li>
              <li><b>TYPE_：</b>工作类型</li>
              <li><b>EXCLUSIVE_：</b></li>
              <li><b>EXECUTION_ID_：</b></li>
              <li><b>PROCESS_INSTANCE_ID_：</b></li>
              <li><b>PROC_DEF_ID_：</b>关联流程定义ID</li>
              <li><b>EXCEPTION_STACK_ID_：</b>异常堆栈信息，关联资源ID</li>
              <li><b>EXCEPTION_MSG_：</b>异常信息描述</li>
              <li><b>DUEDATE_：</b>工作执行时间</li>
              <li><b>REPEAT_：</b></li>
              <li><b>HANDLER_TYPE_：</b></li>
              <li><b>HANDLER_CFG_：</b></li>
              <li><b>TENANT_ID_：</b></li>
            </ol>
          </li>
          <br/>
          <li id='@act_ru_event_subscr'>
            <b>事件描述表（act_ru_event_subscr）</b>
            <p>如果流程到达某个事件节点，Activiti会往ACT_RU_EVENT_SUBSCR表中加入事件描述数据，这些事件描述数据将会决定流程时间的触发。</p>
            <ol>
              <li><b>ID_：</b>主键</li>
              <li><b>REV_：</b>数据版本</li>
              <li><b>EVENT_TYPE_：</b>事件类型，不同的事件会产生不同类型的事件描述，并不是所有的事件都会产生</li>
              <li><b>EVENT_NAME_：</b>事件名称，在流程文件中定义</li>
              <li><b>EXECUTION_ID_：</b>关联流程执行ID</li>
              <li><b>PROC_INST_ID_：</b>关联流程实例ID</li>
              <li><b>ACTIVITY_ID_：</b>关联活动ID</li>
              <li><b>CONFIGURATION_：</b>事件的配置属性，该字段有可能存放流程定义ID、执行流ID或其他数据</li>
              <li><b>CREATED_：</b>事件的创建时间</li>
              <li><b>PROC_DEF_ID_：</b>关联流程定义ID</li>
              <li><b>TENANT_ID_：</b></li>
            </ol>
          </li>
          <br/>
          <li id='@act_ru_execution'>
            <b>流程执行对象表（act_ru_execution）</b>
            <p>
              当流程启动后，会产生一个流程实例，同时会产生相应的执行流， 其中流程实例、执行流数据均被保存在ACT_RU_EXECUTION表中。
            </p>
            <p>注意：如果一个流程实例只有一条执行流，那么该表中只产生一条数据，该数据即表示执行流，也表示流程实例。</p>
            <ol>
              <li><b>ID_：</b>主键</li>
              <li><b>REV_：</b>数据版本</li>
              <li><b>PROC_INST_ID_：</b>关联流程实例ID，一个流程实例有可能会产生多个执行流，该字段表示流所属的流程实例</li>
              <li><b>BUSINESS_KEY_：</b>启动流程时指定的业务主键</li>
              <li><b>PARENT_ID_：</b>父流程实例（执行流）的ID,一个流程实例可能产生执行流，新的执行流数据以该字段表示其所属的流程实例</li>
              <li><b>PROC_DEF_ID_：</b>流程定义ID</li>
              <li><b>SUPER_EXEC_：</b>父执行流的ID,一个执行流可以产生新的流程实例，该流程实例数据使用该字段标识其所属的流程实例</li>
              <li><b>ROOT_PROC_INST_ID_：</b>根流程实例ID</li>
              <li><b>ACT_ID_：</b>当前执行流行为的ID，ID在流程文件中定义</li>
              <li><b>IS_ACTIVE_：</b>执行流是否活跃的标识</li>
              <li><b>IS_CONCURRENT_：</b>执行流是否正在并行</li>
              <li><b>IS_SCOPE_：</b>是否在执行流范围内</li>
              <li><b>IS_EVENT_SCOPE_：</b>是否在事件范围内</li>
              <li><b>IS_MI_ROOT_：</b></li>
              <li><b>SUSPENSION_STATE_：</b>标识流程的中断状态</li>
              <li><b>CACHED_ENT_STATE_：</b>流程实体的缓存，取值为0~7</li>
              <li><b>TENANT_ID_：</b></li>
              <li><b>NAME_：</b>执行流名称</li>
              <li><b>START_TIME_：</b>开始时间</li>
              <li><b>START_USER_ID_：</b>关联开始用户的ID</li>
              <li><b>LOCK_TIME_：</b>解锁时间</li>
              <li><b>IS_COUNT_ENABLED_：</b></li>
              <li><b>EVT_SUBSCR_COUNT_：</b></li>
              <li><b>TASK_COUNT_：</b>任务总数</li>
              <li><b>JOB_COUNT_：</b>工作总数</li>
              <li><b>TIMER_JOB_COUNT_：</b>定时工作总数</li>
              <li><b>SUSP_JOB_COUNT_：</b></li>
              <li><b>DEADLETTER_JOB_COUNT_：</b>死信工作总数</li>
              <li><b>VAR_COUNT_：</b>变量总数</li>
              <li><b>ID_LINK_COUNT_：</b></li>
            </ol>
          </li>
          <br/>
          <li id='@act_ru_identitylink'>
            <b>流程与身份关系表（act_ru_identitylink）</b>
            <ol>
              <li><b>ID_：</b>主键</li>
              <li><b>REV_：</b>数据版本号</li>
              <li><b>GROUP_ID_：</b>关联用户组ID</li>
              <li><b>TYPE_：</b>数据类型，当前提供了3个值：assignee（指派人\组）、candidate（候选人\组）和owner（拥有人\组）</li>
              <li><b>USER_ID_：</b>关联用户ID</li>
              <li><b>TASK_ID_：</b>关联任务ID</li>
              <li><b>PROC_INST_ID_：</b>关联流程实例ID</li>
              <li><b>PROC_DEF_ID_：</b>关联流程定义ID</li>
            </ol>
          </li>
          <br/>
          <li id='@act_ru_job'>
            <b>异步工作表（act_ru_job）</b>
            <p>在流程执行的过程中，会有一些工作需要定时或者重复执行，这类工作数据被保存到ACT_RU_JOB表中。</p>
            <ol>
              <li><b>ID_：</b>主键</li>
              <li><b>REV_：</b>数据版本号</li>
              <li><b>TYPE_：</b>工作类型，值为 message 、timer</li>
              <li><b>LOCK_EXP_TIME_：</b>工作锁定的结束时间</li>
              <li><b>LOCK_OWNER_：</b>工作锁定标识，默认为UUID</li>
              <li><b>EXCLUSIVE_：</b>工作是否需要单独执行</li>
              <li><b>EXECUTION_ID_：</b>产生工作的执行流ID</li>
              <li><b>PROCESS_INSTANCE_ID_：</b>产生工作的流程实例ID</li>
              <li><b>PROC_DEF_ID_：</b>关联流程定义ID</li>
              <li><b>RETRIES_：</b>工作的剩余执行次数，默认值3</li>
              <li><b>EXCEPTION_STACK_ID_：</b>当任务执行抛出异常时，异常堆栈信息会被保存到资源表中，该ID为关系资源表中存储异常堆栈信息的数据ID</li>
              <li><b>EXCEPTION_MSG_：</b>异常的信息</li>
              <li><b>DUEDATE_：</b>工作执行时间</li>
              <li><b>REPEAT_：</b>工作重复执行的次数</li>
              <li><b>HANDLER_TYPE_：</b>标识工作的处理类型。Activiti提供了多个工作处理类用于执行工作，开发人员也可以自定义工作处理类</li>
              <li><b>HANDLER_CFG_：</b>工作的相关配置信息，可以是流程定义的ID，也可以是流程行为ID,或流程事件ID</li>
              <li><b>TENANT_ID_：</b></li>
            </ol>
          </li>
          <br/>
          <li id='@act_ru_suspended_job'>
            <b>暂停的工作（act_ru_suspended_job）</b>
            <ol>
              <li><b>ID_:</b>主键</li>
              <li><b>REV_:</b>数据版本号</li>
              <li><b>TYPE_:</b>工作类型</li>
              <li><b>EXCLUSIVE_:</b>独有的</li>
              <li><b>EXECUTION_ID_:</b>执行ID</li>
              <li><b>PROCESS_INSTANCE_ID_:</b>流程实例ID</li>
              <li><b>PROC_DEF_ID_:</b>流程定义ID</li>
              <li><b>RETRIES_:</b>工作的剩余（重试）执行次数</li>
              <li><b>EXCEPTION_STACK_ID_:</b>异常堆栈信息关联的资源ID</li>
              <li><b>EXCEPTION_MSG_:</b>异常信息描述</li>
              <li><b>DUEDATE_:</b>工作执行时间</li>
              <li><b>REPEAT_:</b>工作重复执行的次数</li>
              <li><b>HANDLER_TYPE_:</b>标识工作的处理类型</li>
              <li><b>HANDLER_CFG_:</b>工作的相关配置信息</li>
              <li><b>TENANT_ID_:</b></li>
            </ol>
          </li>
          <br/>
          <li id='@act_ru_task'>
            <b>流程任务表（act_ru_task）</b>
            <p>流程在运行过程中所产生的任务数据保存在ACT_RU_TASK表中。</p>
            <ol>
              <li><b>ID_：</b>主键</li>
              <li><b>REV_：</b>版本号</li>
              <li><b>EXECUTION_ID_：</b>任务所处的执行流ID</li>
              <li><b>PROC_INST_ID_：</b>关联的流程实例ID</li>
              <li><b>PROC_DEF_ID_：</b>关联的流程定义ID</li>
              <li><b>NAME_：</b>任务名称</li>
              <li><b>PARENT_TASK_ID_：</b>父任务名称，子任务才会设置该字段</li>
              <li><b>DESCRIPTION_：</b>描述内容</li>
              <li><b>TASK_DEF_KEY_：</b>任务定义的标识key</li>
              <li><b>OWNER_：</b>任务拥有人，没有做外键关联</li>
              <li><b>ASSIGNEE_：</b>被指派执行该任务的人，没有做外键关联</li>
              <li><b>DELEGATION_：</b>任务委托状态，有等候中和已解决两种状态</li>
              <li><b>PRIORITY_：</b>任务优先级，默认为50，类型为int(11)</li>
              <li><b>CREATE_TIME_：</b>>任务创建时间</li>
              <li><b>DUE_DATE_：</b>任务预订日期</li>
              <li><b>CATEGORY_：</b>任务种类</li>
              <li><b>SUSPENSION_STATE_：</b>暂停状态</li>
              <li><b>TENANT_ID_：</b></li>
              <li><b>FORM_KEY_：</b>表单key</li>
              <li><b>CLAIM_TIME_：</b>发布时间</li>
            </ol>
          </li>
          <br/>
          <li id='@act_ru_timer_job'>
            <b>定时的工作表（act_ru_timer_job）</b>
            <ol>
              <li><b>ID_：</b>主键</li>
              <li><b>REV_：</b>数据版本</li>
              <li><b>TYPE_：</b>工作类型</li>
              <li><b>LOCK_EXP_TIME_：</b>锁的过期时间</li>
              <li><b>LOCK_OWNER_：</b>锁的拥有者</li>
              <li><b>EXCLUSIVE_：</b>是否独有的</li>
              <li><b>EXECUTION_ID_：</b>关联的流程执行ID</li>
              <li><b>PROCESS_INSTANCE_ID_：</b>关联的流程实例ID</li>
              <li><b>PROC_DEF_ID_：</b>关联的流程定义ID</li>
              <li><b>RETRIES_：</b>工作的剩余重复次数</li>
              <li><b>EXCEPTION_STACK_ID_：</b>异常堆栈信息关联的资源ID</li>
              <li><b>EXCEPTION_MSG_：</b>异常描述信息</li>
              <li><b>DUEDATE_：</b>工作执行时间</li>
              <li><b>REPEAT_：</b>工作重复执行的次数</li>
              <li><b>HANDLER_TYPE_：</b>标识工作的处理类型</li>
              <li><b>HANDLER_CFG_：</b>工作的相关配置信息</li>
              <li><b>TENANT_ID_：</b></li>
            </ol>
          </li>
          <br/>
          <li id='@act_ru_variable'>
            <b>流程参数表（act_ru_variable）</b>
            <p>此表用来存放流程中的参数，这类参数包括流程实例参数、执行流参数和任务参数。
              因为参数可以有多种类型，因此该表有多个字段用来存放参数值，
            </p>
            <ol>
              <li><b>ID_:</b>主键</li>
              <li><b>REV_:</b>数据版本号</li>
              <li><b>TYPE_:</b>参数类型，该字段值可以为boolean、bytes、serializable、date、double
              、integer、jap-entity、long、null、short或string，还可以自定义来扩展参数类型
              </li>
              <li><b>NAME_:</b>参数名称</li>
              <li><b>EXECUTION_ID_:</b>该参数对应的执行ID，可以为null</li>
              <li><b>PROC_INST_ID_:</b>该参数对应的流程实例ID，可以为null</li>
              <li><b>TASK_ID_:</b>如果该参数是任务参数，就需要设置任务ID</li>
              <li><b>BYTEARRAY_ID_：</b>如果参数值是序列化对象，那么可以将该对象作为资源保存到资源表中，
              该字段保存资源表中数据的ID
              </li>
              <li><b>DOUBLE_:</b>参数类型为double,则值会保存在该字段中</li>
              <li><b>LONG_:</b>参数类型为long，则值会保存在该字段中</li>
              <li><b>TEXT_:</b>用于保存文本类型的参数值，该字段为varchar（4000）</li>
              <li><b>TEXT2_:</b>与TEXT_字段一样，用于保存文本类型的参数值</li>
            </ol>
          </li>
        </ul>
      </>
    );
  }
}

export default TableRuntime;
