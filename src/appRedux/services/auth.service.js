import axios from '../../utils/Api';
import {Base64} from '../../utils/base64Converter';

const API_URL = [process.env.BACKEND_URL];


const userSignIn = (username, password) => {
    let credentialString = username+":"+password;
    var credentialBase64 = Base64.encode(credentialString);
    const loginUrl = API_URL+"/api/v1.1/auth/sign-in";

    return axios.post(loginUrl, {
        username,
        password
    }, {
        headers: {
            Authorization: 'Basic ' + credentialBase64,
            'Content-Type': 'application/json' 
        }
    });
}

const tokenVerify = (token) => {
    const url = API_URL+"/api/v1.1/auth/token/verify";

    return axios.post(url, {}, {
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
        }
    });
}

const userLogout = () => {
    localStorage.removeItem("token");
};

export default {
    userSignIn,
    userLogout,
    tokenVerify
}