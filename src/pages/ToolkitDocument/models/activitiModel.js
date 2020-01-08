import {deploy, startProcess, taskQuery, complete} from "../services/activitiService";

export default {

  namespace: 'activitiModel',

  state : {

  },

  effects: {
    *deploy({payload}, {call}) {
      const response = yield call(deploy, payload);
      if (payload.hasOwnProperty('callback') && typeof payload.callback === 'function') {
        payload.callback(response);
      }
    },

    *startProcess({payload}, {call}) {
      const response = yield call(startProcess, payload);
      if (payload.hasOwnProperty('callback') && typeof payload.callback === 'function') {
        payload.callback(response);
      }
    },

    *taskQuery({payload, callback}, {call}) {
      const response = yield call(taskQuery, payload);
      if (typeof callback === 'function') {
        callback(response);
      }
    },

    *complete({payload, callback}, {call}) {
      const response = yield call(complete, payload);
      if (typeof callback === 'function') {
        callback(response);
      }
    }
  },

  reducers: {

  }

}
