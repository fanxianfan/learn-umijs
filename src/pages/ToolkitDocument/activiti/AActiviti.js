import React, {Component} from 'react';
import styles from '@/utils/common.less';
import activitiLogin from '../images/activitiLogin.png';
import activitiHome from '../images/activitiHome.png';

/**
 * Activiti介绍
 * @author fxf
 * */
class AActiviti extends Component {
  render() {
    return (
      <>
        <blockquote id='AActiviti' className={styles.blockquote}>Activiti的历程</blockquote>
        <p style={{textIndent: 25}}>
          Activiti 的创始人 Tom Baeyens 是 jBPM 的创始人，由于在 jBPM 的未来架构上产生意见分歧，
          TomBaeyens 在 2010 年离开了 JBoss 并加入 Alfresco 公司，而在 2010 年的 5 月，
          Tom Baeyens 发布了第一个 Activiti 版本（5.0alpha1）。
        </p>
        <p>之后的jBPM5 完全放弃了 jBPM4 的架构，并基于 Drools Flow 重新开发</p>

        <blockquote className={styles.blockquote}>Activiti的使用介绍</blockquote>
        <ol>
          <li>
            <b>下载源码</b>
            <p>去官网下载，activiti源码包，
              <a href='https://github.com/Activiti/Activiti/releases?after=7-201712-EA' rel='noopener noreferrer' target='_blank'>https://github.com/Activiti/Activiti</a>
            </p>
            <p>查看官方文档，
              <a href='https://www.activiti.org/userguide' rel='noopener noreferrer' target='_blank'>https://www.activiti.org/userguide/</a>
            </p>
          </li>
          <li>
            <b>解压并部署</b>
            <p>解压压缩包，将三个war包放入tomcat服务器中，并启动，即可访问http://localhost:8080/activiti-app</p>
            <p>默认用户：admin</p>
            <p>默认密码：test</p>
            <img src={activitiLogin} alt='登录图片' width='100%' height='auto'/>
          </li>
          <br/>
          <li>
            <b>首页介绍</b>
            <p>主界面的三个菜单功能</p>
            <ul>
              <li>
                <strong>Kickstart App：</strong>主要用于流程模型管理、表单管理及应用（App）管理，一个应用 可以包含多个流程模型，应用可发布给其他用户使用。
              </li>
              <li>
                <strong>Task App：</strong>用于管理整个 activiti-app 的任务，在该功能里面也可以启动流程
              </li>
              <li>
                <strong>Idenity management：</strong>身份信息管理，可以管理用户、用户组等数据。
              </li>
            </ul>
            <img src={activitiHome} alt='首页图片' width='100%' height='auto'/>
          </li>
        </ol>
      </>
    );
  }
}

export default AActiviti;
