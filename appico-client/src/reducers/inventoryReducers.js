import _ from 'lodash';
import {
  FETCH_INVENTORY
} from '../actions/types'

export default (state={}, action) => {
  switch(action.type) {
    case FETCH_INVENTORY:
      return{ ...state, ..._.mapKeys(action.payload, 'guid')}
    default:
      return state;
  }
}