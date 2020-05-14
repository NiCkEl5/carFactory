import _ from 'lodash';

import { FETCH_MODELS } from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_MODELS:
      return { ...state, ..._.mapKeys(action.payload, 'guid') }
    default:
      return state;
  }
}