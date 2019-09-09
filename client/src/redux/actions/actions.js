import axios from 'axios';

export const GET_ITEMS = '[ProductList]GET_ITEMS';
export const ADD_ITEM = '[ItemModal]ADD_ITEM';
export const DELETE_ITEM = '[ProductList]DELETE_ITEM';
export const ITEMS_LOADING = '[ProductList]ITEMS_LOADING';
export const ITEMS_LOADED = 'ITEMS_LOADED!';
export const ADD_ITEM_BTN_CLICKED = '[ItemModal]ADD_ITEM_BTN_CLICKED';

export const addItemBtnClicked = () => {
  return {
    type: ADD_ITEM_BTN_CLICKED
  };
};
export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};

//THUNK 1: allows the action creator func to return a FUNC with dispatch passed to it.
// The async axios request finishes, receives the dispatch from the functino param, .THEN dispatches
export const getItems = () => (dispatch, getState) => {
  dispatch(setItemsLoading());
  axios
    .get('/api/items')
    .then(res =>
      dispatch({
        type: GET_ITEMS,
        //MongoDB data (ARRAY) placed into payload, toward reducer
        payload: res.data
      })
    )
    .then(() => dispatch({ type: ITEMS_LOADED }));
};

//THUNK 2: allows the action creator func to return a FUNC with dispatch passed to it.
// The async axios request finishes, receives the dispatch from the functino param, .THEN dispatches
export const addItem = itemInput => (dispatch, getState) => {
  const newItemObj = {
    name: itemInput
  };
  // pass object (newItemObj) back via the BODY, back to MongoDB
  axios.post('/api/items', newItemObj).then(res =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data
    })
  );
};

//THUNK 3: allows the action creator func to return a FUNC with dispatch passed to it.
// The async axios request finishes, receives the dispatch from the functino param, .THEN dispatches
export const deleteItem = _id => (dispatch, getState) => {
  axios.delete(`/api/items/${_id}`).then(res =>
    dispatch({
      type: DELETE_ITEM,
      payload: _id
    })
  );
};
