import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElement = 
    props.postData.map(p => <Post message={p.message} likeCount={p.likeCount} />);

  let newPostElement = React.createRef();
  
    let onAddPost = () => {
      props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return <div className={s.postBlock}>
    My posts
    <div>
      <textarea onChange={onPostChange} ref={newPostElement}
      value={props.newPostText}/>
    </div>
    <div>
      <button onClick={onAddPost}>Add post</button>
    </div>
    <div>
      New post
    </div>
    <div className={s.posts}>
      {postsElement}
    </div>
  </div>

}

export default MyPosts; 