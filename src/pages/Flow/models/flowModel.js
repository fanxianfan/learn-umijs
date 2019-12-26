import {query, create} from '../services/flowService';

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
    *query({payload}, { call }) {
      const response = yield call(query, payload);
      console.log("response",response);
    },
    *create({payload}, {call}) {
      const response = yield call(create, payload);
      console.log("create response:", response);
    }
  },
}
