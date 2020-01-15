import {deploy, startProcess, taskQuery, complete, suspendProcess, activateProcess, sqlQuery} from "../services/activitiService";

export default {

  namespace: 'activitiModel',

  state : {

  },

  effects: {
    *deploy({callback}, {call}) {
      const response = yield call(deploy);
      if (typeof callback === 'function') {
        callback(response);
      }
    },

    *startProcess({callback}, {call}) {
      const response = yield call(startProcess);
      if (typeof callback === 'function') {
        callback(response);
      }
    },

    *suspendProcess({callback}, {call}) {
      const response = yield call(suspendProcess);
      if (typeof callback === 'function') {
        callback(response);
      }
    },

    *activateProcess({callback}, {call}) {
      const response = yield call(activateProcess);
      if (typeof callback === 'function') {
        callback(response);
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
    },

    *sqlQuery({callback}, {call}) {
      const response = yield call(sqlQuery);
      if (typeof callback === 'function') {
        callback(response);
      }
    }
  },

  reducers: {

  }

}
