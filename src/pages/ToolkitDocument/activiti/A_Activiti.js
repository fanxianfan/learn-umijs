import React, {Component} from 'react';
import styles from '@/utils/common.less';

/**
 * Activiti介绍
 * @author fxf
 * */
class A_Activiti extends Component {
  render() {
    return (
      <div id='A_Activiti'>
        <blockquote className={styles.blockquote}>Activiti的历程</blockquote>
        <p style={{textIndent:25}}>
          从 2010 年 5 月发布第一个 Activiti 版本至今（2017 年），Activiti 经历了近几十个版本 的演化，笔者成书时版本已经发布到 6.0.0.RC1。Activiti 采用了宽松的 Apache Licence2.0 开源协议，因此 Activiti 一出，就得到了开源社区的大力支持，在开源社区的支持下，Activiti 可以吸引到更多的工作流专家参与到该项目中，并且可以促使 Activiti 在工作流领域的创新。
        </p>
      </div>
    );
  }
}

export default A_Activiti;
