import axios from '../../utils/Api';

const API_URL = [process.env.BACKEND_URL];

/*
    processing API to backend
*/

const getAllMasterCustomer = (token, searchData) => {

    const url = API_URL+`/v1/master-customer/list?page=${searchData.page}&max_page=${searchData.max_page}`;
    console.log("INI TOKEN : ");
    console.log(token);
    console.log("Search data ");    
    console.log(searchData);
    console.log(url);
    return axios.get(url, {
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
        }
    });
}

const addMasterCustomer = (token, customerData) => {
    const url = API_URL+`/v1/master-customer/add`;

    return axios.post(url, customerData, {
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
        }
    });
}

const updateMasterCustomer = (token, id , customerData) => {
    const url = API_URL+`/v1/master-customer/update/${id}`;
    
    return axios.put(url, customerData, {
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
        }
    });
}

const deleteMasterCustomer = (token, id) => {
    const url = API_URL+`/v1/master-customer/delete/${id}`;
    
    return axios.delete(url, {
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
        }
    });
}

export default {
    getAllMasterCustomer,
    addMasterCustomer,
    updateMasterCustomer,
    deleteMasterCustomer
}