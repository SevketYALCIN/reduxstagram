import React from 'react'

class Comment extends React.Component {
  handleSubmit(e) {
    e.preventDefault()
    const postId = this.props.postId
    const author = this.refs.author.value
    const comment = this.refs.comment.value
    this.props.addComment(postId, author, comment)
    this.refs.commentForm.reset()
  }

  render(){
    return(
      <div className="comments">
        {this.props.postComments.map((comment, i) => {
          return (<div className="comment" key={i}>
            <p>
              <strong>{comment.user}</strong>
              {comment.text}
              <button className="remove-comment" onClick={this.props.deleteComment.bind(null, this.props.postId, i)}>&times;</button>
            </p>
          </div>)
        })}
        <form ref="commentForm" className="comment-form" 
          onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="author" placeholder="author"/>
          <input type="text" ref="comment" placeholder="comment"/>
          <input type="submit" hidden/>
        </form>
      </div>
    )
  }
}

export default Comment