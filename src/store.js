import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as actionTypes from './constants/ActionType';
import * as reducers from './reducers/PentaFeed';

export const initialState = {
  data: []
};

function mainFeed(state = initialState, { type, payload }) {
  switch(type) {
    case actionTypes.GET_ALL_MESSAGES:
      return reducers.getMessages(state, payload)
    case actionTypes.ADD_PENTA_MESSAGE:
      return reducers.addMessage(state, payload);
    case actionTypes.DELETE_PENTA_MESSAGE:
      return reducers.removeMessage(state, payload);
    default:
      return state;
  }
}
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(mainFeed);

export default store;
