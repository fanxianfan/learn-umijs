import React, {Component} from 'react';
import VerticalMenu from "@/components/VerticalMenu";

/**
 * 流程分页页面
 * */
class FlowPaging extends Component {

  constructor(props) {
    super(props);
    //请求参数
  }

  render() {
    return (
      <>
        <VerticalMenu.Breadcrumb/>
      </>
    );
  }
}

export default FlowPaging;
