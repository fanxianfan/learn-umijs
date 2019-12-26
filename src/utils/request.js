import {notification, message} from 'antd';
import router from 'umi/router';

require('es6-promise').polyfill();
require('isomorphic-fetch');

/**
 * 发送一个请求, 并返回JSON数据.
 *
 * @param  {string} url       请求路径
 * @param  {object} [options] 请求配置
 * @return {object}           返回响应结果或者错误
 */
export async function request(url, options) {

  //默认请求头属性
  const defaultHeader = {
    //AJAX请求头
    'X-Requested-With': 'XMLHttpRequest',
  };

  if (options.hasOwnProperty('headers')) {
    options.headers = {
      ...defaultHeader,
      ...options.headers
    }
  } else {
    options.headers = {
      ...defaultHeader
    }
  }
  //默认请求属性
  const defaultOptions = {
    //不论是不是跨域的请求,总是发送请求资源域在本地的 cookies、 HTTP Basic authentication 等验证信息.
    credentials : 'omit',
    //允许跨源请求
    mode: 'cors',
  };

  //fetch请求属性
  const fetchOptions = {
    ...defaultOptions,
    ...options,
  };

  return fetch(url, fetchOptions)
    .then((response) => {
      console.log("then1:", response);
      //响应正常
      if (response.status >= 200 && response.status < 300) {
        return response;
      }
      //响应错误
      const errorText = codeMessage[response.status] || response.statusText;
      notification.error({
        message: `请求错误 ${response.status}: ${response.url}`,
        description: errorText,
      });
      //抛出异常
      const error = new Error(errorText);
      error.name = response.statusText;
      error.response = response;
      throw error;
    })
    .then((response) => {
      //处理响应结果
      const contentType = response.headers.get('Content-Type');
      if(!contentType.match(/application\/json/i)) {
        message.error(`响应结果类型错误，${response.url}`);
      } else {
        return response.json();
      }
    })
    .catch((e) => {
      const status = e.name;
      if (status === 403) {
        router.push('/403');
        return;
      }
      if (status >= 404 && status < 422) {
        router.push('/404');
        return;
      }
      if (status <= 504 && status >= 500) {
        router.push('/500');
      }
    });
}

/**
 * 响应状态
 * */
const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};


/**
 * 将对象转为表单请求参数
 * @param {object} params 参数对象
 * @return {string} 转换后的字符串
 * */
export function getReqFormBody(params) {
  params = typeof params !== 'object' ? {} : params;
  return Object.keys(params)
    .map(paramKey => {
      return encodeURIComponent(paramKey) + '=' + encodeURIComponent(params[paramKey]);
    })
    .join('&');
}

/**
 * 获取表单请求体的对应请求头
 * @return {object} 请求头
 * */
export function getReqFormHeader() {
  return {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  }
}
