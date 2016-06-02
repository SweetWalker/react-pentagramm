import * as constants from '../constants/ActionType';
import 'whatwg-fetch';

export function getMessages(messages) {
  return {
    type: constants.GET_ALL_MESSAGES,
    payload: messages
  };
}
// export function addMessage(message) {
//   return {
//     type: constants.ADD_PENTA_MESSAGE,
//     payload: message
//   };
// }
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
        dispatch(getMessages(json));
      }).catch((error) => {
        console.log(error);
      });
  };
}
// export function saveMessage(url, comment) {
//   var head = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(comment)
//   }
//   return dispatch => {
//     fetch(url, head)
//       .then((response) => {
//         return response.json()
//       }).then((json) => {
//         dispatch(addMessage(json));
//       }).catch((error) => {
//         console.log(error);
//       });
//   };
// }
//
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
        dispatch(removeMessage(id));
      }).catch((error) => {
        console.log(error);
      });
  };
}
