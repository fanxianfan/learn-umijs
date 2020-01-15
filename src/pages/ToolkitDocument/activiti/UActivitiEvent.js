import React, {Component} from 'react';
import {Table} from 'antd';
import styles from '@/utils/common.less';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {monokai} from 'react-syntax-highlighter/dist/esm/styles/hljs';

const columns = [
  {dataIndex: 'name', title: "名称"},
  {dataIndex: 'desc', title: "描述"},
  {dataIndex: "classes", title: "事件类"}
];

const dataSource = [
  {
    key: "ENGINE_CREATED",
    name: "ENGINE_CREATED",
    desc: "侦听器所附加的流程引擎已经创建",
    classes: "​ActivitiEvent"
  },
  {
    key: "ENGINE_CLOSED",
    name: "ENGINE_CLOSED",
    desc: "侦听器所连接的流程引擎已关闭",
    classes: "​ActivitiEvent"
  },
  {
    key: "ENTITY_CREATED",
    name: "ENTITY_CREATED",
    desc: "创建一个新实体",
    classes: "​ActivitiEntityEvent"
  },
  {
    key: "ENTITY_INITIALIZED",
    name: "ENTITY_INITIALIZED",
    desc: "一个新的实体已经创建并完全初始化。如果在实体创建过程中创建了任何子级，则在创建/初始化子级实体后会触发此事件，而不是ENTITY_CREATE事件。",
    classes: "​ActivitiEntityEvent"
  },
  {
    key: "ENTITY_UPDATED",
    name: "ENTITY_UPDATED",
    desc: "实体被更新",
    classes: "​ActivitiEntityEvent"
  },
  {
    key: "ENTITY_DELETED",
    name: "ENTITY_DELETED",
    desc: "现有实体被删除",
    classes: "​ActivitiEntityEvent"
  },
  {
    key: "ENTITY_SUSPENDED",
    name: "ENTITY_SUSPENDED",
    desc: "现有实体已被暂停",
    classes: "​ActivitiEntityEvent"
  },
  {
    key: "ENTITY_ACTIVATED",
    name: "ENTITY_ACTIVATED",
    desc: "现有实体已激活。",
    classes: "​ActivitiEntityEvent",
  },
  {
    key: "JOB_EXECUTION_SUCCESS",
    name: "JOB_EXECUTION_SUCCESS",
    desc: "作业已成功执行。",
    classes: "​ActivitiEntityEvent",
  },
  {
    key: "JOB_EXECUTION_FAILURE",
    name: "JOB_EXECUTION_FAILURE",
    desc: "作业执行失败/异常",
    classes: "​ActivitiEntityEvent && ActivitiExceptionEvent",
  },
  {
    key: "JOB_RETRIES_DECREMENTED",
    name: "JOB_RETRIES_DECREMENTED",
    desc: "由于作业失败，作业重试次数已减少。",
    classes: "​ActivitiEntityEvent",
  },
  {
    key: "TIMER_FIRED",
    name: "TIMER_FIRED",
    desc: "计时器已被触发",
    classes: "​ActivitiEntityEvent"
  },
  {
    key: "JOB_CANCELED",
    name: "JOB_CANCELED",
    desc: "作业已被取消。",
    classes: "​ActivitiEntityEvent"
  },
  {
    key: "ACTIVITY_STARTED",
    name: "ACTIVITY_STARTED",
    desc: "活动开始执行",
    classes: "ActivitiActivityEvent"
  },
  {
    key: "ACTIVITY_COMPLETED",
    name: "ACTIVITY_COMPLETED",
    desc: "活动成功完成",
    classes: "ActivitiActivityEvent"
  },
  {
    key: "ACTIVITY_CANCELLED",
    name: "ACTIVITY_CANCELLED",
    desc: "活动被取消。",
    classes: "ActivitiActivityCancelledEvent"
  },
  {
    key: "ACTIVITY_SIGNALED",
    name: "ACTIVITY_SIGNALED",
    desc: "活动收到信号",
    classes: "​ActivitiSignalEvent"
  },
  {
    key: "ACTIVITY_MESSAGE_RECEIVED",
    name: "ACTIVITY_MESSAGE_RECEIVED",
    desc: "活动收到一条消息",
    classes: "ActivitiMessageEvent"
  },
  {
    key: "UNCAUGHT_BPMN_ERROR",
    name: "UNCAUGHT_BPMN_ERROR",
    desc: "引发了未捕获的BPMN错误。这个流程没有任何处理程序来处理这个特定的错误。活动的activityId将为空。",
    classes: "​ActivitiErrorEvent"
  },
  {
    key: "ACTIVITY_COMPENSATE",
    name: "ACTIVITY_COMPENSATE",
    desc: "活动即将得到补偿。",
    classes: "ActivitiActivityEvent"
  },
  {
    key: "VARIABLE_CREATED",
    name: "VARIABLE_CREATED",
    desc: "变量已创建。",
    classes: "ActivitiVariableEvent"
  },
  {
    key: "VARIABLE_UPDATED",
    name: "VARIABLE_UPDATED",
    desc: "现有变量已更新。",
    classes: "ActivitiVariableEvent"
  },
  {
    key: "VARIABLE_DELETED",
    name: "VARIABLE_DELETED",
    desc: "现有变量已被删除。",
    classes: "ActivitiVariableEvent"
  },
  {
    key: "TASK_ASSIGNED",
    name: "TASK_ASSIGNED",
    desc: "任务已分配给用户",
    classes: "​ActivitiEntityEvent"
  },
  {
    key: "TASK_CREATED",
    name: "TASK_CREATED",
    desc: "任务已创建。这是在ENTITY_CREATE事件之后调度的。如果任务是流程的一部分，则在执行任务侦听器之前将触发此事件。",
    classes: "​ActivitiEntityEvent"
  },
  {
    key: "TASK_COMPLETED",
    name: "TASK_COMPLETED",
    desc: "任务已完成。这是在ENTITY_DELETE事件之前调度的。如果任务是流程的一部分，则将在流程继续进行之前触发此事件，然后将触发ACTIVITY_COMPLETE事件，该事件的目标是代表已完成任务的活动。",
    classes: "​ActivitiEntityEvent"
  },
  {
    key: "PROCESS_COMPLETED",
    name: "PROCESS_COMPLETED",
    desc: "一个流程已经完成。在上一个活动ACTIVITY_COMPLETED事件之后调度",
    classes: "​ActivitiEntityEvent"
  },
  {
    key: "PROCESS_CANCELLED",
    name: "PROCESS_CANCELLED",
    desc: "进程已被取消。在从运行时删除流程实例之前调度。RuntimeService.deleteProcessInstance将触发此事件",
    classes: "ActivitiCancelledEvent"
  },
  {
    key: "MEMBERSHIP_CREATED",
    name: "MEMBERSHIP_CREATED",
    desc: "用户已添加到组中。",
    classes: "ActivitiMembershipEvent"
  },
  {
    key: "MEMBERSHIP_DELETED",
    name: "MEMBERSHIP_DELETED",
    desc: "用户已从组中删除。",
    classes: "ActivitiMembershipEvent"
  },
  {
    key: "MEMBERSHIPS_DELETED",
    name: "MEMBERSHIPS_DELETED",
    desc: "所有成员将从组中删除。在删除成员之前引发该事件，因此仍然可以访问它们。如果出于性能原因立即删除所有成员，则不会引发单独的MEMBERSHIP_DELETED事件。",
    classes: "ActivitiMembershipEvent"
  }
];

/**
 * Activiti的事件
 * @author fxf
 * */
class UActivitiEvent extends Component {
  render() {
    return (
      <>
        <blockquote id='UActivitiEvent' className={styles.blockquote}>
          使用详解：事件
        </blockquote>
        <ul>
          {/*------------------------------------------------------------------------------*/}
          <li>
            <h4 className={styles.headerTitle}>监听器必须实现的接口</h4>
            <p className={styles.textIndent30}>
              事件侦听器具有的唯一要求是实现<b>org.activiti.engine.delegate.event.ActivitiEventListener</b>
            </p>
            <p className={styles.textIndent30}>
              如果分派事件时<b>onEvent（..）</b>方法发生异常，则isFailOnException（）方法将确定异常行为。
              如果返回<b>false</b>，则忽略该异常。当返回<b>true</b>时，异常将不被忽略并冒泡，从而有效地使当前正在进行的命令失败。
              如果该事件是API调用（或任何其他事务性操作，例如作业执行）的一部分，则事务将回滚。
              如果事件监听器中的行为不是关键业务，建议返回false。
            </p>
            <p className={styles.textIndent30}>
              Activiti已经提供一个基础事件监听器类<b>org.activiti.engine.delegate.event.BaseEntityEventListener</b>
            </p>
            <SyntaxHighlighter language={'java'} style={monokai}>
              {
                'public class EventDefinedListener implements ActivitiEventListener {\n' +
                '\n' +
                '    @Override\n' +
                '    public void onEvent(ActivitiEvent activitiEvent) {\n' +
                '    }\n' +
                '    @Override\n' +
                '    public boolean isFailOnException() {\n' +
                '        return false;\n' +
                '    }\n' +
                '}'
              }
            </SyntaxHighlighter>
          </li>
          {/*------------------------------------------------------------------------------*/}
          <li>
            <h4 className={styles.headerTitle}>项目配置时期：添加事件监听器</h4>
            <p className={styles.textIndent30}>
              项目配置阶段可以直接配置多个<b>流程事件监听器</b>，代码如下。
              调度事件的顺序取决于监听器的添加顺序。
            </p>
            <SyntaxHighlighter language={'java'} style={monokai}>
              {
                'public ProcessEngineConfigurationImpl setEventListeners(java.util.List<ActivitiEventListener> eventListeners)'
              }
            </SyntaxHighlighter>
          </li>
          {/*------------------------------------------------------------------------------*/}
          <li>
            <h4 className={styles.headerTitle}>流程运行时期：添加事件监听器</h4>
            <p className={styles.textIndent30}>
              RuntimeService的API提供了事件监听器的操作。请注意：重新启动引擎后，在运行时添加的侦听器不会被保留。
            </p>
            <SyntaxHighlighter language={'java'} style={monokai}>
              {
                ' public abstract void addEventListener(ActivitiEventListener activitiEventListener)\n' +
                ' public abstract void addEventListener(ActivitiEventListener activitiEventListener,ActivitiEventType... activitiEventTypes)\n' +
                ' public abstract void removeEventListener(ActivitiEventListener activitiEventListener)\n'
              }
            </SyntaxHighlighter>
          </li>
          {/*------------------------------------------------------------------------------*/}
          <li>
            <h4 className={styles.headerTitle}>流程定义时期：添加事件监听器</h4>
            <ul>
              下面是定义示例描述：
              <li>1）定义了2个监听器。</li>
              <li>2）第一个监听器指定了自己的实现类，并且接收任何类型的事件。</li>
              <li>2）第二个监听器只接收执行成功 || 执行失败的事件，并由配置的bean来处理。</li>
            </ul>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<process id="testEventListeners">\n' +
                '  <extensionElements>\n' +
                '    <activiti:eventListener class="org.activiti.engine.test.MyEventListener" />\n' +
                '    <activiti:eventListener delegateExpression="${testEventListener}" events="JOB_EXECUTION_SUCCESS,JOB_EXECUTION_FAILURE" />\n' +
                '  </extensionElements>\n' +
                '  ...\n' +
                '</process>'
              }
            </SyntaxHighlighter>
            <b>定义监听器的注意事项：</b>
            <ol className={styles.childM5}>
              <li>
                事件侦听器只能在<b>{'<process>'}</b>元素上声明，作为<b>{'<extensionElements>'}</b>的子元素。
              </li>
              <li>
                与其他表达式（例如在网关中）一样，在委托表达式中使用的表达式无法访问执行上下文。
                它们只能引用在流程引擎配置的<b>bean</b>属性中定义的<b>bean</b>，或者在使用<b>spring</b>（并且不存在bean属性）时引用实现了侦听器接口的任何<b>spring-bean</b>。
              </li>
              <li>
                使用侦听器的class属性时，只会创建该类的单个实例。目的是确保从多个线程/上下文安全使用。
              </li>
              <li>
                如果在<b>events</b>属性中使用了非法的事件类型或使用了非法的<b>throwEvent</b>值，则在部署流程定义时将引发异常。
                如果提供了非法的<b>class</b>或委托执行的非法值（如不存在的类，不存在的<b>bean</b>引用或未实现侦听器接口的委托），则在进程启动时引发异常。
                要确保所引用的类在类路径上，并且表达式解析为有效实例。
              </li>
            </ol>
          </li>
          {/*------------------------------------------------------------------------------*/}
          <li>
            <h4 className={styles.headerTitle}>主动分发事件</h4>
            <p>
              我们通过API开放了事件分发机制，以允许您将自定义事件分发给在引擎中注册的所有侦听器。调用类为RuntimeService。
            </p>
            <SyntaxHighlighter language={'java'} style={monokai}>
              {'public abstract void dispatchEvent(ActivitiEvent activitiEvent)'}
            </SyntaxHighlighter>
          </li>
          {/*------------------------------------------------------------------------------*/}
          <li>
            <h4 className={styles.headerTitle}>所有事件类型枚举</h4>
            <p>枚举类<b>org.activiti.engine.delegate.event.ActivitiEventType</b></p>
            <Table bordered={true} columns={columns} dataSource={dataSource}/>
          </li>
        </ul>
      </>
    );
  }
}

export default UActivitiEvent;
