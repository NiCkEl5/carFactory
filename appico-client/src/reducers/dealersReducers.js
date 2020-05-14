import _ from 'lodash';

import { FETCH_DEALERS } from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_DEALERS:
      return { ...state, ..._.mapKeys(action.payload, 'guid') }
    default:
      return state;
  }
}