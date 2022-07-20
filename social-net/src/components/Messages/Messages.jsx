import s from './Messages.module.css'
import MessageItem from './MessageItem/MessageItem';
import Dialog from './Message/Message';
import React from 'react';
import { addNewMessageActionCreator, updateMessageTextActionCreator } from '../../Redux/messages-reducer';

const Messages = (props) => {

    let dialogOwners = props.state.dialogName
    .map(d => <MessageItem name={d.name} id={d.id} avatar={d.avatar} />);  

    let messagesItems = props.state.dialogData
    .map(m =>  <Dialog dialog={m.dialog} />);

    let newMessageElement = React.createRef();
    
    let addNewMessage = () => {
        props.dispatch(addNewMessageActionCreator());
      }

    let messageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateMessageTextActionCreator(text));
    }

    return (
        <div className={s.messages}>
            <div className={s.messageItems}>
                { dialogOwners}
            </div>
            <div className={s.dialoges}>
                { messagesItems }
                <div>
                    <textarea onChange={messageChange} ref={newMessageElement}
                    value={props.state.newMessageText}/>
                </div>
                <div>
                <button onClick={addNewMessage}>Sent message</button>
                </div>
            </div>
        </div>
    )
}

export default Messages;