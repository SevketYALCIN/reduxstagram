function comments(state = [], action) {
  if(typeof action.postId !== 'undefined'){
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state
}

function postComments(state = [], action) {
  switch(action.type){
    case 'ADD_COMMENT':
      return [...state, {
        user: action.author,
        text: action.comment
      }]
    case 'DELETE_COMMENT':
    console.log(action)
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
      return state
    default:
      return state
  }
}

export default comments