import React, {Component} from "react";
import {Breadcrumb} from "antd";
import Link from "umi/link";
import styles from "./NavCrumbs.less";
import VerticalMenu from "@/components/Menu/VerticalMenu";

/**
 * 面包屑导航栏
 * @author fxf
 * */
class NavCrumbs extends Component {
  constructor(props) {
    super(props);
    this.itemArray = [];
    //当前页面节点
    for (let i = 0; i < VerticalMenu.routesArray.length; i++) {
      const route = VerticalMenu.routesArray[i];
      if (route.path === VerticalMenu.location['pathname']) {
        this.itemArray.push({
          parent: route.parent,
          key: route.key,
          element: (<Breadcrumb.Item key={route.key}><Link to={route.path}>{route.name}</Link></Breadcrumb.Item>)
        });
        break;
      }
    }
    //迭代父节点
    this.iteration();
  }

  iteration = () => {
    const child = this.itemArray[0];
    for (let i = 0; i < VerticalMenu.routesArray.length; i++) {
      const route = VerticalMenu.routesArray[i];
      if (route.key === child.parent) {
        this.itemArray.unshift({
          parent: route.parent,
          key: route.key,
          element: (<Breadcrumb.Item key={route.key}><Link to={route.path}>{route.name}</Link></Breadcrumb.Item>)
        });
        this.iteration();
        break;
      }
    }
  };

  render() {
    return (
      <>
        <Breadcrumb className={styles.breadcrumb}>
          <Breadcrumb.Item>
            首页
          </Breadcrumb.Item>
          {this.itemArray.map((item) => {
            return item.element;
          })}
        </Breadcrumb>
      </>
    )
  }
}

export default NavCrumbs;
