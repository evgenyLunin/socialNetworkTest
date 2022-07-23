// import profileReducer from "./profile-reducer";
// import messagesReducer from "./messages-reducer";
// import sideBarReducer from "./sideBar-reducer";


// let store = {
//     _state: {
//         profilePage: {
//             postData: [
//                 { id: 1, message: 'Hi, how are you?', likeCount: '6' },
//                 { id: 2, message: 'My first post', likeCount: '12' },
//                 { id: 3, message: 'My first test', likeCount: '12' },
//             ],

//             newPostText: 'Hello dude!',
//         },

//         messagesPage: {
//             dialogName: [
//                 { id: 1, name: 'John', avatar: `https://i.pinimg.com/736x/05/b1/78/05b1783cb521a13314bffbd7a6495691.jpg` },
//                 { id: 2, name: 'Katty', avatar: `https://i.pinimg.com/1200x/5c/09/c4/5c09c4dc82dc441dfb26975fe8dc1634.jpg` },
//                 { id: 3, name: 'Liza', avatar: `https://i.pinimg.com/originals/9e/83/ff/9e83ff2c28e062b0af3fca61bf4b989b.jpg` },
//                 { id: 4, name: 'Dima', avatar: `https://i.pinimg.com/736x/d8/3b/8d/d83b8dba23a122a63f81d1daf09dcb58.jpg` },
//                 { id: 5, name: 'Alex', avatar: `https://i.pinimg.com/550x/22/f8/53/22f8531a8b2f8c6c93332a9c5fc86813.jpg` },
//                 { id: 6, name: 'Suzy', avatar: `https://i.pinimg.com/originals/de/da/81/deda811e570b5395e8e2affe66e72996.jpg` },
//             ],

//             dialogData: [
//                 { id: 1, dialog: 'Hi' },
//                 { id: 2, dialog: 'Hi, how' },
//                 { id: 3, dialog: 'Hi, how are' },
//                 { id: 4, dialog: 'Hi, how are you' },
//                 { id: 5, dialog: 'Alex' },
//             ],

//             newMessageText: 'New word!',
//         },

//         sideBar: {
//             friendsList: [
//                 { id: 1, name: 'John', avatar: `https://i.pinimg.com/736x/05/b1/78/05b1783cb521a13314bffbd7a6495691.jpg` },
//                 { id: 2, name: 'Katty', avatar: `https://i.pinimg.com/1200x/5c/09/c4/5c09c4dc82dc441dfb26975fe8dc1634.jpg` },
//                 { id: 3, name: 'Liza', avatar: `https://i.pinimg.com/originals/9e/83/ff/9e83ff2c28e062b0af3fca61bf4b989b.jpg` },
//             ]
//         },

//     },
//     _callSubscriber() {
//         console.log('123');
//     },

//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },

//     dispatch(action) {

//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
//         this._state.sideBar = sideBarReducer(this._state.sideBar, action);
        
//         this._callSubscriber(this._state);
//     },
// }

// export default store;
// window.store = store;