import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let postsElements = props.posts.map(props => <Post post={props.post} key={props.id} likes={props.likes} />)

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }


  return (
    <div className={s.posts}>
      <h3>My posts</h3>
      <div>
        <div className={s.posts_textarea}>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div className={s.posts_button}>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div>
        {postsElements}
      </div>
    </div>
  )
}
export default MyPosts;