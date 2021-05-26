import {
    MASTER_CUSTOMER_FETCH,
    MASTER_CUSTOMER_SUCCESS,
    MASTER_CUSTOMER_FAILED,
    MASTER_CUSTOMER_ADD_SUCCESS,
    MASTER_CUSTOMER_ADD_FAILED,
    MASTER_CUSTOMER_DATA_COMPONENT_SET
} from "../../constans/ActionTypes";

const INIT_STATE = {
    loading: false, 
    data: [],
    error: '',
    successMessage: '',
    dataComponent: {
        name: "",
        email: "",
        address: "",
        phone: "",
        sex: "",
        city: ""
    }
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
                data: action.payload.data,
                loading: false
            }
        }

        case MASTER_CUSTOMER_FAILED: {
            return {
                ...state, 
                error: action.payload,
                successMessage: '',
                loading: false,
                data: []
            }
        }

        case MASTER_CUSTOMER_ADD_SUCCESS: {
            return {
                ...state,
                successMessage: action.payload.message
            }
        }

        case MASTER_CUSTOMER_ADD_FAILED: {
            return {
                ...state,
                error: action.payload.message,
                loading: false,
                successMessage: ''
            }
        }

        case MASTER_CUSTOMER_DATA_COMPONENT_SET: {
            return {
                ...state, 
                error: '',
                loading: false , 
                successMessage: '',
                dataComponent: action.payload
            }
        }
        
        default:
            return state;
    }
}