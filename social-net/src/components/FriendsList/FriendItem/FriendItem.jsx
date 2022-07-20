import { Link } from 'react-router-dom';
import s from './../FriendsList.module.css'

const FriendItem = (props) => {
    let path = "/friendsList/" + props.id;

    return <div className={s.item + ' ' +s.active}>
        <div><img src={props.avatar} alt=''></img></div>
    <Link to={path}> {props.name}</Link>
</div>
}

export default FriendItem;