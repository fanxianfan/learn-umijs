import React, {Component} from 'react';
import styles from '@/utils/common.less';

/**
 * Activiti流程存储表
 * @author fxf
 * */
class TableRepository extends Component {
  render() {
    return (
      <>
        <blockquote id='TableRepository' className={styles.blockquote}>
          Activiti流程存储表
        </blockquote>
        <p>
          流程引擎使用存储表来保存流程定义信息和部署信息，存储表名称以ACT_RE开头
        </p>
        <ul>
          <li>
            <b>部署数据表（ACT_RE_DEPLOYMENT）</b>
            <p>
              Activiti一次部署可以添加多个资源，资源会被保存到资源表（ACT_RE_DEPLOYMENT）中；
              而部署信息，则保存到部署表（ACT_RE_DEPLOYMENT）中。
            </p>
            <ol>
              <li>
                <b>ID_:</b>数据主键
              </li>
              <li>
                <b>NAME_:</b>部署的名称，可以调用Activiti的流程存储API来设置，类型varchar(255)
              </li>
              <li>
                <b>DEPLOYMENT_TIME:</b>部署时间，类型为timestamp
              </li>
            </ol>
          </li>
          <br/>
          <li>
            <b>流程定义表（ACT_RE_PROCDEF）</b>
            <p>
              Activiti在部署添加资源时，如果发布部署的文件是流程文件（.bpmn或者.bpmn20.xml）,
              Activiti会将内容保存道资源表外，还会解析流程文件的内容，并形成特定的流程定义数据，
              写入流程定义表。
            </p>
            <ol>
              <li>
                <b>ID_:</b>主键，（组合主键）
              </li>
              <li>
                <b>REV_:</b>数据版本号
              </li>
              <li>
                <b>CATEGORY_:</b>流程定义的分类，读取流程XML文件中的targetNamespace值
              </li>
              <li>
                <b>NAME_:</b>流程定义的名称，读取流程文件process元素的name值。
              </li>
              <li>
                <b>KEY_:</b>流程定义的key，读取流程文件中process元素的id值。
              </li>
              <li>
                <b>VERSION_:</b>流程定义的版本，如果同一个流程文件被多次部署，那么该版本就会递增，
                若第一条流程定义的数据为1，那么第二条数据则为2
              </li>
              <li>
                <b>DEPLOYMENT_ID_:</b>流程定义的对应的部署数据ID
              </li>
              <li>
                <b>RESOURCE_NAME_:</b>流程定义的对应资源名称，一般为流程文件的相对路径。
              </li>
              <li>
                <b>DGRM_RERSOURCE_NAME_:</b>流程定义的对应流程图资源名称
              </li>
              <li>
                <b>HAS_START_FORM_KEY_:</b>流程文件是否有开始表单，可以在开始事件中使用 activiti:formKey 属性来配置开始表单。
              </li>
              <li>
                <b>SUSPENSION_STATE_:</b>表示流程定义的状态是激活还是中止，激活状态时值为1，中止后字段值为2，
                如果流程定义被设置为中止状态， 那么将不能启动流程。
              </li>
            </ol>
          </li>
        </ul>
      </>
    );
  }
}

export default TableRepository;
