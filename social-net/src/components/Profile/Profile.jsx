import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './Posts/MyPostsContainer';

const Profile = (props) => {

  return <div className={s.item}>
    <ProfileInfo />
    <MyPostsContainer />
  </div>
}

export default Profile;