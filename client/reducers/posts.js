function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_POST':
      const i = action.postId
      return [
        ...state.slice(0,i),
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1)
      ]
    default:
      return state
  }
  return state
}

export default posts