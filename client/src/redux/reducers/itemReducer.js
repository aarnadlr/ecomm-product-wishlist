import uuid from 'uuid';
import { ADD_ITEM, DELETE_ITEM, GET_ITEMS } from '../actions/actions';

//state
const initialState = {
  items: [
    {
      id: uuid(),
      name: 'Redux Eggs'
    },
    {
      id: uuid(),
      name: 'Redux Beer'
    },
    {
      id: uuid(),
      name: 'Redux Butter'
    }
  ]
};

//reducer
const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state };
    case ADD_ITEM:
      return { items:[...state.items, action.payload] };
    //
    case DELETE_ITEM:
      return { items:state.items.filter(item=>{
        return item.id !== action.payload
        }) };

    default:
      return state;
  }
};

export default itemReducer;
