import React, {Component} from 'react';
import styles from '@/utils/common.less';


/**
 * Activiti异常
 * @author fxf
 * */
class UActivitiException extends Component {
  render() {
    return (
      <>
        <blockquote id='UActivitiException' className={styles.blockquote}>
          使用详解：异常
        </blockquote>

        <ul className={styles.childM10}>
          <li>
            <b>ActivitiWrongDbException：</b>
            当Activiti引擎发现数据库架构版本与引擎版本不匹配时抛出
          </li>
          <li>
            <b>ActivitiOptimisticLockingException：</b>
            当由于同时访问同一数据条目而在数据存储中发生乐观锁定时抛出
          </li>
          <li>
            <b>ActivitiClassLoadingException：</b>
            当找不到要加载的类或在加载时发生错误时抛出该异常
          </li>
          <li>
            <b>ActivitiObjectNotFoundException：</b>
            当请求的对象或对其执行操作的对象不存在时抛出
          </li>
          <li>
            <b>ActivitiIllegalArgumentException：</b>
            表示在Activiti API调用中提供了非法参数，在引擎的配置中配置了非法值或提供了非法值或在流程定义中使用了非法值的异常。
          </li>
          <li>
            <b>ActivitiTaskAlreadyClaimedException：</b>
            在任务已声明后，再调用taskService.claim（…）时抛出。
          </li>
        </ul>
      </>
    );
  }
}

export default UActivitiException;
