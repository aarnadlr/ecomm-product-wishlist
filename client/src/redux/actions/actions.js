import uuid from 'uuid';

export const GET_ITEMS = 'GET_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export const getItems = () => {
  return {
    type: GET_ITEMS
  };
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
