import _ from 'lodash';
import { FETCH_CONTACTS, CREATE_CONTACT } from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case CREATE_CONTACT:
      return { ...state, [action.payload.guid]: action.payload }
    case FETCH_CONTACTS:
      return { ...state, ..._.mapKeys(action.payload, 'guid') }
    default:
      return state;
  }
}