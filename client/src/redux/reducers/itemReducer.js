import {ADD_ITEM, DELETE_ITEM, GET_ITEMS, ITEMS_LOADED, ITEMS_LOADING} from '../actions/actions';
// import uuid from 'uuid';

//state
const initialState = {
  items: [],
  isLoading: false
};

//reducer
const itemReducer = (state = initialState, action) => {
  switch (action.type) {

    case ITEMS_LOADING:
      return {...state, isLoading: true};

    case ITEMS_LOADED:
      return {...state, isLoading: false};

    case GET_ITEMS:
      return { ...state, items: action.payload };

    case ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] };

    case DELETE_ITEM:
      return {
        items: state.items.filter(item => {
          return item._id !== action.payload;
        })
      };

    default:
      return state;
  }
};

export default itemReducer;
