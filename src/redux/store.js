import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, post: 'Hi, how are you?', likes: 13 },
                { id: 2, post: "It's my first post", likes: 52 },
                { id: 3, post: 'Hi, how are you?', likes: 35 },
                { id: 4, post: 'Hi, how are you?', likes: 35 },
                { id: 5, post: 'Hi, how are you?', likes: 35 }
            ],
            newPostText: 'abrakadabra'
        },
        dialogsPage: {
            messages: [
                { id: 1, message: 'Hi!' },
                { id: 2, message: 'How is your mood?' },
                { id: 3, message: 'Yo!' },
                { id: 4, message: 'Yo!' },
                { id: 5, message: 'Yo!' }
            ],
            dialogs: [
                { id: 1, name: 'KutulbI4' },
                { id: 2, name: 'Govjadina' },
                { id: 3, name: 'Polupoker' },
                { id: 4, name: 'Siutobivochi' },
                { id: 5, name: 'Foksi' }
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    // _callSubscriber() {
    //     console.log('State rerender now!');
    // },

    getState() {
        return this._state;
    },
    // subscribe(observer) {
    //     this._callSubscriber = observer;
    // },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        //this._callSubscriber(this._state);
    }
}


window.store = store;
export default store;