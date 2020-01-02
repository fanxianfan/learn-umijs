import React, {Component} from 'react';
import styles from '@/utils/common.less';

/**
 * Activiti身份数据表
 * @author fxf
 * */
class TableIdentity extends Component {
  render() {
    return (
      <>
        <blockquote id='TableIdentity' className={styles.blockquote}>
          Activiti身份数据表
        </blockquote>
        <p>
          Activiti的整个身份数据模块，可以完全独立存在。身份数据表并没有保存流程相关的数据以及关联。
          身份表名称使用ACT_ID开头
        </p>
        <ul>
          <li>
            <b>用户表（ACT_ID_USER）</b>
            <ol>
              <li><b>ID_:</b>主键</li>
              <li><b>REV_:</b>数据版本号</li>
              <li><b>FIRST_:</b>名字的名称 varchar(255)</li>
              <li><b>LAST_:</b>名字的姓氏 varchar(255)</li>
              <li><b>EMAIL_:</b>用户邮箱 varchar(255)</li>
              <li><b>PWD_:</b>用户密码 varchar(255)</li>
              <li><b>PICTURE_ID_:</b>用户图片，对应资源中的数据ID</li>
            </ol>
          </li>
          <br/>
          <li>
            <b>用户账号信息表（ACT_ID_INFO）</b>
            <p>
              Activiti将用户、用户账号、用户信息分为三种数据。
              其中用户表保存用户数据，而用户账号和用户信息保存到ACT_ID_INFO表中，
            </p>
            <ol>
              <li><b>ID_:</b>主键</li>
              <li><b>REV_:</b>数据版本</li>
              <li><b>USER_ID_:</b>对应用户表的数据ID，但没有强制外键关联</li>
              <li><b>TYPE_:</b>信息类型，当前可以设置用户账号(account)、用户信息(userinfo)、NULL三种</li>
              <li><b>KEY_:</b>数据的键，可以根据该键查找用户信息的值</li>
              <li><b>VALUE_:</b>数据的值，类型为varchar,长度为255</li>
              <li><b>PASSWORD_:</b>用户账号的密码字段，不过当前版本的Activiti并没有使用该字段</li>
              <li><b>PARENT_ID_:</b>该信息的父信息ID，如果一条数据设置了父信息ID,
                则表示该数据是0用户账号（信息）的明细数据。例如一个账号有激活日期，那么激活日期就是该账号的明细数据，
                此处使用了自关联来实现。
              </li>
            </ol>
          </li>
          <br/>
          <li>
            <b>用户组表（ACT_ID_GROUP）</b>
            <ol>
              <li><b>ID_：</b>主键</li>
              <li><b>REV_:</b>数据版本号</li>
              <li><b>NAME_:</b>用户组名称</li>
              <li><b>TYPE_:</b>用户组类型，类型不由Activiti提供。</li>
            </ol>
          </li>
          <br/>
          <li>
            <b>关系表（ACT_ID_MEMBERSHIP）</b>
            <p>
              一个用户组可以有多个用户，同时一个用户也可以数据不同的用户组，此表为多对多的中间关系表。
            </p>
            <ol>
              <li><b>USER_ID_:</b>用户ID，不能为null，外键约束</li>
              <li><b>GROUP_ID_:</b>用户组ID，不能为null，外键约束</li>
            </ol>
          </li>
        </ul>
      </>
    );
  }
}

export default TableIdentity;
