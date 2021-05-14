import {
    INIT_URL,
    SIGNOUT_USER_SUCCESS,
    USER_DATA,
    USER_TOKEN_SET,
    FETCH_ERROR,
    TOKEN_VERIFY_SUCCESS,
    TOKEN_VERIFY_FAILED
} from "../../constans/ActionTypes";

const INIT_STATE = {
    token: '',
    initURL: '',
    authUser: '',
    error: '',
    data: []
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

        case TOKEN_VERIFY_SUCCESS: {
            return {
                ...state, 
                data: action.payload,
                error: ''
            }
        }

        case TOKEN_VERIFY_FAILED: {
            return {
                ...state, 
                data: [],
                error: action.payload
            }
        }

        default:
            return state;
    }
}