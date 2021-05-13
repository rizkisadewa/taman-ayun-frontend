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

const userLogout = () => {
    localStorage.removeItem("token");
};

export default {
    userSignIn,
    userLogout
}