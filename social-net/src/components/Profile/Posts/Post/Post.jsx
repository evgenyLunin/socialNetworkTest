import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <img src='https://m.mac-cosmetics.ru/media/export/cms/products/640x600/mac_sku_MW3C09_640x600_2.jpg' alt=''></img>
      {props.message}
      <div>
      {props.likeCount}
        <span>like</span>
      </div>
    </div>
  )
}

export default Post;