import uuid from 'uuid';
import axios from 'axios';

export const GET_ITEMS = '[ProductList]GET_ITEMS';
export const ADD_ITEM = '[ItemModal]ADD_ITEM';
export const DELETE_ITEM = '[ProductList]DELETE_ITEM';
export const ITEMS_LOADING = '[ProductList]ITEMS_LOADING';
export const ITEMS_LOADED = 'ITEMS_LOADED!';

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get('/api/items')
    .then(res=>dispatch({
      type: GET_ITEMS,
      //MongoDB data (ARRAY) placed into payload, toward reducer
      payload: res.data
    }))
    .then(()=>dispatch({type:ITEMS_LOADED}))

};

export const addItem = itemInputted => {
  //make the item object for store:
  const newItem = {
    id: uuid(),
    name: itemInputted
  };

  return {
    type: ADD_ITEM,
    payload: newItem
  };
};

export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    payload: id
  };
};
