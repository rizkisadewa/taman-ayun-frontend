import {
    INIT_URL,
    SIGNOUT_USER_SUCCESS,
    USER_TOKEN_SET,
    FETCH_ERROR,
    TOKEN_VERIFY_SUCCESS,
    TOKEN_VERIFY_FAILED,
    TOKEN_VERIFY_FETCH
} from "../../constans/ActionTypes";

const INIT_STATE = {
    token: '',
    initurl: '',
    authuser: '',
    error: '',
    loading: false,
    data: {
        username: '..loading',
        user_type_name: '...loading'
    }
};

export default (state = INIT_STATE, action) => {
    switch(action.type) {

        case TOKEN_VERIFY_FETCH: {
            return {
                ...state,
                loading: true
            }
        }
        case INIT_URL: {
            return {
                ...state,
                initurl: action.payload,
                loading: false
            };
        }

        case SIGNOUT_USER_SUCCESS: {
            return {
                ...state, 
                token: null,
                authuser: null,
                initurl: '',
                loading: false
            }
        }

        case USER_TOKEN_SET: {
            return {
                ...state, 
                token: action.payload,
                loading: false
            };
        }

        case FETCH_ERROR: {
            return {
                ...state, 
                token: null,
                authuser: null,
                error: action.payload,
                loading: false
            }
        }

        case TOKEN_VERIFY_SUCCESS: {
            return {
                ...state, 
                data: action.payload,
                error: '',
                loading: false
            }
        }

        case TOKEN_VERIFY_FAILED: {
            return {
                ...state, 
                data: {},
                error: action.payload,
                loading: false
            }
        }

        default:
            return state;
    }
}