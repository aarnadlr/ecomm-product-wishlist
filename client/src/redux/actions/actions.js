export const GET_ITEMS = 'GET_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export const getItems = () => {
  return {
    type: GET_ITEMS
  };
};

export const addItem = (name) => {
  return {
    type: ADD_ITEM,
		payload: name
  };
};

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
		payload: id
  };
};
