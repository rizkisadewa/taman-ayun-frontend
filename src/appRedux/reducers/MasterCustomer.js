import {
    MASTER_CUSTOMER_FETCH,
    MASTER_CUSTOMER_SUCCESS,
    MASTER_CUSTOMER_FAILED
} from "../../constans/ActionTypes";

const INIT_STATE = {
    loading: false, 
    data: [],
    error: ''
}

export default (state = INIT_STATE, action) => {
    switch(action.type) {
        case MASTER_CUSTOMER_FETCH: {
            return {
                ...state,
                loading: true
            }
        }

        case MASTER_CUSTOMER_SUCCESS: {
            return {
                ...state,
                error: '',
                data: action.payload,
                loading: false
            }
        }

        case MASTER_CUSTOMER_FAILED: {
            return {
                ...state, 
                error: action.payload,
                loading: false,
                data: []
            }
        }
        default:
            return state;
    }
}