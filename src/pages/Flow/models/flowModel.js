import {query} from '../services/flowService';

export default {

  namespace: 'flowModel',

  state: {
    dataSource:[]
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        dataSource: action.payload,
      };
    },
  },

  effects: {
    *query({payload}, { call}) {
      const response = yield call(query, payload);
      console.log("response",response);
    },
  },
}
