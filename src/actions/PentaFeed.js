import * as constants from '../constants/ActionType';
import 'whatwg-fetch';

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
export function fetchMessages(url) {
  return dispatch => {
    fetch(url)
      .then((response) => {
        return response.json()
      }).then((json) => {
        dispatch(addMessage(json));
      }).catch((error) => {
        console.error(error);
      });
  };
}
export function saveMessage(url, comment) {
  var head = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  }
  return dispatch => {
    fetch(url, head)
      .then((response) => {
        return response.json()
      }).then((json) => {
        dispatch(addMessage(json));
      }).catch((error) => {
        console.error(error);
      });
  };
}

export function deleteMessage(url, id) {
  var head = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id: id })
  }
  return dispatch => {
    fetch(url, head)
      .then((response) => {
        return response.json()
      }).then((json) => {
        dispatch(addMessage(json));
      }).catch((error) => {
        console.error(error);
      });
  };
}
