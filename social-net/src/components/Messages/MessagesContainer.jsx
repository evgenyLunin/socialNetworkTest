import React from 'react';
import { addNewMessageActionCreator, updateMessageTextActionCreator } from '../../Redux/messages-reducer';
import Messages from './Messages';

const MessagesContainer = (props) => {

    let state = props.store.getState().messagesPage;
    
    let addNewMessage = () => {
        props.store.dispatch(addNewMessageActionCreator());
      }

    let onMessageChange = (text) => {
        props.store.dispatch(updateMessageTextActionCreator(text));
    }

    return (
        <Messages updateNewMessageText={onMessageChange} addNewMessage={addNewMessage}
        messagesPage={state} />
    )
}

export default MessagesContainer;