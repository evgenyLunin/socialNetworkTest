const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogName: [
        { id: 1, name: 'John', avatar: `https://i.pinimg.com/736x/05/b1/78/05b1783cb521a13314bffbd7a6495691.jpg` },
        { id: 2, name: 'Katty', avatar: `https://i.pinimg.com/1200x/5c/09/c4/5c09c4dc82dc441dfb26975fe8dc1634.jpg` },
        { id: 3, name: 'Liza', avatar: `https://i.pinimg.com/originals/9e/83/ff/9e83ff2c28e062b0af3fca61bf4b989b.jpg` },
        { id: 4, name: 'Dima', avatar: `https://i.pinimg.com/736x/d8/3b/8d/d83b8dba23a122a63f81d1daf09dcb58.jpg` },
        { id: 5, name: 'Alex', avatar: `https://i.pinimg.com/550x/22/f8/53/22f8531a8b2f8c6c93332a9c5fc86813.jpg` },
        { id: 6, name: 'Suzy', avatar: `https://i.pinimg.com/originals/de/da/81/deda811e570b5395e8e2affe66e72996.jpg` },
    ],

    dialogData: [
        { id: 1, dialog: 'Hi' },
        { id: 2, dialog: 'Hi, how' },
        { id: 3, dialog: 'Hi, how are' },
        { id: 4, dialog: 'Hi, how are you' },
        { id: 5, dialog: 'Alex' },
    ],

    newMessageText: 'New word!',
};

const messagesReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_NEW_MESSAGE: {
            let newMessageText = state.newMessageText
            return {...state,
                newMessageText: '',
                dialogData: [...state.dialogData, {id: 6, dialog: newMessageText}]
            };
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText,
            };
        }
        default:
            return state;
    }
}

export const addNewMessageActionCreator = () => ({type: ADD_NEW_MESSAGE});
  
export const updateMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT,
newText: text});

export default messagesReducer;