const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const messagesReducer = (state, action) => {
    switch(action.type){
        case ADD_NEW_MESSAGE:
            let newMessage = {
                id: 6,
                dialog: state.newMessageText,
            };
        
            state.dialogData.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addNewMessageActionCreator = () => ({type: ADD_NEW_MESSAGE});
  
export const updateMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT,
newText: text});

export default messagesReducer;