import React, {Component} from 'react';
import {Card, Select, Button, Icon} from 'antd';
import styles from '@/utils/common.less';
import 'animate.css';
import favicon from '@/../public/favicon.ico';
import NavCrumbs from "@/components/Nav/NavCrumbs";

const {Option} = Select;

/**
 * 工具箱：动画效果
 * @author fxf
 * */
class AnimationIndex extends Component {

  animation = 'bounce';

  /**事件：动画演示*/
  eventOnChange = (val) => {
    this.animation = val;
    const element = document.querySelector('.example-animate');
    element.className = `example-animate animated ${val}`;
  };

  /**事件：点击预览按钮*/
  eventClickShow = () => {
    const element = document.querySelector('.example-animate');
    element.className = `example-animate`;
    setTimeout(() => {
      element.className = `example-animate animated ${this.animation}`;
    }, 100);
  };

  render() {
    return (
      <>
        <NavCrumbs/>
        <Card className={styles.m10}>
          <div className={`${styles.textAlignC} ${styles.m10}`}>
            <img src={favicon} alt='example' className='example-animate animated bounce' width='80px' />
          </div>

          <Select onChange={this.eventOnChange} defaultValue='bounce' placeholder='选择动画预览效果' className={styles.width100per}>
            <Option key='bounce'>bounce</Option>
            <Option key='flash'>flash</Option>
            <Option key='pulse'>pulse</Option>
            <Option key='rubberBand'>rubberBand</Option>
            <Option key='shake'>shake</Option>
            <Option key='headShake'>headShake</Option>
            <Option key='swing'>swing</Option>
            <Option key='tada'>tada</Option>
            <Option key='wobble'>wobble</Option>
            <Option key='jello'>jello</Option>
            <Option key='bounceIn'>bounceIn</Option>
            <Option key='bounceInDown'>bounceInDown</Option>
            <Option key='bounceInLeft'>bounceInLeft</Option>
            <Option key='bounceInRight'>bounceInRight</Option>
            <Option key='bounceInUp'>bounceInUp</Option>
            <Option key='bounceOut'>bounceOut</Option>
            <Option key='bounceOutDown'>bounceOutDown</Option>
            <Option key='bounceOutLeft'>bounceOutLeft</Option>
            <Option key='bounceOutRight'>bounceOutRight</Option>
            <Option key='bounceOutUp'>bounceOutUp</Option>
            <Option key='fadeIn'>fadeIn</Option>
            <Option key='fadeInDown'>fadeInDown</Option>
            <Option key='fadeInDownBig'>fadeInDownBig</Option>
            <Option key='fadeInLeft'>fadeInLeft</Option>
            <Option key='fadeInLeftBig'>fadeInLeftBig</Option>
            <Option key='fadeInRight'>fadeInRight</Option>
            <Option key='fadeInRightBig'>fadeInRightBig</Option>
            <Option key='fadeInUp'>fadeInUp</Option>
            <Option key='fadeInUpBig'>fadeInUpBig</Option>
            <Option key='fadeOut'>fadeOut</Option>
            <Option key='fadeOutDown'>fadeOutDown</Option>
            <Option key='fadeOutDownBig'>fadeOutDownBig</Option>
            <Option key='fadeOutLeft'>fadeOutLeft</Option>
            <Option key='fadeOutLeftBig'>fadeOutLeftBig</Option>
            <Option key='fadeOutRight'>fadeOutRight</Option>
            <Option key='fadeOutRightBig'>fadeOutRightBig</Option>
            <Option key='fadeOutUp'>fadeOutUp</Option>
            <Option key='fadeOutUpBig'>fadeOutUpBig</Option>
            <Option key='flipInX'>flipInX</Option>
            <Option key='flipInY'>flipInY</Option>
            <Option key='flipOutX'>flipOutX</Option>
            <Option key='flipOutY'>flipOutY</Option>
            <Option key='lightSpeedIn'>lightSpeedIn</Option>
            <Option key='lightSpeedOut'>lightSpeedOut</Option>
            <Option key='rotateIn'>rotateIn</Option>
            <Option key='rotateInDownLeft'>rotateInDownLeft</Option>
            <Option key='rotateInDownRight'>rotateInDownRight</Option>
            <Option key='rotateInUpLeft'>rotateInUpLeft</Option>
            <Option key='rotateInUpRight'>rotateInUpRight</Option>
            <Option key='rotateOut'>rotateOut</Option>
            <Option key='rotateOutDownLeft'>rotateOutDownLeft</Option>
            <Option key='rotateOutDownRight'>rotateOutDownRight</Option>
            <Option key='rotateOutUpLeft'>rotateOutUpLeft</Option>
            <Option key='rotateOutUpRight'>rotateOutUpRight</Option>
            <Option key='hinge'>hinge</Option>
            <Option key='jackInTheBox'>jackInTheBox</Option>
            <Option key='rollIn'>rollIn</Option>
            <Option key='rollOut'>rollOut</Option>
            <Option key='zoomIn'>zoomIn</Option>
            <Option key='zoomInDown'>zoomInDown</Option>
            <Option key='zoomInLeft'>zoomInLeft</Option>
            <Option key='zoomInRight'>zoomInRight</Option>
            <Option key='zoomInUp'>zoomInUp</Option>
            <Option key='zoomOut'>zoomOut</Option>
            <Option key='zoomOutDown'>zoomOutDown</Option>
            <Option key='zoomOutLeft'>zoomOutLeft</Option>
            <Option key='zoomOutRight'>zoomOutRight</Option>
            <Option key='zoomOutUp'>zoomOutUp</Option>
            <Option key='slideInDown'>slideInDown</Option>
            <Option key='slideInLeft'>slideInLeft</Option>
            <Option key='slideInRight'>slideInRight</Option>
            <Option key='slideInUp'>slideInUp</Option>
            <Option key='slideOutDown'>slideOutDown</Option>
            <Option key='slideOutLeft'>slideOutLeft</Option>
            <Option key='slideOutRight'>slideOutRight</Option>
            <Option key='slideOutUp'>slideOutUp</Option>
            <Option key='heartBeat'>heartBeat</Option>
          </Select>
          <Button type='primary' onClick={this.eventClickShow} className={styles.mt5} block ><Icon type='eye' />预览</Button>
        </Card>
      </>
    );
  }
}

export default AnimationIndex;
