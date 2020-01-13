import React, {Component} from 'react';
import styles from '@/utils/common.less';
import {Divider} from "antd";

/**
 * 设计模式：命令模式
 * @author fxf
 * */
class CModeOrder extends Component {
  render() {
    return (
      <>
        <blockquote id='CModeOrder' className={styles.blockquote}>
          Activiti的命令模式
        </blockquote>
        <div>
          <p className={styles.textIndent30}>
            命令模式属于行为型模式。
          </p>
          <p className={styles.textIndent30}>
            它把一个请求或者操作封装到命令 对象中，这些请求或者操作内容包括接收者信息，
            然后将该命令对象交由执行者执行， 执行者不需要关心命令的接收人或者命令的具体内容，
            因为这些信息均被封装到命令对象中。
          </p>
          <Divider/>
          <p>
            <b>命令模式中的角色</b>
          </p>
          <ul>
            <li> 命令接口（Command）：声明执行操作的接口。 </li>
            <li> 接口实现（ConcreteCommand）：命令接口实现，需要保存接收者的相应操作，并执行相应的操作。 </li>
            <li> 命令执行者（Invoker）：要求命令执行此次请求。</li>
            <li> 命令接收人（Receiver）：由命令的实现维护实例，并在命令执行时处理相应的任务。 </li>
          </ul>
        </div>
      </>
    );
  }
}

export default CModeOrder;
