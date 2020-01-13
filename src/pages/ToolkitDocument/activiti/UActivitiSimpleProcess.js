import React, {Component} from 'react';
import styles from '@/utils/common.less';
import {Button, Modal, Table, notification} from "antd";
import {connect} from "dva";
import exampleImg from '../images/activitiExample1.png';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {monokai} from 'react-syntax-highlighter/dist/esm/styles/hljs';

/**
 * Activiti:工作流服务
 * @author fxf
 * */
@connect(({loading, activitiModel}) => ({
  ...activitiModel,
  loading: loading.models.activitiModel,
}))
class UActivitiSimpleProcess extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      taskDataSource: []
    }
  }

  columns = [
    {title: "Id", dataIndex: "Id"},
    {title: "TaskDefinitionKey", dataIndex: "TaskDefinitionKey"},
    {title: "Name", dataIndex: "Name"},
    {title: "Description", dataIndex: "Description"},
    {title: "Category", dataIndex: "Category"},
    {title: "Owner", dataIndex: "Owner"},
    {title: "Assignee", dataIndex: "Assignee"},
    {title: "CreateTime", dataIndex: "CreateTime"},
    {title: "ClaimTime", dataIndex: "ClaimTime"},
    {
      title: "操作", dataIndex: "options",
      render: (text, record) => {
        return (
          <Button loading={this.props.loading} type={"primary"} onClick={() => {
            this.eventClickTaskComplete(record['Id'])
          }}>
            推向下一节点
          </Button>
        )
      }
    }
  ];


  /**
   * 请求流程部署API
   * */
  eventClickApiCreate = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'activitiModel/deploy',
      payload: {
        callback: (res) => {
          if (res.hasOwnProperty('status')) {
            if (res.status === 0) {
              notification.success({message: "流程部署成功"})
            } else {
              notification.error({message: res.message})
            }
          }
        }
      }
    });
  };

  /**
   * 请求开启流程API
   * */
  eventClickStartProcess = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'activitiModel/startProcess',
      payload: {
        callback: (res) => {
          if (res.hasOwnProperty('status')) {
            if (res.status === 0) {
              notification.success({message: "流程开启成功"})
            } else {
              notification.error({message: res.message})
            }
          }
        }
      }
    });
  };

  /**
   * 请求某用户待处理的任务
   * */
  eventClickTaskQuery = (assignee) => {
    const {dispatch} = this.props;
    dispatch({
      type: 'activitiModel/taskQuery',
      payload: {
        assignee: assignee,
      },
      callback: (res) => {
        if (res.status === 0) {
          if (res.data.length > 0) {
            this.setState({taskDataSource: res.data, visible: true});
          } else {
            notification.warning({message: "暂无数据"});
          }
        }
      }
    });
  };

  /**
   * 请求任务退向下一个节点
   * */
  eventClickTaskComplete = (taskId) => {
    const {dispatch} = this.props;
    dispatch({
      type: 'activitiModel/complete',
      payload: {
        taskId: taskId,
      },
      callback: (res) => {
        if (res.status === 0) {
          notification.success({message: "任务完成成功"});
          this.handleModalHide();
        } else {
          notification.error({message: "任务完成失败"});
        }
      }
    });
  };

  /**
   * 隐藏modal
   * */
  handleModalHide = () => {
    this.setState({visible: false});
  };

  render() {
    return (
      <>
        <Modal title='请求内容'
               visible={this.state.visible}
               onCancel={this.handleModalHide}
               footer={null}
               width={'auto'}
        >
          <Table columns={this.columns} dataSource={this.state.taskDataSource}/>
        </Modal>

        <blockquote id='UActivitiSimpleProcess' className={styles.blockquote}>Activiti简单示例（SpringBoot）</blockquote>
        <div>
          <h4 className={styles.headerTitle}>项目配置：资源依赖</h4>
          <SyntaxHighlighter language={'xml'} style={monokai}>
            {
              '<!--Activiti-->\n' +
              '<dependency>\n' +
              '    <groupId>org.activiti</groupId>\n' +
              '    <artifactId>activiti-engine</artifactId>\n' +
              '    <version>6.0.0</version>\n' +
              '</dependency>\n' +
              '<dependency>\n' +
              '    <groupId>org.activiti</groupId>\n' +
              '    <artifactId>activiti-spring</artifactId>\n' +
              '    <version>6.0.0</version>\n' +
              '</dependency>'
            }
          </SyntaxHighlighter>

          <h4 className={styles.headerTitle}>项目配置：数据库配置(.yml)</h4>
          <SyntaxHighlighter language={'yml'} style={monokai}>
            {
              '  ##配置：数据源\n' +
              '  datasource:\n' +
              '    driver-class-name: com.mysql.cj.jdbc.Driver #驱动类\n' +
              '    name: miaow_web #自定义名称\n' +
              '    url: jdbc:mysql://localhost:3306/miaow?useUnicode=true&characterEncoding=UTF-8&allowMultiQueries=true&useSSL=false&serverTimezone=Asia/Shanghai&allowPublicKeyRetrieval=true\n' +
              '    username: root\n' +
              '    password: root@'
            }
          </SyntaxHighlighter>

          <h4 className={styles.headerTitle}>项目配置：导入数据库表/更新数据库表</h4>
          <p className={styles.textIndent30}>
            方案有两种：运行SQL语句 和 项目配置（项目启动自动校验数据库表）
          </p>
          <ol>
            <li>
              方案1：运行SQL语句
              打开官网下载的文件夹，到目录<b>\activiti-6.0.0\database</b>下运行对应是SQL文件即可
            </li>
            <li>
              方案2：在项目中设置配置类的databaseSchemaUpdates属性为true。
            </li>
          </ol>

          <h4 className={styles.headerTitle}>项目配置：activiti配置类</h4>
          <SyntaxHighlighter language={'java'} style={monokai}>
            {
              '@Configuration\n' +
              'public class ActivitiConfig {\n' +
              '\n' +
              '    @Resource\n' +
              '    private DataSource dataSource;\n' +
              '    /**\n' +
              '     * 初始化引擎配置\n' +
              '     * @return 配置对象\n' +
              '     */\n' +
              '    @Bean\n' +
              '    public StandaloneProcessEngineConfiguration processEngineConfiguration() {\n' +
              '        StandaloneProcessEngineConfiguration configuration = new StandaloneProcessEngineConfiguration();\n' +
              '        configuration.setDataSource(this.dataSource);\n' +
              '        configuration.setDatabaseSchemaUpdate(ProcessEngineConfiguration.DB_SCHEMA_UPDATE_FALSE);\n' +
              '        configuration.setAsyncExecutorActivate(false);\n' +
              '        return configuration;\n' +
              '    }\n' +
              '    /**\n' +
              '     * 初始化流程引擎\n' +
              '     * */\n' +
              '    @Bean\n' +
              '    public ProcessEngine processEngine() {\n' +
              '        return processEngineConfiguration().buildProcessEngine();\n' +
              '    }\n' +
              '    /**\n' +
              '     * 注入存储服务\n' +
              '     * */\n' +
              '    @Bean\n' +
              '    public RepositoryService repositoryService() {\n' +
              '        return processEngine().getRepositoryService();\n' +
              '    }\n' +
              '    /**\n' +
              '     * 注入运行时服务\n' +
              '     * */\n' +
              '    @Bean\n' +
              '    public RuntimeService runtimeService() {\n' +
              '        return processEngine().getRuntimeService();\n' +
              '    }\n' +
              '    /**\n' +
              '     * 注入任务服务\n' +
              '     * */\n' +
              '    @Bean\n' +
              '    public TaskService taskService() {\n' +
              '        return processEngine().getTaskService();\n' +
              '    }\n' +
              '    /**\n' +
              '     * 注入历史服务\n' +
              '     * */\n' +
              '    @Bean\n' +
              '    public HistoryService historyService() {\n' +
              '        return processEngine().getHistoryService();\n' +
              '    }\n' +
              '}'
            }
          </SyntaxHighlighter>


          <h4 className={styles.headerTitle}>流程配置：BPMN文档temp.bpmn(核心内容)</h4>
          <SyntaxHighlighter language={'xml'} style={monokai}>
            {'  <!--流程描述-->\n' +
            '    <process id="myProcess_1" isExecutable="true">\n' +
            '        <!--开始节点-->\n' +
            '        <startEvent id="_2" name="开始节点">\n' +
            '            <documentation id="_2_D_1">描述：开始节点</documentation>\n' +
            '        </startEvent>\n' +
            '        <!--用户任务-->\n' +
            '        <userTask activiti:assignee="${user_u1}" activiti:exclusive="true" id="_3" name="员工请假申请">\n' +
            '            <documentation id="_3_D_1">描述：员工请假申请</documentation>\n' +
            '        </userTask>\n' +
            '        <!--连接流程-->\n' +
            '        <sequenceFlow id="_4" sourceRef="_2" targetRef="_3"/>\n' +
            '        <!--用户任务-->\n' +
            '        <userTask activiti:assignee="${user_u2}" activiti:exclusive="true" id="_5" name="领导审核">\n' +
            '            <documentation id="_5_D_1">描述：领导审核</documentation>\n' +
            '        </userTask>\n' +
            '        <!--连接流程-->\n' +
            '        <sequenceFlow id="_6" sourceRef="_3" targetRef="_5"/>\n' +
            '        <!--结束节点-->\n' +
            '        <endEvent id="_7" name="结束节点">\n' +
            '            <documentation id="_7_D_1">描述：结束节点</documentation>\n' +
            '        </endEvent>\n' +
            '        <!--连接节点-->\n' +
            '        <sequenceFlow id="_8" sourceRef="_5" targetRef="_7"/>\n' +
            '    </process>'}
          </SyntaxHighlighter>
          <img alt={"示例流程图"} src={exampleImg} width={200} height={'auto'}/>

          <h4 className={styles.headerTitle}>编写代码：部署流程</h4>
          <Button loading={this.props.loading} type='primary' onClick={this.eventClickApiCreate}>
            请求API（部署一个已经配置好的流程）
          </Button>
          <p>数据库对应变化：</p>
          <ul>
            <li>act_ge_bytearray，资源表添加2条记录：流程配置文件、流程照片</li>
            <li>act_re_deployment，流程部署表添加1条记录</li>
            <li>act_re_procdef，流程定义表添加1条记录</li>
          </ul>

          <h4 className={styles.headerTitle}>编写代码：启动工作流</h4>
          <Button loading={this.props.loading} type='primary' onClick={this.eventClickStartProcess}>
            请求API（发起工作流，并配置第一个节点的员工）
          </Button>
          <p>数据库对应变化</p>
          <ul>
            <li>act_hi_actinst，历史节点信息表，添加2条记录，（开始节点,startEvent）（员工请假申请，userTask）</li>
            <li>act_hi_identitylink，历史参与者关联表，添加1条记录</li>
            <li>act_hi_procinst，历史流程实例表，添加1条记录</li>
            <li>act_hi_taskinst，历史任务表，添加1条记录</li>
            <li>act_hi_varinst，历史变量表，添加1条记录</li>
            <li>act_ru_execution，流程实例与分支执行表，添加1条记录</li>
            <li>act_ru_identitylink，参与者相关信息表，添加1条记录</li>
            <li>act_ru_task，用户任务表，添加1条记录</li>
            <li>act_ru_variable，运行时变量表，添加1条记录</li>
          </ul>

          <h4 className={styles.headerTitle}>编写代码：查看“员工”待处理的任务，并提交申请</h4>
          <Button type='primary'
                  loading={this.props.loading}
                  style={{marginBottom: 20}}
                  onClick={() => {
                    this.eventClickTaskQuery('jonas')
                  }}
          >
            请求API（获取员工待处理的任务）
          </Button>

          <h4 className={styles.headerTitle}>编写代码：查看“领导”待处理的任务，并通过审核</h4>
          <Button loading={this.props.loading} type={"primary"} onClick={() => {
            this.eventClickTaskQuery('kevin')
          }}>
            请求API（获取领导待处理的任务）
          </Button>
          <p>完成流程后的数据库变化</p>
          <ul>
            <li>act_hi_procinst,历史流程实例表，修改1条记录，添加结束时间字段、结束节点字段....等</li>
            <li>act_hi_actinst,历史节点信息表，修改1条记录（审核节点），新增1条记录（结束节点）</li>
            <li>act_hi_taskinst,历史任务表，修改1条记录（添加结束时间...）</li>
            <li>act_ru_task,用户任务表，删除1条记录</li>
          </ul>
        </div>
      </>
    );
  }
}

export default UActivitiSimpleProcess;
