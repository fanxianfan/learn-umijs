import React, {Component} from 'react';
import VerticalMenu from "@/components/VerticalMenu";

/**
 * 活动分页
 * */
class ActivityPaging extends Component {
  render() {
    return (
      <div>
        <VerticalMenu.Breadcrumb/>
      </div>
    );
  }
}

export default ActivityPaging;
