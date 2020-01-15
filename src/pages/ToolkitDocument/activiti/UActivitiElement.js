import React, {Component} from 'react';
import styles from '@/utils/common.less';
import {Collapse, Icon} from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {monokai} from 'react-syntax-highlighter/dist/esm/styles/hljs';

/**
 * Activiti元素解析
 * @author fxf
 * */
class UActivitiElement extends Component {

  render() {
    return (
      <>
        <blockquote id='UActivitiElement' className={styles.blockquote}>使用详解：BPMN标签元素</blockquote>
        <Collapse expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0} />}>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key="timerEventDefinition" header={'<timerEventDefinition> 定时事件'}>
            <p className={styles.textIndent30}>
              计时器事件是由定义的计时器触发的事件。它们可以用作开始事件，中间事件或边界事件。
              时间事件的行为取决于所使用的业务日历。每个计时器事件都有一个默认的业务日历，但是也可以在计时器事件定义中定义该业务日历。
            </p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<timerEventDefinition activiti:businessCalendarName="custom">\n' +
                '    ...\n' +
                '</timerEventDefinition>'
              }
            </SyntaxHighlighter>
            <p>标签子元素</p>
            <ul>
              <li><b>&lt;timeDate&gt;</b>: 指定固定日期</li>
              <li><b>&lt;timeDuration&gt;</b>：要指定计时器应在触发前运行多长时间</li>
              <li><b>&lt;timeCycle&gt;</b>：指定重复间隔</li>
            </ul>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key='errorEventDefinition' header={'<errorEventDefinition> 错误事件'}>
            <p>
              BPMN错误与Java异常不同。BPMN错误事件是对业务异常建模的一种方式。 Java异常以其自己的特定方式处理。
            </p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<endEvent id="myErrorEndEvent">\n' +
                '  <errorEventDefinition errorRef="myError" />\n' +
                '</endEvent>'
              }
            </SyntaxHighlighter>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'signalEventDefinition'} header={'<signalEventDefinition> 信号事件'}>
            <p>
              信号事件是引用命名信号的事件。信号是全局范围的事件（广播语义），并传递给所有活动的处理程序（等待流程实例/捕获信号事件）。
            </p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<definitions... >\n' +
                '\t<!-- 声明一个信号事件 -->\n' +
                '\t<signal id="alertSignal" name="alert" />\n' +
                '\n' +
                '\t<process id="catchSignal">\n' +
                '\t\t<intermediateThrowEvent id="throwSignalEvent" name="Alert">\n' +
                '\t\t\t<!-- 定义信号事件 -->\n' +
                '\t\t\t<signalEventDefinition signalRef="alertSignal" />\n' +
                '\t\t</intermediateThrowEvent>\n' +
                '\t\t...\n' +
                '\t\t<intermediateCatchEvent id="catchSignalEvent" name="On Alert">\n' +
                '\t\t\t<!-- 定义信号事件 -->\n' +
                '\t\t\t<signalEventDefinition signalRef="alertSignal" />\n' +
                '\t\t</intermediateCatchEvent>\n' +
                '\t\t...\n' +
                '\t</process>\n' +
                '</definitions>'
              }
            </SyntaxHighlighter>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'messageEventDefinition'} header={'<messageEventDefinition> 消息事件'}>
            <p>
              消息事件是引用命名消息的事件。消息具有名称和有效载荷。与信号不同，消息事件始终针对单个接收者。
            </p>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'startEvent'} header={'<startEvent> 开始事件'}>
            <p>启动事件指示进程从何处开始。在启动事件中，可以指定以下特定于Activiti的属性：</p>
            <ul>
              <li>属性<b>activiti:initiator=""</b>，存放经过身份验证的用户标识的变量名</li>
            </ul>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'TimerStartEvent'} header={'<startEvent> 定时开始事件'}>
            <p>
              计时器启动事件用于在给定时间创建流程实例。
              它既可以用于仅应启动一次的过程，也可以用于应在特定时间间隔内启动的过程。
            </p>
            <ul>
              <li>注意：子进程不能具有计时器启动事件。</li>
              <li>
                注意：部署流程后，将安排开始计时器事件。尽管调用启动过程方法不受限制，但无需调用startProcessInstanceByXXX，并且在startProcessInstanceByXXX调用时将导致再次启动该过程。
              </li>
              <li>
                注意：部署具有启动计时器事件的流程的新版本时，将删除与先前计时器对应的作业。
              </li>
            </ul>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<startEvent id="theStart">\n' +
                '  <timerEventDefinition>\n' +
                '    <!--此流程将从2020年3月11日12:12开始每隔5分钟启动4次-->\n' +
                '    <timeCycle>R4/2020-03-11T12:12/PT5M</timeCycle>\n' +
                '  </timerEventDefinition>\n' +
                '</startEvent>'
              }
            </SyntaxHighlighter>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<startEvent id="theStart">\n' +
                '  <timerEventDefinition>\n' +
                '    <!--此流程将在选定的日期开始一次-->\n' +
                '    <timeDate>2020-03-11T12:13:14</timeDate>\n' +
                '  </timerEventDefinition>\n' +
                '</startEvent>'
              }
            </SyntaxHighlighter>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key='MessageStartEvent' header={'<startEvent> 消息开始事件'}>
            <p>消息启动事件可用于使用命名消息启动流程实例。这有效地使我们能够使用消息名称从一组备用启动事件中选择正确的启动事件。</p>
            <ul>
              <li>
                注意：消息开始事件的名称在给定的流程定义中必须是唯一的。流程定义不得包含多个具有相同名称的消息启动事件。
              </li>
              <li>
                注意：流程版本控制：部署流程定义的新版本后，将取消先前版本的消息订阅。
              </li>
            </ul>
            <SyntaxHighlighter language={'java'} style={monokai}>
              {
                '//通过消息启动流程的方法\n' +
                'ProcessInstance startProcessInstanceByMessage(String)\n' +
                'ProcessInstance startProcessInstanceByMessage(String, String)\n' +
                'ProcessInstance startProcessInstanceByMessage(String, Map<String, Object>)\n' +
                'ProcessInstance startProcessInstanceByMessage(String, String, Map<String, Object>)\n'
              }
            </SyntaxHighlighter>
            <p>XML的注意事项：</p>
            <ul>
              <li>
                消息启动事件仅在顶级进程中受支持。嵌入式子进程不支持消息启动事件。
              </li>
              <li>
                如果流程定义具有多个消息开始事件，则<code>runtimeService.startProcessInstanceByMessage（...）</code>允许选择适当的开始事件。
              </li>
              <li>
                如果流程定义具有多个消息启动事件和一个无启动事件，则<code>runtimeService.startProcessInstanceByKey（…）</code>和<code>runtimeService.startProcessInstanceById（…）</code>使用无启动事件启动流程实例。
              </li>
              <li>
                如果流程定义具有多个消息启动事件且没有启动事件，则<code>runtimeService.startProcessInstanceByKey（…）</code>和<code>runtimeService.startProcessInstanceById（…）</code>会引发异常。
              </li>
              <li>
                如果流程定义具有单个消息启动事件，则<code>runtimeService.startProcessInstanceByKey（...）</code>和<code>runtimeService.startProcessInstanceById（...）</code>使用消息启动事件启动新的流程实例。
              </li>
            </ul>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '  <message id="newInvoice" name="newInvoiceMessage" />\n' +
                '  <process id="invoiceProcess">\n' +
                '    <startEvent id="messageStart" >\n' +
                '    \t<messageEventDefinition messageRef="tns:newInvoice" />\n' +
                '    </startEvent>\n' +
                '    ...\n' +
                '  </process>\n'
              }
            </SyntaxHighlighter>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'SignalStartEvent'} header={'<startEvent> 信号启动事件'}>
            <p>
              信号启动事件可用于使用命名信号启动流程实例。
              可以使用中间信号抛出事件或通过API（runtimeService.signalEventReceivedXXX方法）从流程实例内部触发信号。
              在这两种情况下，将启动所有具有相同名称的信号启动事件的过程定义。
            </p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<signal id="theSignal" name="The Signal" />\n' +
                '\n' +
                '<process id="processWithSignalStart1">\n' +
                '  <startEvent id="theStart">\n' +
                '    <signalEventDefinition id="theSignalEventDefinition" signalRef="theSignal"  />\n' +
                '  </startEvent>\n' +
                '  <sequenceFlow id="flow1" sourceRef="theStart" targetRef="theTask" />\n' +
                '  <userTask id="theTask" name="Task in process A" />\n' +
                '  <sequenceFlow id="flow2" sourceRef="theTask" targetRef="theEnd" />\n' +
                '\t  <endEvent id="theEnd" />\n' +
                '</process>'
              }
            </SyntaxHighlighter>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'endEvent'} header={'<endEvent> 结束事件'}>
            <p>
              无结束事件表示到达事件时抛出的结果未指定。因此，除了结束当前的执行路径外，引擎不会做任何额外的事情。
            </p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {'<endEvent id="end" name="my end event" />'}
            </SyntaxHighlighter>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'ErrorStartEvent'} header={'<startEvent> 错误开始事件'}>
            <p>错误开始事件可用于触发事件子流程。错误启动事件不能用于启动流程实例。错误开始事件始终会中断。</p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<startEvent id="messageStart" >\n' +
                '\t<errorEventDefinition errorRef="someError" />\n' +
                '</startEvent>'
              }
            </SyntaxHighlighter>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'ErrorEndEvent'} header={'<endEvent> 错误结束事件'}>
            <p>
              当流程执行到达错误结束事件时，当前执行路径结束，并引发错误。
              匹配的中间边界错误事件可以捕获此错误。如果未找到匹配的边界错误事件，则将引发异常。
            </p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<error id="myError" errorCode="error123" />\n' +
                '...\n' +
                '<process id="myProcess">\n' +
                '...\n' +
                '  <endEvent id="myErrorEndEvent">\n' +
                '    <errorEventDefinition errorRef="myError" />\n' +
                '  </endEvent>\n' +
                '...'
              }
            </SyntaxHighlighter>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'TerminateEndEvent'} header={'<endEvent> 终止结束事件'}>
            <p>当达到终止结束事件时，当前流程实例或子流程将终止。</p>
            <p>有一个可选的属性TerminateAll可以添加。为true时，无论终止结束事件在流程定义中的位置如何，并且无论其位于子流程（甚至是嵌套流程）中，（根）流程实例都将被终止。</p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<endEvent id="myEndEvent >\n' +
                '  <terminateEventDefinition activiti:terminateAll="true"></terminateEventDefinition>\n' +
                '</endEvent>'
              }
            </SyntaxHighlighter>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'CancelEndEvent'} header={'<endEvent> 取消结束事件'}>
            <p>
              此事件只能与bpmn事务子流程结合使用。到达取消结束事件时，将引发必须由取消边界事件捕获的取消事件。
              然后，取消边界事件会取消事务并触发补偿。
            </p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<endEvent id="myCancelEndEvent">\n' +
                '  <cancelEventDefinition />\n' +
                '</endEvent>'
              }
            </SyntaxHighlighter>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'boundaryEvent'} header={'<boundaryEvent> 边界事件'}>
            <p>
              边界事件是附加到活动的捕获事件（边界事件永远不会抛出）。
              这意味着在活动运行时，事件正在监听某种类型的触发器。
              捕获到事件后，活动将被中断，并遵循从事件流出的顺序流。
            </p>
            <p>边界事件的定义方式统一如下：</p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<boundaryEvent id="myBoundaryEvent" attachedToRef="theActivity">\n' +
                '      <XXXEventDefinition/>\n' +
                '</boundaryEvent>'
              }
            </SyntaxHighlighter>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'TimerBoundaryEvent'} header={'<boundaryEvent> 计时器边界事件'}>
            <p>
              计时器边界事件充当秒表和闹钟。当执行到达边界事件所附加的活动时，将启动计时器。
              当计时器触发时（例如，在指定的间隔之后），活动被中断，边界事件被跟随。
            </p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<boundaryEvent id="escalationTimer" cancelActivity="true" attachedToRef="firstLineSupport">\n' +
                '  <timerEventDefinition>\n' +
                '    <timeDuration>PT4H</timeDuration>\n' +
                '  </timerEventDefinition>\n' +
                '</boundaryEvent>'
              }
            </SyntaxHighlighter>
            <p>
              使用任何类型的边界事件时，都有一个关于并发的已知问题。当前，不可能将多个传出序列流附加到边界事件（请参见问题ACT-47）。解决此问题的方法是使用一个去往并行网关的传出序列流。
            </p>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'ErrorBoundaryEvent'} header={'<boundaryEvent> 错误边界事件'}>
            <p>
              定义边界错误事件对嵌入式子流程或调用活动最有意义，因为子流程为子流程内的所有活动创建范围。错误由错误结束事件引发。
              这样的错误将向上传播其父范围，直到找到一个范围，在该范围上定义了与错误事件定义匹配的边界错误事件。
              当捕获到错误事件时，定义边界事件的活动将被销毁，同时也会销毁其中的所有当前执行（例如，并发活动，嵌套子流程等）。
              边界事件的传出顺序流继续执行过程。
            </p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<boundaryEvent id="catchError" attachedToRef="mySubProcess">\n' +
                '  <errorEventDefinition errorRef="myError"/>\n' +
                '</boundaryEvent>'
              }
            </SyntaxHighlighter>
            <ul>
              <li>如果省略errorRef，则边界错误事件将捕获任何错误事件</li>
              <li>如果提供了errorRef并且引用了现有错误，则边界事件将仅捕获具有相同错误代码的错误。</li>
              <li>如果提供了errorRef，但在BPMN 2.0文件中未定义错误，则将errorRef用作errorCode（与错误结束事件类似）。</li>
            </ul>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'SignalBoundaryEvent'} header={'<boundaryEvent> 信号边界事件'}>
            <p>
              与边界错误事件等其他事件相反，边界信号事件不仅捕获从其附加到示波器的信号事件。相反，信号事件具有全局范围（广播语义），这意味着可以从任何地方甚至从不同的流程实例抛出信号。
            </p>
            <p>
              与其他事件（例如错误事件）相反，如果捕获到信号，则不会消耗信号。如果您有两个活动的信号边界事件捕获相同的信号事件，则即使两个边界事件是不同流程实例的一部分，也会触发这两个边界事件。
            </p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<boundaryEvent id="boundary" attachedToRef="task" cancelActivity="true">\n' +
                '          <signalEventDefinition signalRef="alertSignal"/>\n' +
                '</boundaryEvent>'
              }
            </SyntaxHighlighter>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'MessageBoundaryEvent'} header={'<boundaryEvent> 边界事件'}>
            <p>
              简称为边界消息事件上附加的中间捕获消息将捕获具有与所引用消息定义相同的消息名称的消息。
              请注意：边界消息事件既可以是中断的，也可以是不中断的
            </p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<boundaryEvent id="boundary" attachedToRef="task" cancelActivity="true">\n' +
                '      <messageEventDefinition messageRef="newCustomerMessage"/>\n' +
                '</boundaryEvent>'
              }
            </SyntaxHighlighter>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'CancelBoundaryEvent'} header={'<boundaryEvent> 取消边界事件'}>
            <p>
              触发取消边界事件时，它将首先中断当前作用域中所有活动的执行。接下来，它开始对交易范围内的所有活动补偿边界事件进行补偿。
              补偿是同步执行的，即边界事件在补偿完成之前等待，直到离开交易为止。补偿完成后，使用取消边界事件用完的顺序流程保留事务子流程。
            </p>
            <ul>
              <li>注意：事务子流程仅允许单个取消边界事件。</li>
              <li>注意：如果事务子流程承载嵌套的子流程，则仅触发已成功完成的子流程的补偿。</li>
              <li>注意：如果将取消边界事件放置在具有多实例特征的事务子流程上，则如果一个实例触发取消，则边界事件将取消所有实例。</li>
            </ul>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<boundaryEvent id="boundary" attachedToRef="transaction" >\n' +
                '          <cancelEventDefinition />\n' +
                '</boundaryEvent>'
              }
            </SyntaxHighlighter>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'CompensationBoundaryEvent'} header={'<boundaryEvent> 补偿边界事件'}>
            <p>补偿边界事件必须使用定向关联引用单个补偿处理程序。</p>
            <ul>
              <li>触发补偿后，与补偿边界事件关联的补偿处理程序将被调用相同次数的次数，以成功完成它所附加的活动。</li>
              <li>如果将补偿边界事件附加到具有多个实例特征的活动，则会为每个实例创建一个补偿事件订阅。</li>
              <li>如果将补偿边界事件附加到循环中包含的活动，则每次执行该活动时都会创建一个补偿事件订阅。</li>
              <li>如果流程实例结束，则取消补偿事件的预订。</li>
              <li>嵌入式子流程不支持补偿边界事件。</li>
            </ul>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<boundaryEvent id="compensateBookHotelEvt" attachedToRef="bookHotel" >\n' +
                '      <compensateEventDefinition />\n' +
                '</boundaryEvent>\n' +
                '\n' +
                '<association associationDirection="One" id="a1"  sourceRef="compensateBookHotelEvt" targetRef="undoBookHotel" />\n' +
                '\n' +
                '<serviceTask id="undoBookHotel" isForCompensation="true" activiti:class="..." />'
              }
            </SyntaxHighlighter>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'IntermediateCatchingEvents'} header={'<intermediateCatchEvent> 中间捕获事件'}>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '统一的定义方式\n' +
                '<intermediateCatchEvent id="myIntermediateCatchEvent" >\n' +
                '      <XXXEventDefinition/>\n' +
                '</intermediateCatchEvent>'
              }
            </SyntaxHighlighter>

          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'TimerIntermediateCatchingEvent'} header={'<intermediateCatchEvent> 定时器中间捕获事件'}>
            <p>
              计时器中间事件充当秒表。当执行到达捕获事件活动时，将启动计时器。
              当计时器触发时（例如，在指定的时间间隔之后），将遵循从计时器中间事件流出的顺序流。
            </p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<intermediateCatchEvent id="timer">\n' +
                '  <timerEventDefinition>\n' +
                '    <timeDuration>PT5M</timeDuration>\n' +
                '  </timerEventDefinition>\n' +
                '</intermediateCatchEvent>'
              }
            </SyntaxHighlighter>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'SignalIntermediateCatchingEvent'} header={'<intermediateCatchEvent> 信号中间捕获事件'}>
            <p>
              与其他事件（例如错误事件）相反，如果捕获到信号，则不会消耗信号。
            </p>
            <p>
              如果您有两个活动的信号边界事件捕获相同的信号事件，则即使两个边界事件是不同流程实例的一部分，也会触发这两个边界事件。
            </p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<intermediateCatchEvent id="signal">\n' +
                '  <signalEventDefinition signalRef="newCustomerSignal" />\n' +
                '</intermediateCatchEvent>'
              }
            </SyntaxHighlighter>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'MessageIntermediateCatchingEvent'} header={'<intermediateCatchEvent> 消息中间捕获事件'}>
            <p>
              它捕获具有指定名称的消息。
            </p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<intermediateCatchEvent id="message">\n' +
                '  <messageEventDefinition signalRef="newCustomerMessage" />\n' +
                '</intermediateCatchEvent>'
              }
            </SyntaxHighlighter>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'IntermediateThrowingEvent'} header={'<intermediateThrowEvent> 中间抛出事件'}>
            <p>统一的定义方式如下：</p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<intermediateThrowEvent id="myIntermediateThrowEvent" >\n' +
                '      <XXXEventDefinition/>\n' +
                '</intermediateThrowEvent>'
              }
            </SyntaxHighlighter>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'SignalIntermediateThrowingEvent'} header={'<intermediateThrowEvent> 信号中间抛出事件'}>
            <p>
              在默认配置中，信号是同步传送的。
              这意味着抛出流程实例将一直等到信号传递到所有捕获流程实例为止。
              捕获流程实例也会在与引发流程实例相同的事务中得到通知，这意味着，如果所通知的实例之一产生技术错误（引发异常），则所有涉及的实例都会失败。
            </p>
            <p>
              信号也可以异步传递。在那种情况下，确定在到达抛出信号事件时哪些处理程序处于活动状态。对于每个活动的处理程序，JobExecutor存储并传递异步通知消息（Job）。
            </p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<intermediateThrowEvent id="signal">\n' +
                '  <signalEventDefinition signalRef="newCustomerSignal" />\n' +
                '</intermediateThrowEvent>'
              }
            </SyntaxHighlighter>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'CompensationIntermediateThrowingEvent'} header={'<intermediateThrowEvent> 补偿中间抛出事件'}>
            <ul>
              <li>当为一个活动抛出补偿时，相关的补偿处理程序将在该活动成功竞争的相同次数下执行。</li>
              <li>如果对当前范围引发补偿，则将补偿当前范围内的所有活动，包括并发分支上的活动。</li>
              <li>
                补偿是分层触发的：如果要补偿的活动是子流程，则会为该子流程中包含的所有活动触发补偿。
                如果子流程具有嵌套活动，则会递归引发补偿。但是，补偿不会传播到流程的“上层”：如果在子流程中触发了补偿，则补偿不会传播到子流程范围之外的活动。
                BPMN规范指出，针对“相同子流程级别”的活动触发了补偿。
              </li>
              <li>
                在Activiti中，补偿是按照相反的执行顺序进行的。这意味着最后完成的活动首先得到补偿，等等。
              </li>
              <li>
                中间抛出补偿事件可以用来补偿成功竞争的事务子过程。
              </li>
            </ul>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'sequenceFlow'} header={'<sequenceFlow> 顺序流'}>
            <p>
              顺序流是流程两个元素之间的连接器。在流程执行期间访问元素之后，将遵循所有传出序列流。
              这意味着BPMN 2.0的默认性质是并行的：两个输出序列流将创建两个单独的并行执行路径。
            </p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<sequenceFlow id="flow1" sourceRef="theStart" targetRef="theTask"/>'
              }
            </SyntaxHighlighter>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'ConditionalSequenceFlow'} header={'<sequenceFlow> 条件序列流'}>
            <p>
              该功能是在序列流上添加条件，默认行为是判断传出序列流上的条件。当条件评估为真时，将选择该传出序列流。
              当以这种方式选择多个顺序流时，将生成多个执行，并且该过程将以并行方式继续进行。
            </p>
            <p>
              以上适用于BPMN 2.，但不适用于网关。网关将根据网关类型以特定方式处理条件流。
            </p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<sequenceFlow id="flow" sourceRef="theStart" targetRef="theTask">\n' +
                '  <conditionExpression xsi:type="tFormalExpression">\n' +
                '    <![CDATA[${order.price > 100 && order.price < 250}]]>\n' +
                '  </conditionExpression>\n' +
                '</sequenceFlow>'
              }
            </SyntaxHighlighter>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'ExclusiveGateway'} header={'<exclusiveGateway> 排它网关'}>
            <p>
              当执行到达此网关时，将按照定义它们的顺序评估所有传出序列流。选择条件为true的顺序流（或没有条件集，概念上在顺序流上定义为“true”）并继续该过程。
              如果多条顺序流都为true，则选择第一个，如果顺序流全为false，否则引发异常。
            </p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<exclusiveGateway id="exclusiveGw" name="Exclusive Gateway" />\n' +
                '\n' +
                '<sequenceFlow id="flow2" sourceRef="exclusiveGw" targetRef="theTask1">\n' +
                '  <conditionExpression xsi:type="tFormalExpression">${input == 1}</conditionExpression>\n' +
                '</sequenceFlow>\n' +
                '\n' +
                '<sequenceFlow id="flow3" sourceRef="exclusiveGw" targetRef="theTask2">\n' +
                '  <conditionExpression xsi:type="tFormalExpression">${input == 2}</conditionExpression>\n' +
                '</sequenceFlow>\n' +
                '\n' +
                '<sequenceFlow id="flow4" sourceRef="exclusiveGw" targetRef="theTask3">\n' +
                '  <conditionExpression xsi:type="tFormalExpression">${input == 3}</conditionExpression>\n' +
                '</sequenceFlow>'
              }
            </SyntaxHighlighter>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'ParallelGateway'} header={'<parallelGateway> 并行网关'}>
            <p>
              它可以派生到多个执行路径或加入多个执行路径，对于“传出”它会为每个序列流创建一个并发执行，对于“传入”它会等待直到每个传入序列流的执行都已到达，才会继续。
              注意：它不执行条件判断
            </p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<startEvent id="theStart" />\n' +
                '<sequenceFlow id="flow1" sourceRef="theStart" targetRef="fork" />\n' +
                '\n' +
                '<parallelGateway id="fork" />\n' +
                '<sequenceFlow sourceRef="fork" targetRef="receivePayment" />\n' +
                '<sequenceFlow sourceRef="fork" targetRef="shipOrder" />\n' +
                '\n' +
                '<userTask id="receivePayment" name="Receive Payment" />\n' +
                '<sequenceFlow sourceRef="receivePayment" targetRef="join" />\n' +
                '\n' +
                '<userTask id="shipOrder" name="Ship Order" />\n' +
                '<sequenceFlow sourceRef="shipOrder" targetRef="join" />\n' +
                '\n' +
                '<parallelGateway id="join" />\n' +
                '<sequenceFlow sourceRef="join" targetRef="archiveOrder" />\n' +
                '\n' +
                '<userTask id="archiveOrder" name="Archive Order" />\n' +
                '<sequenceFlow sourceRef="archiveOrder" targetRef="theEnd" />\n' +
                '\n' +
                '<endEvent id="theEnd" />'
              }
            </SyntaxHighlighter>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'InclusiveGateway'} header={'<inclusiveGateway> 包容性网关'}>
            <p>
              可以看作是专用网关和并行网关的组合，对于“传出”它会对满足条件的序列流创建一个并发执行，对于“传入”它同并行网关一样
            </p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<startEvent id="theStart" />\n' +
                '<sequenceFlow id="flow1" sourceRef="theStart" targetRef="fork" />\n' +
                '\n' +
                '<inclusiveGateway id="fork" />\n' +
                '<sequenceFlow sourceRef="fork" targetRef="receivePayment" >\n' +
                '  <conditionExpression xsi:type="tFormalExpression">${paymentReceived == false}</conditionExpression>\n' +
                '</sequenceFlow>\n' +
                '<sequenceFlow sourceRef="fork" targetRef="shipOrder" >\n' +
                '  <conditionExpression xsi:type="tFormalExpression">${shipOrder == true}</conditionExpression>\n' +
                '</sequenceFlow>\n' +
                '\n' +
                '<userTask id="receivePayment" name="Receive Payment" />\n' +
                '<sequenceFlow sourceRef="receivePayment" targetRef="join" />\n' +
                '\n' +
                '<userTask id="shipOrder" name="Ship Order" />\n' +
                '<sequenceFlow sourceRef="shipOrder" targetRef="join" />\n' +
                '\n' +
                '<inclusiveGateway id="join" />\n' +
                '<sequenceFlow sourceRef="join" targetRef="archiveOrder" />\n' +
                '\n' +
                '<userTask id="archiveOrder" name="Archive Order" />\n' +
                '<sequenceFlow sourceRef="archiveOrder" targetRef="theEnd" />\n' +
                '\n' +
                '<endEvent id="theEnd" />'
              }
            </SyntaxHighlighter>
            <p>
              在上面的示例中，流程启动后，如果流程变量paymentReceived == false和shipOrder == true，将创建两个任务。
              如果这些过程变量中只有一个等于true，则仅创建一个任务。如果没有条件计算为true，则抛出异常。
              通过指定默认的传出序列流可以防止这种情况。
            </p>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'eventBasedGateway'} header={'<eventBasedGateway> 事件网关'}>
            <p>
              网关的每个传出序列流都需要连接到中间捕获事件。
              当流程执行到达基于事件的网关时，该网关的作用类似于等待状态：执行被挂起。此外，对于每个传出序列流，都会创建一个事件订阅。
            </p>
            <p>
              以下过程是使用基于事件的网关的过程的示例。当执行到达基于事件的网关时，进程执行被挂起。
              此外，流程实例订阅警报信号事件并创建了一个计时器，该计时器在10分钟后触发。
              这有效地导致流程引擎等待十分钟的信号事件。如果信号在10分钟内出现，则取消计时器，并在信号后继续执行。
              如果未触发信号，则在计时器之后继续执行，并取消信号订阅。
            </p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<signal id="alertSignal" name="alert" />\n' +
                '\n' +
                '<process id="catchSignal">\n' +
                '\n' +
                '    <startEvent id="start" />\n' +
                '\n' +
                '    <sequenceFlow sourceRef="start" targetRef="gw1" />\n' +
                '\n' +
                '    <eventBasedGateway id="gw1" />\n' +
                '\n' +
                '    <sequenceFlow sourceRef="gw1" targetRef="signalEvent" />\n' +
                '    <sequenceFlow sourceRef="gw1" targetRef="timerEvent" />\n' +
                '\n' +
                '    <intermediateCatchEvent id="signalEvent" name="Alert">\n' +
                '        <signalEventDefinition signalRef="alertSignal" />\n' +
                '    </intermediateCatchEvent>\n' +
                '\n' +
                '    <intermediateCatchEvent id="timerEvent" name="Alert">\n' +
                '        <timerEventDefinition>\n' +
                '            <timeDuration>PT10M</timeDuration>\n' +
                '        </timerEventDefinition>\n' +
                '    </intermediateCatchEvent>\n' +
                '\n' +
                '    <sequenceFlow sourceRef="timerEvent" targetRef="exGw1" />\n' +
                '    <sequenceFlow sourceRef="signalEvent" targetRef="task" />\n' +
                '\n' +
                '    <userTask id="task" name="Handle alert"/>\n' +
                '\n' +
                '    <exclusiveGateway id="exGw1" />\n' +
                '\n' +
                '    <sequenceFlow sourceRef="task" targetRef="exGw1" />\n' +
                '    <sequenceFlow sourceRef="exGw1" targetRef="end" />\n' +
                '\n' +
                '    <endEvent id="end" />\n' +
                '</process>'
              }
            </SyntaxHighlighter>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'userTask'} header={'<userTask> 用户任务'}>
            <p>
              用户任务用于建模需要由参与者完成的工作。当进程执行到达这样的用户任务时，将给予定义的用户或组的任务列表中创建一个新任务。
            </p>
            <ul>
              <li>
                用户任务也可以具有描述。通过添加documentation元素来定义描述。
              </li>
              <li>
                每个任务都有一个字段，指示该任务的截止日期。 Query API可用于查询在特定日期，之前或之后到期的任务。
              </li>
            </ul>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<userTask id="theTask" name="Important task">'
              }
            </SyntaxHighlighter>

            <h4 className={styles.headerTitle}>用户分配</h4>
            <p>
              用户任务可以直接分配给用户。
              这是通过定义humanPerformer子元素来完成的。
              这样的humanPerformer定义需要一个resourceAssignmentExpression，它实际上定义了用户。
              当前，仅支持formalExpressions。
            </p>
            <p>
              注意：使用humanPerformer的话，只能将一个用户分配为该任务的人工执行者。
            </p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<process >\n' +
                '  ...\n' +
                '  <userTask id=\'theTask\' name=\'important task\' >\n' +
                '    <humanPerformer>\n' +
                '      <resourceAssignmentExpression>\n' +
                '        <formalExpression>kermit</formalExpression>\n' +
                '      </resourceAssignmentExpression>\n' +
                '    </humanPerformer>\n' +
                '  </userTask>'
              }
            </SyntaxHighlighter>
            <p>
              在Activiti术语中，此用户称为受让人。
              拥有受让人的任务在其他人的任务列表中不可见，可以在受让人的个人任务列表中找到。
            </p>
            <p>
              任务也可以分配给候选列表中的人。在这种情况下，必须使用潜在的拥有者结构。用法与HumanPer former构造相似。、
              请注意，需要指定它是用户还是组。如果没有指定是用户还是组，则引擎默认为组。
            </p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<process >\n' +
                '  ...\n' +
                '  <userTask id=\'theTask\' name=\'important task\' >\n' +
                '    <potentialOwner>\n' +
                '      <resourceAssignmentExpression>\n' +
                '        <formalExpression>user(kermit), group(management)</formalExpression>\n' +
                '      </resourceAssignmentExpression>\n' +
                '    </potentialOwner>\n' +
                '  </userTask>'
              }
            </SyntaxHighlighter>
            <p>
              简单的用户和组分配方式
            </p>
            <ul>
              <li>
                分配指定的用户
                <SyntaxHighlighter language={'xml'} style={monokai}>
                  {'<userTask id="theTask" name="my task" activiti:assignee="kermit" />'}
                </SyntaxHighlighter>
              </li>
              <li>
                分配候选人列表，注意：不需要使用user（kermit）声明，因为该属性只能用于用户。
                <SyntaxHighlighter language={'xml'} style={monokai}>
                  {'<userTask id="theTask" name="my task" activiti:candidateUsers="kermit, gonzo" />'}
                </SyntaxHighlighter>
              </li>
              <li>
                分配候选组列表，注意：不需要使用group（management）声明，因为该属性只能用于组
                <SyntaxHighlighter language={'xml'} style={monokai}>
                  {'<userTask id="theTask" name="my task" activiti:candidateGroups="management, accountancy" />'}
                </SyntaxHighlighter>
              </li>
            </ul>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'ScriptTask'} header={'<scriptTask> 脚本任务'}>
            <p>
              脚本任务是自动的。当进程执行到达脚本任务时，将执行相应的脚本。一般为javascript脚本
            </p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<scriptTask id="theScriptTask" name="Execute script" scriptFormat="groovy">\n' +
                '  <script>\n' +
                '    sum = 0\n' +
                '    for ( i in inputArray ) {\n' +
                '      sum += i\n' +
                '    }\n' +
                '  </script>\n' +
                '</scriptTask>'
              }
            </SyntaxHighlighter>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'serviceTask'} header={'<serviceTask> Java服务任务'}>
            <p>
              此任务用于调用外部Java类。
            </p>
            <ul>
              <li>
                条件1：指定实现JavaDelegate或ActivityBehavior的类
              </li>
              <li>
                条件2：如需指定调用类，必须通过activiti：class属性提供完全限定的类名
                <SyntaxHighlighter language={'xml'} style={monokai}>
                  {
                    '<serviceTask id="javaService"\n' +
                    '             name="My Java Service Task"\n' +
                    '             activiti:class="org.activiti.MyJavaDelegate" />'
                  }
                </SyntaxHighlighter>
              </li>
              <li>
                条件3：如需使用表达式，必须通过activiti:delegateExpression指定
                <SyntaxHighlighter language={'xml'} style={monokai}>
                  {'<serviceTask id="serviceTask" activiti:delegateExpression="${delegateExpressionBean}" />'}
                </SyntaxHighlighter>
              </li>
              <li>
                条件4：如需使用UEL表达式，必须使用activiti:expression指定
                <SyntaxHighlighter language={'xml'} style={monokai}>
                  {'<serviceTask id="javaService" name="My Java Service Task" activiti:expression="#{printer.printMessage()}" />'}
                </SyntaxHighlighter>
              </li>
            </ul>

          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'WebServiceTask'} header={'<serviceTask> Web服务任务'}>
            <p>
              Web服务任务用于同步调用外部Web服务。
            </p>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'businessRuleTask'} header={'<businessRuleTask> 业务规则任务'}>
            <p>
              用于同步执行一个/多个规则， Activiti使用Drools Expert（Drools规则引擎）执行业务规则，其中包含业务规则的.drl文件必须与流程定义一起部署
            </p>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'EmailTask'} header={'<serviceTask> 邮件任务'}>
            <p>
              Activiti允许通过自动邮件服务任务来增强业务流程，这些任务将电子邮件发送给一个或多个收件人，包括对抄送，密件抄送，HTML内容等的支持。
              电子邮件任务被实现为Activiti专用的服务任务
            </p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {'<serviceTask id="sendMail" activiti:type="mail">'}
            </SyntaxHighlighter>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<serviceTask id="sendMail" activiti:type="mail">\n' +
                '  <extensionElements>\n' +
                '    <activiti:field name="from" stringValue="order-shipping@thecompany.com" />\n' +
                '    <activiti:field name="to" expression="${recipient}" />\n' +
                '    <activiti:field name="subject" expression="Your order ${orderId} has been shipped" />\n' +
                '    <activiti:field name="html">\n' +
                '      <activiti:expression>\n' +
                '        <![CDATA[\n' +
                '          <html>\n' +
                '            <body>\n' +
                '              Hello ${male ? \'Mr.\' : \'Mrs.\' } ${recipientName},<br/><br/>\n' +
                '              As of ${now}, your order has been <b>processed and shipped</b>.<br/><br/>\n' +
                '              Kind regards,<br/>\n' +
                '\n' +
                '              TheCompany.\n' +
                '            </body>\n' +
                '          </html>\n' +
                '        ]]>\n' +
                '      </activiti:expression>\n' +
                '    </activiti:field>\n' +
                '  </extensionElements>\n' +
                '</serviceTask>'
              }
            </SyntaxHighlighter>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'MuleTask'} header={'<serviceTask> Mule任务'}>
            <p>
              Mule任务是作为专用服务任务实现的，并且通过为服务任务的类型设置'mule'来定义。
            </p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {'<serviceTask id="sendMule" activiti:type="mule">'}
            </SyntaxHighlighter>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'CamelTask'} header={'<serviceTask> Camel任务'}>
            <p>
              Camel任务允许向Camel发送消息和从Camel接收消息，从而增强了Activiti的集成功能。
              请注意，骆驼任务不是BPMN 2.0规范的正式任务（因此，它没有专用的图标）。
              因此，在Activiti中，骆驼任务被实现为专用服务任务
            </p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {'<serviceTask id="sendCamel" activiti:type="camel">'}
            </SyntaxHighlighter>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'manualTask'} header={'<manualTask> 手动任务'}>
            <p>
              引擎将此任务作为传递节点处理，手工任务就是一个自动执行的过程。手动任务几乎不在程序中做什么事情，
              只是在流程的历史中留下一点痕迹，表明流程是走过某些节点的。
              而且这个任务是无法用taskservice查询到的
            </p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {'<manualTask id="myManualTask" name="Call client for more information" />'}
            </SyntaxHighlighter>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'receiveTask'} header={'<receiveTask> 接收任务'}>
            <p>
              用于等待特定消息的任务到达，当流程执行到达接收任务时，流程状态将提交给持久性存储。
              此时处于等待状态，直到接收到消息为止。
              如何继续？必须使用到达接收任务的执行ID调用runtimeService.signal（executionId）
            </p>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'ShellTask'} header={'<serviceTask> Shell任务'}>
            <p>
              Shell任务允许运行Shell脚本和命令。请注意，Shell任务不是BPMN 2.0规范的正式任务（因此，它没有专用的图标）。
            </p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {'<serviceTask id="shellEcho" activiti:type="shell">'}
            </SyntaxHighlighter>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'TaskListener'} header={'<activiti:taskListener> 用户任务监听器'}>
            <p>任务侦听器用于在发生某些与任务相关的事件时执行自定义Java逻辑或表达式。</p>
            <p>任务侦听器只能作为用户任务的子元素添加到流程定义中。</p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<userTask id="myTask" name="My Task" >\n' +
                '  <extensionElements>\n' +
                '    <activiti:taskListener event="create" class="org.activiti.MyTaskCreateListener" />\n' +
                '  </extensionElements>\n' +
                '</userTask>'
              }
            </SyntaxHighlighter>
            <ul>
              <li>
                <b>event</b>，此属性为必须属性，指定事件类型
                <ul>
                  <li><b>create</b>，创建任务并设置所有任务属性时发生</li>
                  <li><b>assignment</b>，当任务分配给某人时发生，注意：当进程执行到达userTask时，将首先触发一个分配事件，然后再触发create事件。</li>
                  <li><b>complete</b>，任务完成时以及从运行时数据中删除任务之前发生。</li>
                  <li><b>delete</b>，发生在即将删除任务之前。请注意，当任务通常通过completeTask完成时，也将执行它。</li>
                </ul>
              </li>
              <li>
                <b>class</b>，此类必须实现org.activiti.engine.delegate.TaskListener接口
              </li>
              <li>
                <b>expression</b>，不能与class属性一起使用，指定在事件发生时将执行的表达式。
              </li>
              <li>
                <b>delegateExpression</b>，允许指定一个表达式，该表达式可以解析为实现TaskListener接口的对象，类似于服务任务。
              </li>
            </ul>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'subProcess'} header={'<subProcess> 子流程'}>
            <p>
              子流程是一个包含其他活动，网关，事件等的活动，这些活动本身构成一个流程，子流程是在父流程中完全定义的。
            </p>
            <p>
              子流程为事件创建了新范围。在子流程执行期间引发的事件可以由子流程边界上的边界事件捕获，因此，该事件的作用域仅限于子流程。
            </p>
            <ul>
              <li>要求1：子流程只能有一个无开始事件，不允许有其他开始事件类型。</li>
              <li>要求2：一个子流程必须至少具有一个结束事件。请注意，BPMN 2.0规范允许省略子流程中的开始和结束事件，但是当前的Activiti实现不支持此功能。</li>
              <li>要求3：序列流不能跨越子流程边界</li>
            </ul>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<subProcess id="subProcess">\n' +
                '  <startEvent id="subProcessStart" />\n' +
                '  ... other Sub-Process elements ...\n' +
                '  <endEvent id="subProcessEnd" />\n' +
                ' </subProcess>'
              }
            </SyntaxHighlighter>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'EventSubProcess'} header={'<subProcess> 事件子流程'}>
            <p>
              事件子流程是BPMN 2.0中的新增功能。事件子流程是由事件触发的子流程。
              可以在流程级别或任何子流程级别添加事件子流程。使用启动事件配置用于触发事件子流程的事件。
            </p>
            <p>
              由此可见，事件子流程不支持任何启动事件。可以使用消息事件，错误事件，信号事件，计时器事件或补偿事件之类的事件来触发事件子流程。
              创建托管事件子流程的范围（流程实例或子流程）时，将创建对开始事件的预订。 当范围被破坏时，订阅将被删除。
            </p>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'transaction'} header={'<transaction> 事务子流程'}>
            <p>它是一个嵌入式子流程，Activiti以事务方式执行流程。并发使用乐观锁定来解决。它与transaction标准不同。</p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<transaction id="myTransaction" >\n' +
                '\t...\n' +
                '</transaction>'
              }
            </SyntaxHighlighter>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'callActivity'} header={'<callActivity> 调用节点'}>
            <p>
              当流程执行到达调用节点中时，将创建一个新的执行流程，它是到达调用节点的执行的子执行。
              然后，该子执行用于执行子流程，从而有可能在常规流程中创建并行子执行。
              父执行程序等待到子过程完全结束，然后再继续原始过程。
            </p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {'<callActivity id="callCheckCreditProcess" name="Check credit" calledElement="checkCreditProcess" />'}
            </SyntaxHighlighter>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<callActivity id="callSubProcess" calledElement="checkCreditProcess" >\n' +
                '  <extensionElements>\n' +
                '\t  <activiti:in source="someVariableInMainProcess" target="nameOfVariableInSubProcess" />\n' +
                '\t  <activiti:out source="someVariableInSubProcess" target="nameOfVariableInMainProcess" />\n' +
                '  </extensionElements>\n' +
                '</callActivity>'
              }
            </SyntaxHighlighter>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'ProcessInitiationAuthorization'} header={'<process> 授权启动流程实例'}>
            <p>
              默认情况下，允许所有人启动已部署流程定义的新流程实例。流程启动授权功能允许定义用户和组，
              以便Web客户端可以选择限制用户启动新流程实例。
              注意，Activiti Engine不会以任何方式验证授权定义。
            </p>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<process id="potentialStarter">\n' +
                '  <extensionElements>\n' +
                '    <activiti:potentialStarter>\n' +
                '       <resourceAssignmentExpression>\n' +
                '         <formalExpression>group2, group(group3), user(user3)</formalExpression>\n' +
                '       </resourceAssignmentExpression>\n' +
                '    </activiti:potentialStarter>\n' +
                '  </extensionElements>\n' +
                '\n' +
                '  <startEvent id="theStart"/>\n' +
                '  ...'
              }
            </SyntaxHighlighter>
            <SyntaxHighlighter language={'xml'} style={monokai}>
              {
                '<process id="potentialStarter" activiti:candidateStarterUsers="user1, user2"\n' +
                '                               activiti:candidateStarterGroups="group1">\n' +
                '      ...'
              }
            </SyntaxHighlighter>
          </Collapse.Panel>
          {/*--------------------------------------------------------------------------*/}
          <Collapse.Panel key={'Forms'} header={'变量表单'}>
            <p>
              Activiti提供了一种方便灵活的方式来为业务流程的手动步骤添加表单。
              我们支持两种使用表单的策略：具有表单属性的内置表单呈现和外部表单呈现。
            </p>
            <p>
              与业务流程相关的所有信息要么包含在流程变量本身中，要么通过流程变量引用。
              Activiti支持将复杂的Java对象存储为过程变量，例如可序列化的对象，JPA实体或整个XML文档，以字符串形式存储。
            </p>
          </Collapse.Panel>
        </Collapse>
        <br/>
      </>
    );
  }
}

export default UActivitiElement;
