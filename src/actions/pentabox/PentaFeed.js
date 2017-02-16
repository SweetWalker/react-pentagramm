import * as constants from '../../constants/pentabox';
import 'whatwg-fetch';

export function getMessages(messages) {
  return {
    type: constants.GET_ALL_MESSAGES,
    payload: messages
  };
}

export function addMessage(message) {
  return {
    type: constants.ADD_PENTA_MESSAGE,
    payload: message
  };
}

export function removeMessage(id) {
  return {
    type: constants.DELETE_PENTA_MESSAGE,
    payload: id
  };
}
