import React, {Component} from 'react';
import styles from '@/utils/common.less';

/**
 * Activiti邮箱功能
 * @author fxf
 * */
class UActivitiMail extends Component {
  render() {
    return (
      <>
        <blockquote id='UActivitiMail' className={styles.blockquote}>使用详解：邮件配置与使用</blockquote>
        <p>
          配置邮件服务器是可选的。 Activiti支持在业务流程中发送电子邮件。要实际发送电子邮件，需要有效的SMTP邮件服务器配置。
        </p>
      </>
    );
  }
}

export default UActivitiMail;
