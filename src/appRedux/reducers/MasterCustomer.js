import {
    MASTER_CUSTOMER_FETCH,
    MASTER_CUSTOMER_SUCCESS,
    MASTER_CUSTOMER_FAILED,
    MASTER_CUSTOMER_ADD_SUCCESS,
    MASTER_CUSTOMER_ADD_FAILED,
    MASTER_CUSTOMER_ADD_FETCH,
    MASTER_CUSTOMER_DATA_COMPONENT_SET,
    MASTER_CUSTOMER_DELETE_SUCCESS,
    MASTER_CUSTOMER_DELETE_FAILED,
    MASTER_CUSTOMER_DELETE_FETCH,
    MASTER_CUSTOMER_UPDATE_SUCCESS,
    MASTER_CUSTOMER_UPDATE_FAILED,
    MASTER_CUSTOMER_UPDATE_FETCH
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
        sex: "L",
        city: ""
    },
    componentLoading: false,
    statusCode: '',
    deleteNotif: false,
    addNotif: false,
    updateNotif: false
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
                successMessage: '',
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

        case MASTER_CUSTOMER_ADD_FETCH: {
            
            return {
                ...state,
                error: '',
                successMessage: '',
                addNotif: false
            }
        }

        case MASTER_CUSTOMER_ADD_SUCCESS: {
            return {
                ...state,
                error: '',
                componentLoading: false,
                successMessage: action.payload.message,
                statusCode: action.payload.statusCode,
                addNotif: true
            }
        }

        case MASTER_CUSTOMER_ADD_FAILED: {
            return {
                ...state,
                error: action.payload.message,
                loading: false,
                successMessage: '',
                statusCode: action.payload.statusCode,
                addNotif: true
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

        case MASTER_CUSTOMER_DELETE_FETCH: {
            return {
                ...state, 
                error: '',
                successMessage: '',
                deleteNotif: false
            }
        }

        case MASTER_CUSTOMER_DELETE_FAILED: {
            return {
                ...state, 
                error: action.payload.message,
                componentLoading: false, 
                successMessage: '',
                statusCode: action.payload.statusCode,
                deleteNotif: true
            }
        }

        case MASTER_CUSTOMER_DELETE_SUCCESS: {
            return {
                ...state,
                error: '',
                componentLoading: false,
                successMessage: action.payload.message,
                statusCode: action.payload.statusCode,
                deleteNotif: true
            }
        }

        case MASTER_CUSTOMER_UPDATE_FETCH: {
            return { 
                ...state, 
                error: '',
                successMessage: '',
                updateNotif: false
            }
        }

        case MASTER_CUSTOMER_UPDATE_FAILED: {
            return {
                ...state, 
                error: action.payload.message,
                componentLoading: false, 
                successMessage: '',
                statusCode: action.payload.statusCode,
                updateNotif: true
            }
        }

        case MASTER_CUSTOMER_UPDATE_SUCCESS: {
            return {
                ...state,
                error: '',
                componentLoading: false,
                successMessage: action.payload.message,
                statusCode: action.payload.statusCode,
                updateNotif: true
            }
        }
        
        default:
            return state;
    }
}