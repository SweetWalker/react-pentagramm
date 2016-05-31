export function addMessage(state, payload) {
  return {
    ...state,
    data: state.data.concat(payload)
  };
}
export function removeMessage(state, payload) {
  return {
    ...state,
    data: state.data.filter(function(item){
      return item.id !== payload;
    })
  };
}
