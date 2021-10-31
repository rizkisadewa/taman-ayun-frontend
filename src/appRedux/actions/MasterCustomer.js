import {
    MASTER_CUSTOMER_FETCH,
    MASTER_CUSTOMER_SUCCESS,
    MASTER_CUSTOMER_FAILED,
    MASTER_CUSTOMER_ADD_SUCCESS,
    MASTER_CUSTOMER_ADD_FAILED,
    MASTER_CUSTOMER_DATA_COMPONENT_SET,
    MASTER_CUSTOMER_DELETE_SUCCESS,
    MASTER_CUSTOMER_DELETE_FAILED,
    MASTER_CUSTOMER_DELETE_FETCH,
    MASTER_CUSTOMER_ADD_FETCH,    
    MASTER_CUSTOMER_UPDATE_SUCCESS,
    MASTER_CUSTOMER_UPDATE_FAILED,
    MASTER_CUSTOMER_UPDATE_FETCH
} from "../../constans/ActionTypes";
import MasterCustomerService from '../services/master_customer.service';


/*
        GET ALL MASTER CUSTOMER
*/

export const masterCustomerFetch = () => {
    return {
        type: MASTER_CUSTOMER_FETCH
    }
}

export const masterCustomerSuccess = data => {
    return {
        type: MASTER_CUSTOMER_SUCCESS, 
        payload: data
    }
}

export const masterCustomerFailed = error => {
    return {
        type: MASTER_CUSTOMER_FAILED,
        payload: error
    }
}

export const getAllMasterCustomer = (token, searchData) => (dispatch) => {
    dispatch(masterCustomerFetch());
        
    return MasterCustomerService.getAllMasterCustomer(token, searchData).then(
        (response) => {
            let responseData = response.data;
            console.log("success****: ");
            console.log(responseData);

            if(responseData.statusCode === 200) {
                console.log("b1");
                dispatch(masterCustomerSuccess(responseData));
            } else {
                console.log("b2");
                dispatch(masterCustomerFailed(responseData.message));
            }
            
        },
        (error) => {
            console.log("error****: ");
            console.log(error.message);
            dispatch(masterCustomerFailed())
        }
    )
}

/*
        COMPONENT MANIPULATION
*/

export const masterCustomerDataComponentEmpty = () => {
    return {
        type: MASTER_CUSTOMER_DATA_COMPONENT_SET,
        payload: {
            name: "",
            email: "",
            address: "",
            phone: "",
            sex: ""
        }
    }
}

export const handleChangeDataComponent = customer => {
    return {
        type: MASTER_CUSTOMER_DATA_COMPONENT_SET,
        payload: customer
    }
}


/*
        ADD MASTER CUSTOMER
*/

export const addMasterCustomerSuccess = data => {
    
    return {
        type: MASTER_CUSTOMER_ADD_SUCCESS,
        payload: data
    }
}

export const addMasterCustomerFailed = error => {
    return {
        type: MASTER_CUSTOMER_ADD_FAILED, 
        payload: error
    }
}

export const addMasterCustomerFetch = () => {
    return {
        type: MASTER_CUSTOMER_ADD_FETCH
    }
}

export const addMasterCustomer = (token, masterCustomerData) => (dispatch) => {
    dispatch(addMasterCustomerFetch());
    return MasterCustomerService.addMasterCustomer(token, masterCustomerData).then(
        (response) => {
            let responseData = response.data;
            console.log("adding data success****: ");
            console.log(responseData.message);

            if(responseData.statusCode === 201) {
                console.log("a1");
                dispatch(addMasterCustomerSuccess(responseData));
            } else {
                console.log("a2");
                dispatch(addMasterCustomerFailed(responseData));
            }
            // empty component 
            dispatch(masterCustomerDataComponentEmpty());
        }, 
        (error) => {
            console.log("error****: ");
            console.log(error.message);
            dispatch(addMasterCustomerFailed(error.message));
            dispatch(masterCustomerDataComponentEmpty());
        }
    )
}


/*
        DELETE MASTER CUSTOMER
*/

export const deleteMasterCustomerSuccess = data => {
    
    return {
        type: MASTER_CUSTOMER_DELETE_SUCCESS,
        payload: data
    }
}

export const deleteMasterCustomerFailed = error => {
    
    return {
        type: MASTER_CUSTOMER_DELETE_FAILED, 
        payload: error
    }
}

export const deleteMasterCustomerFetch = () => {
    return {
        type: MASTER_CUSTOMER_DELETE_FETCH
    }
}

export const deleteMasterCustomer = (token, id) => (dispatch) => {
    dispatch(deleteMasterCustomerFetch());
    return MasterCustomerService.deleteMasterCustomer(token, id).then(
        (response) => {
            let responseData = response.data;
            console.log("deleting message****: ");
            console.log(responseData);

            if(responseData.statusCode === 200) {
                console.log("a1");
                dispatch(deleteMasterCustomerSuccess(responseData));
            } else {
                console.log("a2");
                dispatch(deleteMasterCustomerFailed(responseData));
            }
            dispatch(masterCustomerDataComponentEmpty());
        }, 
        (error) => {
            console.log("error****: ");
            console.log(error.message);
            dispatch(deleteMasterCustomerFailed(error));
            dispatch(masterCustomerDataComponentEmpty());
        }
    )
}

/*
        UPDATE MASTER CUSTOMER
*/

export const updateMasterCustomerFetch = () => {
    return {
        type: MASTER_CUSTOMER_UPDATE_FETCH
    }
}

export const updateMasterCustomerSuccess = data => {
    return {
        type: MASTER_CUSTOMER_UPDATE_SUCCESS,
        payload: data
    }
}

export const updateMasterCustomerFailed = error => {
    return {
        type: MASTER_CUSTOMER_UPDATE_FAILED,
        payload: error
    }
}

export const updateMasterCustomer = (token, id, masterCustomerData) => (dispatch) => {
    dispatch(updateMasterCustomerFetch());
    return MasterCustomerService.updateMasterCustomer(token, id, masterCustomerData).then(
        (response) => {
            let responseData = response.data;
            console.log("update success****: ");
            console.log(responseData.data);

            if(responseData.statusCode === 200) {
                console.log("a1");
                dispatch(updateMasterCustomerSuccess(responseData));
            } else {
                console.log("a2");
                dispatch(updateMasterCustomerFailed(responseData.message));
            }
            dispatch(masterCustomerDataComponentEmpty());
        }, 
        (error) => {
            console.log("error****: ");
            console.log(error.message);
            dispatch(updateMasterCustomerFailed());
            dispatch(masterCustomerDataComponentEmpty());
        }
    )
}
