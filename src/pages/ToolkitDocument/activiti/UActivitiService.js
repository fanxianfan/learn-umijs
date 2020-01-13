import React, {Component} from 'react';
import styles from '@/utils/common.less';

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

        <h4 className={styles.headerTitle}>
          RepositoryService
        </h4>
        <p>
          RepositoryService是第一个需要的服务。此服务提供用于管理和操纵部署和流程定义的操作。
        </p>
        <p>
          部署是Activiti引擎中打包的单位。一个部署可以包含多个BPMN 2.0 xml文件和任何其他资源。部署意味着将其上载到引擎，检查并解析所有流程，然后再将它们存储在数据库中。
        </p>
        <ol>
          操作包含：
          <li>查询引擎已知的部署和流程定义。</li>
          <li>挂起并激活整个部署或特定流程定义。（挂起表示无法对其进行进一步的操作，而激活是相反的操作。）</li>
          <li>检索各种资源，(例如部署中包含的文件或引擎自动生成的流程图。)</li>
          <li>检索流程定义的POJO版本</li>
        </ol>

        <h4 className={styles.headerTitle}>
          RuntimeService
        </h4>
        <p>
          只要流程实例正在等待外部触发器并且需要继续流程，就使用RuntimeService。
        </p>
        <p>
          一个流程实例可以具有各种等待状态，并且该服务包含各种操作，以向该实例发出信号，表示已接收到外部触发器，并且该流程实例可以继续。
        </p>

        <h4 className={styles.headerTitle}>
          TaskService
        </h4>
        <ol>
          <li>查询分配给用户或组的任务</li>
          <li>创建新的独立任务。这些是与流程实例无关的任务。</li>
          <li>操纵任务分配给哪个用户或该任务涉及某种用户。</li>
          <li>声明并完成任务。声明意味着某人决定担任该任务的受让人，这意味着该用户将完成任务。完成意味着完成任务的工作。通常，这是一种形式的填充。</li>
        </ol>

        <h4 className={styles.headerTitle}>
          IdentityService
        </h4>
        <p>

        </p>

        <h4 className={styles.headerTitle}>
          FormService
        </h4>
        <p>

        </p>

        <h4 className={styles.headerTitle}>
          HistoryService
        </h4>
        <p>

        </p>

        <h4 className={styles.headerTitle}>
          ManagementService
        </h4>
        <p>

        </p>

        <h4 className={styles.headerTitle}>
          DynamicBpmnService
        </h4>
      </>
    );
  }
}

export default UActivitiService;
