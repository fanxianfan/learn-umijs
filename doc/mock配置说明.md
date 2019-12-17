### mock文件目录说明
- 此目录下的所有.js文件（包括 _ 前缀的）都会被解析为 mock 文件

###文件示例：
比如，新建“mock/users.js”，内容如下:
```javascript
export default {
  '/api/users': ['a', 'b'],
};
//则通过浏览器访问路径：http:localhost:8000/api/users，返回['a','b'];
```
###忽略处理
如果想忽略 mock 文件夹下的部分文件，参考 mock.exclude 配置
