import {
    MASTER_CUSTOMER_FETCH,
    MASTER_CUSTOMER_SUCCESS,
    MASTER_CUSTOMER_FAILED,
    MASTER_CUSTOMER_ADD_SUCCESS,
    MASTER_CUSTOMER_ADD_FAILED,
    MASTER_CUSTOMER_DATA_COMPONENT_SET
} from "../../constans/ActionTypes";
import MasterCustomerService from '../services/master_customer.service';

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

export const addMasterCustomer = (token, masterCustomerData) => (dispatch) => {
    dispatch(masterCustomerFetch());
    return MasterCustomerService.addMasterCustomer(token, masterCustomerData).then(
        (response) => {
            let responseData = response.data;
            console.log("success****: ");
            console.log(responseData.message);

            if(responseData.statusCode === 201) {
                console.log("a1");
                dispatch(addMasterCustomerSuccess(responseData));
                dispatch(getAllMasterCustomer(token, {
                    page: 1, 
                    max_page: 10
                }));
            } else {
                console.log("a2");
                dispatch(addMasterCustomerFailed(responseData));
            }
        }, 
        (error) => {
            console.log("error****: ");
            console.log(error.message);
            dispatch(masterCustomerFailed())
        }
    )
}

export const updateMasterCustomer = (token, id, masterCustomerData) => (dispatch) => {
    dispatch(masterCustomerFetch());
    return MasterCustomerService.updateMasterCustomer(token, id, masterCustomerData).then(
        (response) => {
            let responseData = response.data;
            console.log("success****: ");
            console.log(responseData.data);

            if(responseData.statusCode === 201) {
                console.log("a1");
                dispatch(masterCustomerSuccess(responseData));
            } else {
                console.log("a1");
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

export const deleteMasterCustomer = (token, id) => (dispatch) => {
    dispatch(masterCustomerFetch());
    return MasterCustomerService.deleteMasterCustomer(token, id).then(
        (response) => {
            let responseData = response.data;
            console.log("success****: ");
            console.log(responseData.data);

            if(responseData.statusCode === 201) {
                console.log("a1");
                dispatch(masterCustomerSuccess(responseData.data));
            } else {
                console.log("a1");
                dispatch(masterCustomerFailed(responseData.message));
            }
            dispatch(masterCustomerDataComponentEmpty());
        }, 
        (error) => {
            console.log("error****: ");
            console.log(error.message);
            dispatch(masterCustomerFailed());
        }
    )
}

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
