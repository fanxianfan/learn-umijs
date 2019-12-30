import React, {Component} from 'react';
import {Card, Calendar} from 'antd';
import styles from '@/utils/common.less';

/**
 * 工具箱：生活日历
 * */
class CalendarIndex extends Component {

  eventOnSelect = (date) => {
    console.log(date.format('YYYY-MM-DD'));
  };

  render() {
    return (
      <>
        <Card className={styles.m10}>
          <Calendar onSelect={this.eventOnSelect} />
        </Card>
      </>
    );
  }
}

export default CalendarIndex;
