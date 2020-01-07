import React, {Component} from 'react';
import {Tag} from "antd";
import styles from '@/utils/common.less';

/**
 * Activiti通用数据库表
 * @author fxf
 * */
class TableGeneral extends Component {
  render() {
    return (
      <div id='TableGeneral'>
        <blockquote className={styles.blockquote}>
          Activiti通用数据表（General）2张
        </blockquote>
        <div className={styles.m10}>
          <Tag color='blue'>act_ge_bytearray</Tag>
          <Tag color='blue'>act_ge_property</Tag>
        </div>
        <p style={{textIndent: 30}}>
          通用数据表用于存放一些通过的数据，这些表本身不关心特定的流程或者业务， 只用于存放业务或者流程所使用的通用资源。
          它们可以独立存在于流程引擎或者应用系统中，其他的数据表也可以使用这些表中的数据。通用数据表有两个，都是用ACT_GE开头。
        </p>
        <ul>
          <li id='@act_ge_bytearray'>
            <b>资源表 （act_ge_bytearray）</b>
            <p>
              用于保存与流程引擎相关的资源，只要调用了Activiti存储服务的API，其提供的资源均会被转换为byte数据，
              并保存到此表中。
              activiti使用这个表来保存字符串、流程文件的内容和流程图片内容等。
            </p>
            <ol>
              <li>
                <b>ID_：</b>数据表主键，varchar(64)
              </li>
              <li>
                <b>REV_：</b>数据版本，Activiti为一些有可能会频繁修改的数据表加入该字段，用来标记数据被操作的次数
              </li>
              <li>
                <b>NAME_：</b>资源名称，类型为varchar(255)
              </li>
              <li>
                <b>DEPLOYMENT_ID_：</b>一次部署可以添加多个资源，该字段与部署表ACT_RE_DEPLOYMENT的主键相关联。
              </li>
              <li>
                <b>BYTES_：</b>资源内容，数据类型为longblob，最大可存4GB数据
              </li>
              <li>
                <b>GENERATED_：</b>是否有Activiti自动产生的资源，0：false, 1：true
              </li>
            </ol>
          </li>
          <br/>
          <li id='@act_ge_property'>
            <b>属性表 （act_ge_property）</b>
            <p>将全部的属性抽象为key-value对，每个属性都有名称和值，使用ACT_GE_PROPERTY来保存这些属性</p>
            <ol>
              <li>
                <b>NAME_：</b>属性名称，varchar(64)
              </li>
              <li>
                <b>VALUE：</b>属性值，varchar(300)
              </li>
              <li>
                <b>REV_:</b>数据的版本号
              </li>
            </ol>
          </li>
        </ul>
      </div>
    );
  }
}

export default TableGeneral;
