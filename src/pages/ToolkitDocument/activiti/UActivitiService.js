import React, {Component} from 'react';
import styles from '@/utils/common.less';
import {Collapse, Icon} from 'antd';

/**
 * Activiti服务
 * @author fxf
 * */
class UActivitiService extends Component {
  render() {
    return (
      <>
        <blockquote id='UActivitiService' className={styles.blockquote}>
          使用详解：Activiti的服务API对象
        </blockquote>
        <p className={styles.textIndent30}>
          从ProcessEngine对象中，可以获取包含工作流/ BPM方法的各种服务。
          ProcessEngine和服务对象是线程安全的。因此，您可以为整个服务器保留对其中之一的引用。
        </p>
        <p className={styles.textIndent30}>
          所有服务都是无状态的。这意味着您可以轻松地在群集中的多个节点上运行Activiti，每个节点都访问同一数据库，而不必担心哪台计算机实际执行了先前的调用。
        </p>
        <Collapse expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
          {/*------------------------------------------------------------------------------*/}
          <Collapse.Panel key={'RepositoryService'} header={'RepositoryService 存储服务'}>
            <p className={styles.textIndent30}>
              RepositoryService是第一个需要的服务。此服务提供用于管理和操纵部署和流程定义的操作。
            </p>
            <p className={styles.textIndent30}>
              部署是Activiti引擎中打包的单位。一个部署可以包含多个BPMN 2.0 xml文件和任何其他资源。部署意味着将其上载到引擎，检查并解析所有流程，然后再将它们存储在数据库中。
            </p>
            <ol>
              操作包含：
              <li>查询引擎已知的部署和流程定义。</li>
              <li>挂起并激活整个部署或特定流程定义。（挂起表示无法对其进行进一步的操作，而激活是相反的操作。）</li>
              <li>检索各种资源，(例如部署中包含的文件或引擎自动生成的流程图。)</li>
              <li>检索流程定义的POJO版本</li>
            </ol>
          </Collapse.Panel>
          {/*------------------------------------------------------------------------------*/}
          <Collapse.Panel key={'RuntimeService'} header={'RuntimeService 运行时服务'}>
            <p className={styles.textIndent30}>
              只要流程实例正在等待外部触发器并且需要继续流程，就使用RuntimeService。
            </p>
            <p className={styles.textIndent30}>
              一个流程实例可以具有各种等待状态，并且该服务包含各种操作，以向该实例发出信号，表示已接收到外部触发器，并且该流程实例可以继续。
            </p>
          </Collapse.Panel>
          {/*------------------------------------------------------------------------------*/}
          <Collapse.Panel key={'TaskService'} header={'TaskService 任务服务'}>
            <ol>
              <li>查询分配给用户或组的任务</li>
              <li>创建新的独立任务。这些是与流程实例无关的任务。</li>
              <li>操纵任务分配给哪个用户或该任务涉及某种用户。</li>
              <li>声明并完成任务。声明意味着某人决定担任该任务的受让人，这意味着该用户将完成任务。完成意味着完成任务的工作。通常，这是一种形式的填充。</li>
            </ol>
          </Collapse.Panel>
          {/*------------------------------------------------------------------------------*/}
          <Collapse.Panel key={'IdentityService'} header={'IdentityService 身份服务'}>
            <p className={styles.textIndent30}>
              它允许对群组和用户进行管理（创建，更新，删除，查询等）。
            </p>
            <p className={styles.textIndent30}>
              注意，Activiti实际上在运行时不会对用户进行任何检查。例如，可以将任务分配给任何用户，但是引擎不会验证系统是否知道该用户。
              这是因为Activiti引擎也可以与LDAP(轻量级目录访问协议)，Active Directory(活动目录)等服务结合使用。
            </p>
          </Collapse.Panel>
          {/*------------------------------------------------------------------------------*/}
          <Collapse.Panel key={'HistoryService'} header={'HistoryService 历史服务'}>
            <p className={styles.textIndent30}>
              HistoryService用于使用Activiti引擎收集的所有历史数据。
            </p>
            <p className={styles.textIndent30}>
              在执行流程时，引擎可以保存很多数据（这是可配置的），例如流程实例的启动时间，谁执行了哪些任务，完成任务所花的时间，每个流程实例遵循的路径等。
            </p>
          </Collapse.Panel>
          {/*------------------------------------------------------------------------------*/}
          <Collapse.Panel key={'FormService'} header={'FormService 表单服务'}>
            <p className={styles.textIndent30}>
              FormService是一项可选服务。Activiti无需它即可完美使用，而不会牺牲任何功能。
            </p>
            <p className={styles.textIndent30}>
              该服务介绍了启动表单和任务表单的概念。起始表单是在流程实例启动之前向用户显示的表单，而任务表单是在用户想要填写表单时显示的表单。
              Activiti允许在BPMN 2.0流程定义中定义这些形式。该服务以一种简单的方式公开此数据。但是，这又是可选的，因为表单不需要嵌入流程定义中。
            </p>
          </Collapse.Panel>
          {/*------------------------------------------------------------------------------*/}
          <Collapse.Panel key={'ManagementService'} header={'ManagementService 管理服务'}>
            <p className={styles.textIndent30}>
              使用Activiti编码自定义应用程序时，通常不需要ManagementService。它允许检索有关数据库表和表元数据的信息。
            </p>
            <p className={styles.textIndent30}>
              此外，它公开了作业的查询功能和管理操作。Job在Activiti中用于各种用途，例如计时器，异步继续，延迟的挂起/激活等。
            </p>
          </Collapse.Panel>
          {/*------------------------------------------------------------------------------*/}
          <Collapse.Panel key={'DynamicBpmnService'} header={'DynamicBpmnService 动态BPMN服务'}>
            <p className={styles.textIndent30}>
              DynamicBpmnService可用于更改流程定义的一部分，而无需重新部署它。
              例如，您可以更改流程定义中用户任务的分配者，或更改服务任务的类名。
            </p>
          </Collapse.Panel>
          {/*------------------------------------------------------------------------------*/}
        </Collapse>
        <br/>
      </>
    );
  }
}

export default UActivitiService;
