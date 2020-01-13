import React, {Component} from 'react';
import styles from '@/utils/common.less';
import activitiEngine from '../images/activitiEngine.png';

/**
 * Activiti引擎多租户方案
 * @author fxf
 * */
class EngineTenant extends Component {
  render() {
    return (
      <>
        <blockquote id='EngineTenant' className={styles.blockquote}>Activiti引擎的多租户方案</blockquote>
        <div>
          <p className={styles.textIndent30}>Activiti租户也就是TENANT_ID_（tenantId）。该值主要用于记录启动的流程实例归属于哪个系统，
            比如a，b，c三个系统都有一个请假流程并且数据存储在同一个数据库，这个时候就应该考虑如何区分这三个流程了。
          </p>
          <p className={styles.textIndent30}>
            Activiti5.15版本中增加了多租户的概念，该功能主要用于<strong>数据共享在一个数据库</strong>的使用场景。
            一个或者多个的引擎但是他们使用的数据库为同一个。
            因此操作的时候需要区分这些数据（部署的流程资源）的来源，以方便程序后续的处理。
            因为只需要将tenantId理解为一个标记即可，其本身也没有更多的含义，仅仅是标记而已。
          </p>
          <p className={styles.textIndent30}>
            开发人员使用的时候，往往希望更少的配置达到更好的效果，因此Activiti提供了多引擎多租户的功能，一个引擎实例支撑整个（或者多喝）数据库的操作。那么引擎是如何处理的呢？
            一个引擎操作多个数据库：第一需要有路由规则，比如a租户的存在在a库，b租户的数据存储在b库等等。
          </p>
          <img src={activitiEngine} alt='多引擎多租户' style={{width: '100%', height: 'auto', maxWidth: 450}}/>
          <p className={styles.textIndent30}>
            通过一个引擎来管理和配置API能完全的达到效果，但不同的地方是数据之间是相互隔离的（类似多租户多引擎，但其实只有一个引擎来工作）。
            这样开发人员只需要配置和管理不同的数据库即可。引擎会自动根据tenantId查找到其对应的资源。
          </p>
        </div>
      </>
    );
  }
}

export default EngineTenant;
