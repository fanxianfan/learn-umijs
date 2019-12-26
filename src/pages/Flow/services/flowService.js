import {request, getReqFormBody, getReqFormHeader} from '@/utils/request';

/**
 * 流程分页
 * */
export async function query(params) {
  params = {type: 'flowInfo'};
  return request('https://manage.fanfan.wiki/temp/keyValue/getJSON', {
    method: 'POST',
    headers: getReqFormHeader(),
    body: getReqFormBody(params),
  });
}
