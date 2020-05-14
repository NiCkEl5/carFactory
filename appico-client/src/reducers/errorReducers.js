
import { CREATE_ERROR, CLEAR_ERROR } from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case CLEAR_ERROR:
      return { formError: false }
    case CREATE_ERROR:
      return { formError: true }
    default:
      return state;
  }
}