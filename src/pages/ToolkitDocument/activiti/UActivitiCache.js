import React, {Component} from 'react';
import styles from '@/utils/common.less';
import {monokai} from "react-syntax-highlighter/dist/esm/styles/hljs";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";

/**
 * Activiti缓存
 * @author fxf
 * */
class UActivitiCache extends Component {
  render() {
    return (
      <>
        <blockquote id='UActivitiCache' className={styles.blockquote}>使用详解：Activiti的缓存</blockquote>
        <p style={{textIndent: 30}}>
          所有流程定义都会在解析之后进行缓存，以避免每次需要流程定义时都访问数据库。（因为流程定义数据不会更改）
        </p>
        <br/>
        <h4 className={styles.headerTitle}>代码配置缓存：设置缓存个数</h4>
        <SyntaxHighlighter language={'java'} style={monokai}>
          {
            '//设置此属性会将默认哈希映射缓存，并且使用LRU（选择最久未使用的页面予以淘汰）置换算法更新缓存;\n' +
            '//配置缓存个数为100;\n' +
            'configuration.setProcessDefinitionCacheLimit(100);'
          }
        </SyntaxHighlighter>
        <br/>
        <h4 className={styles.headerTitle}>代码配置缓存：自定义缓存实现</h4>
        <SyntaxHighlighter language={'java'} style={monokai}>
          {
            'public ProcessEngineConfigurationImpl setProcessDefinitionCache(DeploymentCache<ProcessDefinitionCacheEntry> processDefinitionCache)'
          }
        </SyntaxHighlighter>
      </>
    );
  }
}

export default UActivitiCache;
