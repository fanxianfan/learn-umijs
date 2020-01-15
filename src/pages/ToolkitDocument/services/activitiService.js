import {request, getReqFormBody} from '@/utils/request';


/**部署流程*/
export async function deploy() {
  return request('http://localhost:10010/api/activiti/deploy', {
    credentials: 'omit',
  });
}

/**开启流程*/
export async function startProcess() {
  return request('http://localhost:10010/api/activiti/startProcess', {
    credentials: 'omit',
  });
}

/**暂停流程*/
export async function suspendProcess(){
  return request('http://localhost:10010/api/activiti/suspendProcess', {
    credentials: 'omit',
  });
}

/**激活流程*/
export async function activateProcess() {
  return request('http://localhost:10010/api/activiti/activateProcess', {
    credentials: 'omit',
  });
}

/**获取任务*/
export async function taskQuery(params) {
  return request('http://localhost:10010/api/activiti/taskQuery?'+ getReqFormBody(params), {
    credentials: 'omit',
  });
}

/**完成任务推动节点到下一个节点*/
export async function complete(params) {
  return request('http://localhost:10010/api/activiti/complete?' + getReqFormBody(params), {
    credentials: 'omit',
  });
}

/**SQL查询*/
export async function sqlQuery() {
  return request('http://localhost:10010/api/activiti/sqlQuery', {
    credentials: 'omit',
  });
}
