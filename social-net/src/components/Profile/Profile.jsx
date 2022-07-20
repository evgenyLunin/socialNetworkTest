import s from './Profile.module.css';
import MyPosts from './Posts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return <div className={s.item}>
    <ProfileInfo />
    <MyPosts postData={props.profilePage.postData}
      newPostText={props.profilePage.newPostText}
      dispatch={props.dispatch} />
  </div>
}

export default Profile;