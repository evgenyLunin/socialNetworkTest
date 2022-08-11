const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {

    postData: [
        { id: 1, message: 'Hi, how are you?', likeCount: '6' },
        { id: 2, message: 'My first post', likeCount: '12' },
        { id: 3, message: 'My first test', likeCount: '12' },
    ],

    newPostText: 'Hello dude!',

};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPostText = state.newPostText
            return {
                ...state,
                newPostText: '',
                postData: [...state.postData, { id: 3, message: newPostText, likeCount: 0 }],
            };
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            };
        }
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export default profileReducer;