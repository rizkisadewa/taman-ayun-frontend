import {
    INIT_URL,
    SIGNOUT_USER_SUCCESS,
    USER_DATA,
    USER_TOKEN_SET,
    FETCH_ERROR
} from "../../constans/ActionTypes";

const INIT_STATE = {
    token: '',
    initURL: '',
    authUser: '',
    error: ''
};

export default (state = INIT_STATE, action) => {
    switch(action.type) {
        case INIT_URL: {
            return {
                ...state,
                initURL: action.payload
            };
        }

        case SIGNOUT_USER_SUCCESS: {
            return {
                ...state, 
                token: null,
                authUser: null,
                initURL: ''
            }
        }

        case USER_TOKEN_SET: {
            return {
                ...state, 
                token: action.payload
            };
        }

        case FETCH_ERROR: {
            return {
                ...state, 
                token: null,
                authUser: null,
                error: action.payload
            }
        }

        default:
            return state;
    }
}