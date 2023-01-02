import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  
  return (
    <div className={s.item}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlIruH6q6l27JAxlkK3cZdDn1EFYOrkn9EFA&usqp=CAU'></img>
       {props.post}
      <div>
        <span>Like </span>
        {props.likes}
      </div>
    </div>
  )
}
export default Post;