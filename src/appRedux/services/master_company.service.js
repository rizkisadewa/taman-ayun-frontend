import axios from '../../utils/Api';

const API_URL = [process.env.BACKEND_URL];


/*
    processing API to backend
*/

const getAllMasterCompany = (token, searchData) => {
    const url = API_URL+`/v1/master-company/list?page=${searchData.page}&max_page=${searchData.max_page}`;
    console.log("INI TOKEN : ");
    console.log(token);
    console.log("Search data : ");
    console.log(searchData);
    console.log(url);
    return axios.get(url, {
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
        }
    });
}

const addMasterCompany = (token, companyData) => {
    const url = API_URL+`/v1/master-company/add`;

    return axios.post(url, companyData, {
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
        }
    });
}

const updateMasterCompany = (token, id, companyData) => {
    const url = API_URL+`/v1/master-company/update/${id}`;

    return axios.put(url, companyData, {
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
        }
    });
}

const deleteMasterCompany = (token, id) => {
    const url = API_URL+`/v1/master-company/delete/${id}`;

    return axios.delete(url, {
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
        }
    })
}

export default {
    getAllMasterCompany,
    addMasterCompany, 
    updateMasterCompany,
    deleteMasterCompany
}
