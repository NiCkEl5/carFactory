import appicoapi from '../api/AppicoApi';
import history from '../history';
import { FETCH_MODELS, FETCH_INVENTORY, 
    FETCH_CONTACTS, 
    FETCH_DEALERS, 
    CREATE_CONTACT, 
    CREATE_ERROR, 
    CLEAR_ERROR } from './types'

export const fetchInventory = () => async dispatch => {
  const response = await appicoapi.get('/inventories');
  dispatch({type: FETCH_INVENTORY, payload: response.data});
}

export const fetchContacts = () => async dispatch => {
  const response = await appicoapi.get('/contacts');
  dispatch({type: FETCH_CONTACTS, payload: response.data});
}

export const createContact = formValues => async dispatch => {
  try{
    const response = await appicoapi.post('/contacts', {...formValues});
    dispatch({type: CREATE_CONTACT, payload: response.data});
    history.push('/');
  }catch(e){
    dispatch({type: CREATE_ERROR, payload: e});
  }
}

export const fetchDealers = () => async dispatch => {
  const response = await appicoapi.get('/dealers');
  dispatch({type: FETCH_DEALERS, payload: response.data});
}

export const fetchModels = () => async dispatch => {
  const response = await appicoapi.get('/carmodels');
  dispatch({type: FETCH_MODELS, payload: response.data});
}

export const clearError = () => async dispatch => {
  dispatch({type: CLEAR_ERROR});
}