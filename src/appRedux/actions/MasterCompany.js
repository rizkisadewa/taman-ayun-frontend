import {
    MASTER_COMPANY_FETCH,
    MASTER_COMPANY_SUCCESS,
    MASTER_COMPANY_FAILED,
    MASTER_COMPANY_ADD_FETCH,
    MASTER_COMPANY_ADD_SUCCESS,
    MASTER_COMPANY_ADD_FAILED,
    MASTER_COMPANY_UPDATE_FETCH,
    MASTER_COMPANY_UPDATE_SUCCESS,
    MASTER_COMPANY_UPDATE_FAILED,
    MASTER_COMPANY_DATA_COMPONENT_SET,
    MASTER_COMPANY_DELETE_SUCCESS,
    MASTER_COMPANY_DELETE_FAILED,
    MASTER_COMPANY_DELETE_FETCH
} from "../../constans/ActionTypes";
import MasterCompanyService from '../services/master_company.service';

/*
        GET ALL MASTER COMPANY
*/

export const masterCompanyFetch = () => {
    return {
        type: MASTER_COMPANY_FETCH
    }
}

export const masterCompanySuccess = data => {
    return {
        type: MASTER_COMPANY_SUCCESS,
        payload: data
    }
}

export const masterCompanyFailed = error => {
    return {
        type: MASTER_COMPANY_FAILED,
        payload: error
    }
}

export const getAllMasterCompany = (token, searchData) => (dispatch) => {
    dispatch(masterCompanyFetch());

    return MasterCompanyService.getAllMasterCompany(token, searchData).then(
        (response) => {
            let responseData = response.data;
            console.log("success***: ");
            console.log(responseData);

            if(responseData.statusCode === 200) {
                console.log("b1");
                dispatch(masterCompanySuccess(responseData));
            } else {
                console.log("b2");
                dispatch(masterCompanyFailed(responseData.message));
            }
        }, 
        (error) => {
            console.log("error***: ");
            console.log(error.message);
            dispatch(masterCompanyFailed());
        }
    )
}


/*
    COMPONENENT MANIPULATION
*/
export const masterCompanyDataComponentEmpty = () => {
    return {
        type: MASTER_COMPANY_DATA_COMPONENT_SET,
        payload: {
            name: "",
            address: "",
            website: "",
            pic: ""
        }
    }
}

export const handleChangeDataComponent = company => {
    return {
        type: MASTER_COMPANY_DATA_COMPONENT_SET,
        payload: company
    }
}

/* 
    ADD MASTER COMPANY 
*/

export const addMasterCompanySuccess = data => {
    return {
        type: MASTER_COMPANY_ADD_SUCCESS,
        payload: data
    }
}

export const addMasterCompanyFailed = error => {
    return {
        type: MASTER_COMPANY_ADD_FAILED,
        payload: error
    }
}

export const addMasterCompanyFetch = () => {
    return {
        type: MASTER_COMPANY_ADD_FETCH
    }
}

export const addMasterCompany = (token, masterCompanyData) => (dispatch) => {
    dispatch(addMasterCompanyFetch());
    return MasterCompanyService.addMasterCompany(token, masterCompanyData).then(
        (response) => {
            let responseData = response.data;
            console.log("adding data success***: ");
            console.log(responseData.message);

            if(responseData.statusCode === 201) {
                console.log("a1");
                dispatch(addMasterCompanySuccess(responseData));
            } else {
                console.log("a2");
                dispatch(addMasterCompanyFailed(responseData));
            }
            // empty company
            dispatch(masterCompanyDataComponentEmpty());
        },
        (error) => {
            console.log("error***: ");
            console.log(error.message);
            dispatch(addMasterCompanyFailed(error.message));
            dispatch(masterCompanyDataComponentEmpty());
        }
    )
}

/*
    DELETE MASTER COMPANY
*/

export const deleteMasterCompanySuccess = data => {
    return {
        type: MASTER_COMPANY_DELETE_SUCCESS, 
        payload: data
    }
}

export const deleteMasterCompanyFailed = error => {
    return {
        type: MASTER_COMPANY_DELETE_FAILED,
        payload: error
    }
}

export const deleteMasterCompanyFetch = () => {
    return {
        type : MASTER_COMPANY_DELETE_FETCH
    }
}

export const deleteMasterCompany = (token, id) => (dispatch) => {
    dispatch(deleteMasterCompanyFetch());
    return MasterCompanyService.deleteMasterCompany(token, id).then(
        (response) => {
            let responseData = response.data;
            console.log("deleting message***: ");
            console.log(responseData);

            if(responseData.statusCode === 200) {
                console.log("a1");
                dispatch(deleteMasterCompanySuccess(responseData));
            } else {
                console.log("a2");
                dispatch(deleteMasterCompanyFailed(responseData));
            }

            dispatch(masterCompanyDataComponentEmpty());
        }, 
        (error) => {
            console.log("error****: ");
            console.log(error.message);
            dispatch(deleteMasterCompanyFailed(error.message));
            dispatch(masterCompanyDataComponentEmpty());
        }
    )
}

/* 
        UPDATE MASTER COMPANY
*/

export const updateMasterCompanyFetch = () => {
    return {
        type: MASTER_COMPANY_UPDATE_FETCH
    }
}

export const updateMasterCompanySuccess = data => {
    return {
        type : MASTER_COMPANY_UPDATE_SUCCESS,
        payload: data
    }
}

export const updateMasterCompanyFailed = error => {
    return {
        type: MASTER_COMPANY_UPDATE_FAILED,
        payload: error
    }
}

export const updateMasterCompany = (token, id, masterCompanyData) => (dispatch) => {
    dispatch(updateMasterCompanyFetch());
    return MasterCompanyService.updateMasterCompany(token, id, masterCompanyData).then(
        (response) => {
            let responseData = response.data;
            console.log("update success***: ");
            console.log(responseData.data);

            if(responseData.statusCode === 200) {
                console.log("a1");
                dispatch(updateMasterCompanySuccess(responseData));
            } else {
                console.log("a2");
                dispatch(updateMasterCompanyFailed(responseData.message));
            }
            dispatch(masterCompanyDataComponentEmpty());
        }, 
        (error) => {
            console.log("error****: ");
            console.log(error.message);
            dispatch(deleteMasterCompanyFailed(error.message));
            dispatch(masterCompanyDataComponentEmpty());
        }
    )
}
