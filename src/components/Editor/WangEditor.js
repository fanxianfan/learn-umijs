import React, {Component} from 'react';
import E from 'wangeditor';

/**
 * wangEditor富文本组件 https://www.kancloud.cn/wangfupeng/wangeditor3/332599
 * @author fxf
 * */
class WangEditor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: null,
      html: null,
    };
  }

  componentDidMount() {
    this.initEditor();
  }

  /**
   * 初始化editor
   * */
  initEditor = () => {
    const editor = new E(this.editorMenuRef, this.editorBodyRef);
    editor.customConfig.onchange = () => {
      this.setState({
        text: editor.txt.text(),
        html: editor.txt.html()
      })
    };
    editor.customConfig.menus = [
      'head',  // 标题
      'bold',  // 粗体
      'fontSize',  // 字号
      'fontName',  // 字体
      'italic',  // 斜体
      'underline',  // 下划线
      'strikeThrough',  // 删除线
      'foreColor',  // 文字颜色
      'backColor',  // 背景颜色
      'link',  // 插入链接
      'list',  // 列表
      'justify',  // 对齐方式
      'quote',  // 引用
      'emoticon',  // 表情
      'image',  // 插入图片
      'table',  // 表格
      'video',  // 插入视频
      'code',  // 插入代码
      'undo',  // 撤销
      'redo'  // 重复
    ];
    editor.customConfig.uploadImgShowBase64 = true;
    editor.create();
  };

  /**
   * editor菜单DomRef
   * */
  setEditorMenu = (element) => {
    this.editorMenuRef = element;
  };

  /**
   * editor内容DomRef
   * */
  setEditorBody = (element) => {
    this.editorBodyRef = element;
  };

  render() {
    return (
      <>
        <div ref={this.setEditorMenu} />
        <div ref={this.setEditorBody} />
      </>
    );
  }
}

export default WangEditor;
