import React from 'react'
import Photo from './photo'
import Comments from './comments'

export default class Single extends React.Component {
  render(){
    const { postId } = this.props.params;
    const i = this.props.posts.findIndex(
      (post) => post.code === postId)
    const post = this.props.posts[i]
    const postComments = this.props.comments[postId] || []
    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments 
          postComments={postComments} 
          postId={this.props.params.postId}
          addComment={this.props.addComment}
          deleteComment={this.props.deleteComment}/>
      </div>
    )
  }
}