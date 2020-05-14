import { combineReducers } from 'redux';
import inventoryReducers from './inventoryReducers';
import contactReducers from './contactReducers';
import dealersReducer from './dealersReducers';
import modelsReducers from './modelsReducers';
import errorReducers from './errorReducers';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  models: modelsReducers,
  inventory: inventoryReducers,
  contacts: contactReducers,
  dealers: dealersReducer,
  form: formReducer,
  error: errorReducers
});