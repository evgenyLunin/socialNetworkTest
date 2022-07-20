import { Link } from 'react-router-dom';
import s from './../Messages.module.css'

const MessageItem = (props) => {
    let path = "/messages/" + props.id;

    return <div className={s.item + ' ' +s.active}>
        <div><img src={props.avatar} alt=''></img></div>
    <Link to={path}> {props.name}</Link>
</div>
}

export default MessageItem;