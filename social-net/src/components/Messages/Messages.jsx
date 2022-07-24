import s from './Messages.module.css'
import MessageItem from './MessageItem/MessageItem';
import Dialog from './Message/Message';
import React from 'react';

const Messages = (props) => {

    let state = props.messagesPage;

    let dialogOwners = state.dialogName
    .map(d => <MessageItem name={d.name} id={d.id} avatar={d.avatar} />);  

    let messagesItems = state.dialogData
    .map(m =>  <Dialog dialog={m.dialog} />);

    let newMessageText = state.newMessageText;
    
    let onAddNewMessage = () => {
        props.addNewMessage();
      }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.messages}>
            <div className={s.messageItems}>
                { dialogOwners}
            </div>
            <div className={s.dialoges}>
                { messagesItems }
                <div>
                    <textarea onChange={onMessageChange} 
                    value={newMessageText}/>
                </div>
                <div>
                <button onClick={onAddNewMessage}>Sent message</button>
                </div>
            </div>
        </div>
    )
}

export default Messages;