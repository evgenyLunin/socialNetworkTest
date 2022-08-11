import { legacy_createStore, combineReducers } from "redux";
import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import sideBarReducer from './sideBar-reducer';
import usersReducer from "./users-reducer";

let redusers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
});

let store = legacy_createStore(redusers);

window.store = store;

export default store;