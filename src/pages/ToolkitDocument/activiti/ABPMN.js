import React, {Component} from 'react';
import {Icon} from 'antd';
import styles from '@/utils/common.less';
import stylesUtil from '../ActivitiDocument.less';

/**
 * 工作流：BPMN知识点
 * */
class ABPMN extends Component {
  render() {
    return (
      <>
        <blockquote id='ABPMN' className={styles.blockquote}>
          BPMN模型，5类基础元素
        </blockquote>
        <ol>
          <li>
            <b>流对象（Flow Objects）</b>
            <p>
              在一个业务流程中，流对象是用于定义行为的图形元素，主要有 事件（Events）、活动（Activities）、网关（Gateways），三种流对象。
            </p>
          </li>
          <li>
            <b>数据（Data）</b>
            <p>
              主要有  数据对象（Data Object）、数据输入（Data Inputs）、数据输出（Data outputs）、数据存储（Data Stores），4个元素。
            </p>
          </li>
          <li>
            <b>连接对象（Connecting Objects）</b>
            <p>
              用于连接流对象。
              包括：顺序流（Sequence Flows）、消息流（Message Flows）、关联（Associations）、数据关联（Data Associations），4中连接方式
            </p>
          </li>
          <li>
            <b>泳道（Swimlane）</b>
            <p>
              泳道提供了2中途径组织基础的模型元素，分别为 池（Pools）、道（Lanes）
            </p>
          </li>
          <li>
            <b>制品（Artifacts）</b>
            <p>
              制品主要用于为流程提供附加信息，当前制品包括  组（Group）、注释（Text Annotation）
            </p>
          </li>
        </ol>

        <blockquote className={styles.blockquote}>BPMN元素的说明</blockquote>
        <ol>
          <li>
            <b>事件（Events）</b>
            <p>用于描述流程中发生的事件， 事件会对流程产生影响，事件 会被触发或者会产生结果。</p>
            <div className={stylesUtil.circleHollow} />
          </li>
          <li>
            <b>活动（Activities）</b>
            <p>活动是工作流中一个通用的术 语，活动包括任务（Task）和 子流程（Sub-Process）。</p>
            <div className={stylesUtil.squareHollow} />
          </li>
          <li>
            <b>网关（Gateways）</b>
            <p>网关主要用于控制流程中的顺 序流的走向，使用网关可以控 制流程进行分支与合并。</p>
            <div className={`${stylesUtil.rhombusHollow} ${styles.m30}`}/>
          </li>
          <li>
            <b>顺序流（Sequence Flow）</b>
            <p>顺序流显示流程将会执行哪个 活动。</p>
            <div>
              <div style={{float: 'left', width: '150px', height: '100%'}}>
                <div style={{ borderTop: '#000000 solid 2px', marginTop: '13px'}}/>
              </div>
              <div style={{float: 'left', width: 'calc(100% - 150px)', height: '100%'}}>
                <div className={stylesUtil.triangleRight} style={{marginLeft: '-5px'}}/>
              </div>
            </div>
          </li>
          <li>
            <b>消息流（Message Flows）</b>
            <p>消息流主要用于显示消息在流 程参与者之间的传递情况。</p>
            <div style={{display: 'flex'}}>
              <div style={{border: '#000000 solid 2px', borderRadius: '50%', width: '10px', height:'10px', marginTop: '10px'}}/>
              <div style={{display: 'flex', width: '150px', borderTop: '#000000 dotted 2px', marginTop: '14px'}}/>
              <div className={stylesUtil.triangleRight} style={{marginLeft: '-5px', width: '10px'}}/>
            </div>
          </li>
          <li>
            <b>关联（Association）</b>
            <p>用于连接流程元素及其制品（流程信息）</p>
            <div style={{borderTop: '#000000 dotted 2px', width: '150px'}}/>
            <div style={{marginTop: '20px', display: 'flex'}}>
              <div style={{borderTop: '#000000 dotted 2px', width: '150px', marginTop: 7}}/>
              <div style={{width: 20, height: 20, borderTop: '#000000 solid 2px', borderRight: '#000000 solid 2px', transform: 'rotate(45deg)', marginLeft: -16}}/>
            </div>
          </li>
          <li>
            <b>池（Pool）</b>
            <p>存放道的容器</p>
            <div style={{display: 'flex'}}>
              <div style={{width: 60, height: 25, border: '#000000 2px solid', transform: 'rotate(-90deg)', textAlign: 'center', marginTop: 18, marginRight: -19}}><p>Name</p></div>
              <div style={{width: 80, height: 60, border: '#000000 2px solid'}}/>
            </div>
          </li>
          <li>
            <b>道（Lane）</b>
            <p>用于区分 流程参与人的职能范围</p>
            <div style={{display: 'flex'}}>
              <div style={{width: 88, height: 25, border: '#000000 2px solid', transform: 'rotate(-90deg)', textAlign: 'center', marginTop: 44, marginRight: -21, marginLeft: -20}}><p>Name</p></div>
              <div>
                <div style={{border: '#000000 2px solid', transform: 'rotate(-90deg)', padding: 2, height: 70}}><p>Name</p></div>
                <div style={{border: '#000000 2px solid', transform: 'rotate(-90deg)', padding: 2, height: 70, marginTop: -27}}><p>Name</p></div>
              </div>
            </div>
          </li>
          <li>
            <b>数据对象（Data Object）</b>
            <p>表示活动需要的 或者产生的信息</p>
            <Icon type='file' style={{fontSize: 50}}/>
          </li>
          <li>
            <b>消息（Message）</b>
            <p>用于描述流程参与者 之间的沟通内容</p>
            <Icon type='mail' style={{fontSize: 50}}/>
          </li>
          <li>
            <b>组（Group）</b>
            <p>主要用于存放一些流程信息， 包括流程文档、流程分析信息 等。</p>
            <div style={{border: '#000000 dashed 2px', borderRadius: '5px', width: 80, height: 80}}/>
          </li>
          <li>
            <b>注释（Text Annotation）</b>
            <p>主要为阅读流程图的人提供附 加的文字信息。</p>
            <div style={{display: 'flex'}}>
              <div style={{width: 40, borderTop: '#000000 dashed 2px', transform: 'rotate(-45deg)', marginTop: 30}} />
              <div style={{width: 30, borderLeft: '#000000 solid 2px', borderTop: '#000000 solid 2px', borderBottom: '#000000 solid 2px', marginLeft: -14}}>流程注释</div>
            </div>
          </li>
        </ol>
      </>
    );
  }
}

export default ABPMN;
