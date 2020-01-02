import React, {Component} from 'react';
import styles from '@/utils/common.less';

/**
 * Activiti运行时数据表
 * @author fxf
 * */
class TableRuntime extends Component {
  render() {
    return (
      <>
        <blockquote id='TableRuntime' className={styles.blockquote}>Activiti运行时数据表</blockquote>
        <p>运行时数据表用来保存流程在运行中产生的数据。<code>例如：流程实例、执行流、任务</code></p>
        <ul>
          <li>
            <b>流程实例表（执行流表）（ACT_RU_EXECUTION）</b>
            <p>
              当流程启动后，会产生一个流程实例，同时会产生相应的执行流， 其中流程实例、执行流数据均被保存在ACT_RU_EXECUTION表中。
            </p>
            <p>注意：如果一个流程实例只有一条执行流，那么该表中只产生一条数据，该数据即表示执行流，也表示流程实例。</p>
            <ol>
              <li><b>ID_:</b>主键</li>
              <li><b>REV_:</b>数据版本</li>
              <li><b>PROC_INST_ID_:</b>流程实例ID，一个流程实例有可能会产生多个执行流，该字段表示流所属的流程实例</li>
              <li><b>BUSINESS_KEY_：</b>启动流程时指定的业务主键</li>
              <li><b>PARENT_ID_:</b>流程实例（执行流）的ID,一个流程实例可能产生执行流，新的执行流数据以该字段表示其所属的流程实例</li>
              <li><b>PROC_DEF_ID_:</b>流程定义数据的ID</li>
              <li><b>SUPER_EXEC_:</b>父执行流的ID,一个执行流可以产生新的流程实例，该流程实例数据使用该字段标识其所属的流程实例</li>
              <li><b>ACT_ID_:</b>当前执行流行为的ID，ID在流程文件中定义</li>
              <li><b>IS_ACTIVE_:</b>执行流是否活跃的标识</li>
              <li><b>IS_CONCURRENT_:</b>执行流是否正在并行</li>
              <li><b>IS_SCOPE_:</b>是否在执行流范围内</li>
              <li><b>IS_EVENT_SCOPE:</b>是否在事件范围内</li>
              <li><b>SUSPENSION_STATE:</b>标识流程的中断状态</li>
              <li><b>CACHED_END_STATE:</b>流程实体的缓存，取值为0~7</li>
            </ol>
          </li>
        </ul>
      </>
    );
  }
}

export default TableRuntime;
