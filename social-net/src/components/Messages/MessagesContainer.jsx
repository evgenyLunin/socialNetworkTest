import { addNewMessageActionCreator, updateMessageTextActionCreator } from '../../Redux/messages-reducer';
import Messages from './Messages';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateMessageTextActionCreator(text))
        },
        addNewMessage: () => {
            dispatch(addNewMessageActionCreator())
        },
    }
    
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;