import React, {Component} from 'react';
import styles from '@/utils/common.less';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {monokai} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {Tag} from "antd";

/**
 * Activiti历史记录
 * @author fxf
 * */
class UActivitiHistory extends Component {
  render() {
    return (
      <>
        <blockquote id='UActivitiHistory' className={styles.blockquote}>使用详解：Activiti的历史记录</blockquote>
        <p className={styles.textIndent30}>
          历史记录是捕获流程执行过程中发生的事情并将其永久存储的组件。与运行时数据相比，历史数据将在流程实例完成后仍保留在DB中。
        </p>
        <br/>
        <h4 className={styles.headerTitle}>5个承载历史记录的<b>实体类</b></h4>
        <ul className={styles.childM10}>
          <li><Tag color={'volcano'}>HistoricProcessInstance</Tag> 接口，包含有关当前和过去流程实例的信息。</li>
          <li><Tag color={'volcano'}>HistoricVariableInstance</Tag> 接口，包含过程变量或任务变量的最新值</li>
          <li><Tag color={'volcano'}>HistoricActivityInstance</Tag> 接口，包含有关活动的单个执行的信息（流程中的节点）</li>
          <li><Tag color={'volcano'}>HistoricTaskInstance</Tag> 接口，包含有关当前和过去（已完成和已删除）任务实例的信息。</li>
          <li><Tag color={'volcano'}>HistoricDetail</Tag> 接口，包含历史流程实例，活动实例或任务实例相关的各种信息。</li>
        </ul>

        <h4 className={styles.headerTitle}>4个历史记录等级</h4>
        <ul className={styles.childM10}>
          <li><Tag color={'#108ee9'}>none</Tag>，跳过所有历史记录归档。这是运行时流程执行的最高性能，但是没有历史信息可用。</li>
          <li><Tag color={'#108ee9'}>activity</Tag>，存档所有流程实例和活动实例。没有详细信息将被存档。</li>
          <li><Tag color={'#108ee9'}>audit</Tag>，这是默认值。它存档所有流程实例，活动实例，使变量值连续不断地保持同步，并提交所有表单属性，以便通过表单进行的所有用户交互都是可追溯的，并且可以进行审核。</li>
          <li><Tag color={'#108ee9'}>full</Tag>，记录所有可能的详情信息，包括过程变量更新。但是执行效率最低。</li>
        </ul>
        <SyntaxHighlighter language={'java'} style={monokai}>
          {
            '//配置方法\n' +
            'StandaloneProcessEngineConfiguration configuration = new StandaloneProcessEngineConfiguration();\n' +
            '//配置历史记录等级为：audit\n' +
            'configuration.setHistoryLevel(HistoryLevel.AUDIT);'
          }
        </SyntaxHighlighter>
      </>
    );
  }
}

export default UActivitiHistory;
