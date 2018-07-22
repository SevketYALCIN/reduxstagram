// Increment
export function increment(postId){
  return {
    type: 'INCREMENT_POST',
    postId
  }
}

// Add comment
export function addComment(postId, author, comment){
  return {
    type: 'ADD_COMMENT',
    author,
    comment,
    postId
  }
}

// Delete comment
export function deleteComment(postId, index){
  return {
    type: 'DELETE_COMMENT',
    postId,
    index
  }
}