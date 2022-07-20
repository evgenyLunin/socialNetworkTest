// import s from './FriendsList.module.css'
import FriendItem from './FriendItem/FriendItem';

const FriendsList = (props) => {

    let friendsAvatar = props.state.friendsList
    .map(d => <FriendItem id={d.id} name={d.name} avatar={d.avatar} />);

    return (
        <div>
            {friendsAvatar}
        </div>
    )
}

export default FriendsList;