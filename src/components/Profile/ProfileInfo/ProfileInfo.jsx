import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }
  
  return (
    <div>
      <div>
        <img className={s.content_img} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWmUOvofdKUdxOfLjwXsJiJYHt-yU0XFifxQ&usqp=CAU'></img>
      </div>
      <div className={s.content_ava}>
        <img src={props.profile.photos.large} alt="nichego ne poluchitca" />
        ava + discription
      </div>
    </div>
  )
}
export default ProfileInfo;