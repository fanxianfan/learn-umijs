import React, {Component} from 'react';
import styles from '@/utils/common.less';
import {Tag} from "antd";

/**
 * Activiti流程存储表
 * @author fxf
 * */
class TableRepository extends Component {
  render() {
    return (
      <>
        <blockquote id='TableRepository' className={styles.blockquote}>
          Activiti流程存储表（Repository）4张
        </blockquote>
        <div className={styles.m10}>
          <Tag color='volcano'>act_procdef_info</Tag>
          <Tag color='volcano'>act_re_deployment</Tag>
          <Tag color='volcano'>act_re_model</Tag>
          <Tag color='volcano'>act_re_procdef</Tag>
        </div>
        <p>
          流程引擎使用存储表来保存流程定义信息和部署信息，存储表名称以ACT_RE开头
        </p>
        <ul>
          <li id='@act_procdef_info'>
            <b>流程定义动态变更表（act_procdef_info）</b>
            <ol>
              <li><b>ID_：</b>主键</li>
              <li><b>PROC_DEF_ID_：</b>关联流程定义ID</li>
              <li><b>REV_：</b>数据版本</li>
              <li><b>INFO_JSON_ID_：</b>数据JSON的ID</li>
            </ol>
          </li>
          <br/>
          <li id='@act_re_deployment'>
            <b>流程部署表（act_re_deployment）</b>
            <p>
              Activiti一次部署可以添加多个资源，资源会被保存到资源表（ACT_RE_DEPLOYMENT）中；
              而部署信息，则保存到部署表（ACT_RE_DEPLOYMENT）中。
            </p>
            <ol>
              <li><b>ID_:</b>主键</li>
              <li><b>NAME_:</b>流程部署时的名称，可以调用Activiti的流程存储API来设置</li>
              <li><b>CATEGORY_:</b>流程部署时的分类</li>
              <li><b>KEY_:</b>部署标识key</li>
              <li><b>TENANT_ID_:</b>租户ID</li>
              <li><b>DEPLOY_TIME_:</b>部署时间</li>
              <li><b>ENGINE_VERSION_:</b>引擎版本</li>
            </ol>
          </li>
          <br/>
          <li id='@act_re_model'>
            <b>流程模型表（act_re_model）(用于web设计器)</b>
            <ol>
              <li><b>ID_:</b>主键</li>
              <li><b>REV_:</b>数据版本</li>
              <li><b>NAME_:</b>模型名称</li>
              <li><b>KEY_:</b>模型标识key</li>
              <li><b>CATEGORY_:</b>模型分类</li>
              <li><b>CREATE_TIME_:</b>创建时间</li>
              <li><b>LAST_UPDATE_TIME_:</b>最后更新时间</li>
              <li><b>VERSION_:</b>版本号（乐观锁）</li>
              <li><b>META_INFO_:</b>元信息</li>
              <li><b>DEPLOYMENT_ID_:</b>关联部署ID</li>
              <li><b>EDITOR_SOURCE_VALUE_ID_:</b>编辑的资源值</li>
              <li><b>EDITOR_SOURCE_EXTRA_VALUE_ID_:</b>编辑的特殊资源值</li>
              <li><b>TENANT_ID_:</b>租户ID</li>
            </ol>
          </li>
          <br/>
          <li id='@act_re_procdef'>
            <b>流程定义表（act_re_procdef）</b>
            <p>
              Activiti在部署添加资源时，如果发布部署的文件是流程文件（.bpmn或者.bpmn20.xml）,
              Activiti会将内容保存到资源表外，还会解析流程文件的内容，并形成特定的流程定义数据，
              写入流程定义表。
            </p>
            <ol>
              <li><b>ID_:</b>主键</li>
              <li><b>REV_:</b>数据版本号</li>
              <li><b>CATEGORY_:</b>流程类型，读取流程XML文件中的targetNamespace值</li>
              <li><b>NAME_:</b>流程名称，读取流程文件process元素的name值</li>
              <li><b>KEY_:</b>流程标识key，读取流程文件中process元素的id值</li>
              <li><b>VERSION_:</b>流程版本号（乐观锁），如果同一个流程文件被多次部署，那么该版本就会递增，
                若第一条流程定义的数据为1，那么第二条数据则为2</li>
              <li><b>DEPLOYMENT_ID_:</b>关联流程部署ID</li>
              <li><b>RESOURCE_NAME_:</b>流程资源名称，一般为流程文件的相对路径</li>
              <li><b>DGRM_RESOURCE_NAME_:</b>流程定义的对应流程图资源名称</li>
              <li><b>DESCRIPTION_:</b>流程描述</li>
              <li><b>HAS_START_FORM_KEY_:</b>流程文件是否有开始表单，可以在开始事件中使用 activiti:formKey 属性来配置开始表单。</li>
              <li><b>HAS_GRAPHICAL_NOTATION_:</b></li>
              <li><b>SUSPENSION_STATE_:</b>表示流程定义的状态是激活还是中止，激活状态时值为1，中止后字段值为2，
                如果流程定义被设置为中止状态， 那么将不能启动流程。</li>
              <li><b>TENANT_ID_:</b>租户ID</li>
              <li><b>ENGINE_VERSION_:</b>引擎版本号</li>
            </ol>
          </li>
        </ul>
      </>
    );
  }
}

export default TableRepository;
