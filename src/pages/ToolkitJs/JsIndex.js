import React, {Component} from 'react';
import {Row, Card, Input, Button, Icon, Tooltip, notification} from 'antd';
import NavCrumbs from '@/components/Nav/NavCrumbs';
import moment from 'moment';
import styles from '@/utils/common.less';


const {TextArea} = Input;

/**
 * 工具箱：JS语句实验
 * @author fxf
 * */
class JsIndex extends Component {

  constructor(props) {
    super(props);
    this.state = {
      code: null
    };
    this.historyArray = [];
  }

  /**事件：执行JS代码*/
  eventExeClick = (isCheck) => {
    const code = this.state.code;
    if (code === null || code.trim().length < 1) {
      notification.error({message: 'JS代码不能为空'});
      return;
    }
    try {
      window.Function(code)();
      if (isCheck === true) {
        notification.success({message: 'JS代码语法正确'});
      } else {
        this.historyArray.push({code, time: moment().format('YYYY-MM-DD HH:mm:SS')});
      }
    } catch (e) {
      notification.error({message: 'JS代码语法错误', description: e.toString()});
    }
  };

  /**事件：代码变换*/
  eventCodeOnChange = (e) => {
    this.setState({code: e.target.value});
  };

  /**事件：查看执行历史*/
  eventShowHistory = () => {
    console.log(this.historyArray);
  };

  render() {
    const cardAction = [
      (<Tooltip title='查看历史'><Icon type="history" key="setting" onClick={this.eventShowHistory} /></Tooltip>),
      (<Tooltip title='校验代码语法'><Icon type="code" key="check" onClick={() => {this.eventExeClick(true)}} /></Tooltip>)
      ];

    return (
      <>
       <NavCrumbs/>
        <Row className={`${styles.m10}`}>
          <Card actions={cardAction}>
            <blockquote className={`${styles.blockquote}`}><strong>代码语句</strong></blockquote>
            <TextArea placeholder='这里输入JS代码...' allowClear={true} rows={6} onChange={this.eventCodeOnChange} value={this.state.code}/>
            <Button type='primary' block onClick={this.eventExeClick} className={`${styles.mt10} ${styles.mb10}`}>
              <Icon type='check'/>执行JS代码
            </Button>
          </Card>
        </Row>
      </>
    );
  }
}

export default JsIndex;
