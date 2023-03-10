
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [
        { id: 1, post: 'Hi, how are you?', likes: 13 },
        { id: 2, post: "It's my first post", likes: 52 },
        { id: 3, post: 'Hi, how are you?', likes: 35 },
        { id: 4, post: 'Hi, how are you?', likes: 35 },
        { id: 5, post: 'Hi, how are you?', likes: 35 }
    ],
    newPostText: 'abrakadabra',
    profile: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 7,
                post: state.newPostText,
                likes: 0
            };
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })


export default profileReducer;