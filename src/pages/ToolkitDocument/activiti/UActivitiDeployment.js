import React, {Component} from 'react';
import styles from '@/utils/common.less';
import {Alert, Divider, Tag} from "antd";

/**
 * Activiti 流程部署
 * @author fxf
 * */
class UActivitiDeployment extends Component {
  render() {
    return (
      <>
        <blockquote id={'UActivitiDeployment'} className={styles.blockquote}>使用详解：流程部署</blockquote>
        <div>
          <Tag color={'red'}>部署流程所需的资源包含哪些？</Tag>
          <ol>
            <li>流程文档: .bpmn</li>
            <li>图片：根据流程文档生成的流程图片</li>
            <li>Drools规则文件：.drl</li>
            <li>Form表单文件：.form</li>
          </ol>

          <Tag color={'blue'}>部署流程的整个的生命周期？</Tag>
          <ol>
            <li>定义流程文档</li>
            <li>启动流程引擎，ProcessEngine</li>
            <li>部署流程文档</li>
            <li>添加缓存信息</li>
          </ol>
          <Divider/>
          <Alert type={'info'} message={'部署流程的核心代码'} showIcon/>
          <p style={{
            textIndent: 30,
            marginTop: 15,
            borderTop: '#000000 dotted 1px',
            borderBottom: '#000000 dotted 1px'
          }}>
            <code>
              <b>DeploymentBuilder deploymentBuilder= this.repositoryService.createDeployment();</b>
            </code>
          </p>
          <p style={{textIndent: 30, marginTop: 10}}>
            DeploymentBuilder类是部署流程的核心类，通过核心类可以对流程进行部署，其中repositoryService是通过ProcessEngine对象获取，其中ProcessEngine是通过流程引擎配置对象获取。
          </p>
          <ol>
            <li>
              <Tag color={'blue'}>通过流的方式部署资源文件</Tag>
              <br/>
              <code>public abstract DeploymentBuilder addInputStream(String s, java.io.InputStream inputStream)</code>
            </li>
            <li>
              <Tag color={'blue'}>通过资源文件所在的classpath进行部署</Tag>
              <br/>
              <code>public abstract DeploymentBuilder addClasspathResource(String s)</code>
            </li>
            <li>
              <Tag color={'blue'}>通过字符串的方式部署</Tag>
              <br/>
              <code>public abstract DeploymentBuilder addString(String s, String s1)</code>
            </li>
            <li>
              <Tag color={'blue'}>通过字节数组的方式部署</Tag>
              <br/>
              <code>public abstract DeploymentBuilder addBytes(String s, byte[] bytes)</code>
            </li>
            <li>
              <Tag color={'blue'}>通过压缩流ZipInputStream部署</Tag>
              <br/>
              <code>public abstract DeploymentBuilder addZipInputStream(java.util.zip.ZipInputStream
                zipInputStream)</code>
            </li>
            <li>
              <Tag color={'blue'}>通过BpmnModel对象部署</Tag>
              <br/>
              <code>public abstract DeploymentBuilder addBpmnModel(String s, org.activiti.bpmn.model.BpmnModel
                bpmnModel)</code>
            </li>
          </ol>
          <p style={{textIndent: 30}}>
            最后部署流程使用方法：<code><b>deploymentBuilder.deploy()</b></code>完成部署；
          </p>

          <Alert type={'info'} message={'BpmnModel部署方式'} showIcon/>
          <ul>
            <li>
              <b>构造BpmnModal</b>
              <p style={{textIndent: 30}}>
                BpmnModel是通过java类来构造流程，activiti提供了每个元素的实体类，可以直接实例化并组合构成流程实例。
              </p>
            </li>
            <li>
              <b>校验BpmnModal</b>
              <p style={{textIndent: 30}}>
                Activiti提供了校验BpmnModal实例对象的类ProcessValidatorFactory，确保实例对象转换之后的XML格式是正确的。
                代码如下：
              </p>
              <pre style={{paddingTop: 3}}>
                <ol>
                  <li>ProcessValidatorFactory validatorFactory = new ProcessValidatorFactory();</li>
                  <li>List&le;ValidationError&gt; errorLs = validatorFactory.createDefaultProcessValidator().validate(new BpmnModel());</li>
                </ol>
              </pre>
              <p style={{textIndent: 30}}>
                如果errorLs的结果长度为0，则代表校验通过，否则没有校验通过。
              </p>
            </li>
            <li>
              <b>BpmnModal转换为流程文档</b>
              <p>BpmnXMLConverter类</p>
            </li>
          </ul>

        </div>
        <br/>
      </>
    );
  }
}

export default UActivitiDeployment;
