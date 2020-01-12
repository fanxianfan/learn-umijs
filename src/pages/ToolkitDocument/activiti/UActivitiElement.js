import React, {Component} from 'react';
import styles from '@/utils/common.less';
import {Table} from 'antd';

/**
 * Activiti元素解析
 * @author fxf
 * */
class UActivitiElement extends Component {

  columns = [
    {
      key: "tag",
      dataIndex: "tag",
      title: "元素标签",
      render: (val, record) => {
        const color = record.hasOwnProperty('color') ? record.color : "#188ffe";
        return <b style={{color: color}}>{val}</b>
      }
    },
    {
      key: "name",
      dataIndex: "name",
      title: "元素名称"
    },
    {
      key: "desc",
      dataIndex: "desc",
      title: "元素描述"
    },
    {
      key: "entity",
      dataIndex: "entity",
      title: "元素承载类",
    },
    {
      key: "resolver",
      dataIndex: "resolver",
      title: "元素解析器",
    }
  ];

  dataSource = [
    {
      key:"startEvent",
      tag: "<startEvent>",
      name: "开始事件",
      desc: "流程的开端的事件",
      entity: "StartEvent",
      resolver: "StartEventXMLConverter",
    },
    {
      key:"endEvent",
      tag: "<endEvent>",
      name: "结束事件",
      desc: "流程结束的事件",
      entity: "EndEvent",
      resolver: "EndEventXMLConverter"
    },
    {
      key: "userTask",
      tag: "<userTask>",
      name: "用户任务",
      desc: "当流程执行到达这样一个用户任务时，在分配给该任务的用户或组的任务列表中创建一个新任务。",
      entity: "UserTask",
      resolver: "UserTaskXMLConverter",
      color: "#f7664b",
    },
    {
      key:"scriptTask",
      tag: "<scriptTask>",
      name: "脚本任务",
      desc: "当流程执行到达脚本任务时，将自动执行相应的脚本。一般情况都是用JavaScript脚本。",
      entity: "ScriptTask",
      resolver: "ScriptTaskXMLConverter",
      color: "#f7664b",
    },
    {
      key:"serviceTask",
      tag: "<serviceTask>",
      name: "服务任务",
      desc: "该任务用于调用外部Java类。此类必须实现JavaDelegate接口或ActivityBehavior接口。{此标签添加activiti:type属性后，表示不同的任务类型，其中包括：mail、mule、camel、shell}",
      entity: "ServiceTask",
      resolver: "ServiceTaskXMLConverter",
      color: "#f7664b",
    },
    {
      key:"businessRuleTask",
      tag: "<businessRuleTask>",
      name: "业务规则任务",
      desc: "用于同步执行一个/多个规则， Activiti使用Drools Expert（Drools规则引擎）执行业务规则，其中包含业务规则的.drl文件必须与流程定义一起部署",
      entity: "BusinessRuleTask",
      resolver: "BusinessRuleTaskXMLConverter",
      color: "#f7664b",
    },
    {
      key:"manualTask",
      tag: "<manualTask>",
      name: "手动任务",
      desc: "引擎将此任务作为传递节点处理，手工任务就是一个自动执行的过程。手动任务几乎不在程序中做什么事情，只是在流程的历史中留下一点痕迹，表明流程是走过某些节点的。而且这个任务是无法用taskservice查询到的",
      entity: "ManualTask",
      resolver: "ManualTaskXMLConverter",
      color: "#f7664b",
    },
    {
      key:"receiveTask",
      tag: "<receiveTask>",
      name: "接收任务",
      desc: "用于等待特定消息的任务到达，当流程执行到达接收任务时，流程状态将提交给持久性存储。此时处于等待状态，直到接收到消息为止。\n" +
        "如何继续？必须使用到达接收任务的执行ID调用runtimeService.signal（executionId）",
      entity: "ReceiveTask",
      resolver: "ReceiveTaskXMLConverter",
      color: "#f7664b",
    },
    {
      key:"sendTask",
      tag: "<sendTask>",
      name: "发送任务",
      desc: "用于发送特定消息",
      entity: "SendTask",
      resolver: "SendTaskXMLConverter",
      color: "#f7664b",
    },
    {
      key: "subProcess",
      tag: "<subProcess>",
      name: "嵌套子流程",
      desc: "子流程是一个包含其他活动，网关，事件等的活动",
      entity: "SubProcess",
      resolver: "SubprocessXMLConverter",
      color: "#00bb4f",
    },
    {
      key: "transaction",
      tag: "<transaction>",
      name: "事务子流程",
      desc: "它是一个嵌入式子流程，Activiti以事务方式执行流程。并发使用乐观锁定来解决。它与transaction不同。",
      entity: "Transaction",
      resolver: "",
      color: "#00bb4f",
    },
    {
      key: "callActivity",
      tag: "<callActivity>",
      name: "调用节点",
      desc: "当流程执行到达调用节点中时，将创建一个新的执行流程，它是到达调用节点的执行的子执行。然后，该子执行用于执行子流程，从而有可能在常规流程中创建并行子执行。父执行程序等待到子过程完全结束，然后再继续原始过程。",
      entity: "CallActivity",
      resolver: "CallActivityXMLConverter",
      color: "#00bb4f",
    },

    {
      key: "exclusiveGateway",
      tag: "<exclusiveGateway>",
      name: "排它网关",
      desc: "当执行到达此网关时，将按照定义它们的顺序评估所有传出序列流。选择条件为true的顺序流（或没有条件集，概念上在顺序流上定义为“true”）并继续该过程。" +
        "如果多条顺序流都为true，则选择第一个，如果顺序流全为false，则引发异常。",
      entity: "ExclusiveGateway",
      resolver: "ExclusiveGatewayXMLConverter",
      color: "#ba00e3",
    },
    {
      key: "parallelGateway",
      tag: "<parallelGateway>",
      name: "并行网关",
      desc: "它可以派生到多个执行路径或加入多个执行路径，对于“传出”它会为每个序列流创建一个并发执行，对于“传入”它会等待直到每个传入序列流的执行都已到达，才会继续。注意：它不执行条件判断",
      entity: "ParallelGateway",
      resolver: "ParallelGatewayXMLConverter",
      color: "#ba00e3",
    },
    {
      key: "inclusiveGateway",
      tag: "<inclusiveGateway>",
      name: "包含网关",
      desc: "可以看作是专用网关和并行网关的组合，对于“传出”它会对满足条件的序列流创建一个并发执行，对于“传入”它同并行网关一样",
      entity: "InclusiveGateway",
      resolver: "InclusiveGatewayXMLConverter",
      color: "#ba00e3",
    },
    {
      key: "eventBasedGateway",
      tag: "<eventBasedGateway>",
      name: "事件网关",
      desc: "网关的每个传出序列流都需要连接到中间捕获事件。当流程执行到达基于事件的网关时，该网关的作用类似于等待状态：执行被挂起。此外，对于每个传出序列流，都会创建一个事件订阅。",
      entity: "EventGateway",
      resolver: "EventGatewayXMLConverter",
      color: "#ba00e3",
    }

  ];

  render() {
    return (
      <>
        <blockquote id='UActivitiElement' className={styles.blockquote}>使用详解：流程文档元素解析</blockquote>
        <div>
          <Table bordered columns={this.columns} dataSource={this.dataSource}/>
        </div>
      </>
    );
  }
}

export default UActivitiElement;
