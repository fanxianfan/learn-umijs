import React, {Component} from 'react';
import styles from '@/utils/common.less';
import {Divider} from "antd";

/**
 * Activiti设计模式：责任链
 * @author fxf
 * */
class CModeChain extends Component {
  render() {
    return (
      <>
        <blockquote id='CModeChain' className={styles.blockquote}>
          Activiti的责任链模式
        </blockquote>
        <div>
          <p style={{textIndent:30}}>
            命令模式属于行为型模式
          </p>
          <p style={{textIndent:30}}>
            该设计模式为了让多个对象都有机会处理请求，从而避免了请求发送者和请求接收者之间的耦合。
            这些请求接收者将组成一条，并沿着这条链传递该请求，直到有一个对象处理这个请求为止，这就形成一条责任链
          </p>
          <Divider/>
          <p>
            <b>责任链的参与者</b>
          </p>
          <ul>
            <li>请求处理者接口（Handler）：定义一个处理请求的接口，可以实现后继链。</li>
            <li>请求处理者实现（ConcreteHandler）：请求处理接口的实现，如果它可以处理请 求，就处理，否则就将该请转发给它的后继者。</li>
          </ul>
        </div>
      </>
    );
  }
}

export default CModeChain;
