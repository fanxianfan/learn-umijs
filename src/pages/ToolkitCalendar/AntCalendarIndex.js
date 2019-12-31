import React, {Component} from 'react';
import {Card, Calendar} from 'antd';
import styles from '@/utils/common.less';
import moment from 'moment';

/**
 * 工具箱：生活日历
 * @author fxf
 * */
class AntCalendarIndex extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'month',
      value: moment(),
    }
  }

  /**
   * 事件：日期选择
   * @param {object} date 选择的时间（moment对象）
   * */
  eventOnSelect = (date) => {
    let {mode} = this.state;
    if (mode === 'year') {
      mode = 'month';
    }
    this.setState({value: date, mode});
  };

  /**
   * 事件：面板变化
   * @param {object} date 选中的日期（moment对象）
   * @param {string} mode 日历模式
   * */
  eventOnPanelChange = (date, mode) => {
    this.setState({mode, value: date});
  };

  render() {
    return (
      <>
        <Card className={styles.m10}>
          <Calendar onSelect={this.eventOnSelect}
                    onPanelChange={this.eventOnPanelChange}
                    mode={this.state.mode}
                    value={this.state.value}
          />
        </Card>
      </>
    );
  }
}

export default AntCalendarIndex;
