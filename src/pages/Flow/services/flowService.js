import {request, getReqFormBody, getReqFormHeader} from '@/utils/request';

/**
 * 流程分页
 * */
export async function query(params) {
  return request('https://manage.fanfan.wiki/temp/keyValue/getJSON', {
    method: 'POST',
    headers: getReqFormHeader(),
    body: getReqFormBody(params),
    credentials: 'omit'
  });
}

/**
 * 流程新建
 * */
export async function create(params) {
  return request('/api/flow/create', {
    method: 'POST',
    body: params
  })
}
