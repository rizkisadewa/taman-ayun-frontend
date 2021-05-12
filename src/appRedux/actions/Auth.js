import {
    FETCH_ERROR, 
    FETCH_START,
    FETCH_SUCCESS,
    INIT_URL,
    SIGNOUT_USER_SUCCESS,
    USER_DATA,
    USER_TOKEN_SET
} from "../../constans/ActionTypes";
import axios from '../../utils/Api';
import {Base64} from '../../utils/base64Converter';

export const setInitUrl = (url) => {
    return {
        type: INIT_URL,
        payload: url
    }
}

export const userSignIn = ({username, password}) => {
    return (dispatch) => {
        dispatch({type: FETCH_START});

        let credentialString = username+":"+password;
        var credentialBase64 = Base64.encode(credentialString);

        axios.post('api/v1.1/auth/sign-in', {
            username,
            password
        },{
            headers: {
                Authorization: 'Basic ' + credentialBase64,
                'Content-Type': 'application/json' 
            }
        }).then(({data}) => {
            console.log("userSignIn : ", username);
            console.log(data);
            if(data.statusCode == 200) {
                localStorage.setItem("token",data.data.token);
                localStorage.setItem("user", username);
                localStorage.setItem("authSuccess", true);
                dispatch({type: FETCH_SUCCESS, payload: data.message});
                dispatch({type: USER_TOKEN_SET, payload: data.data.token});
                dispatch({type: USER_DATA, payload: username});
            } else {
                localStorage.setItem("authSuccess", false);
                localStorage.setItem("token", "");
                localStorage.setItem("user", "");
                dispatch({type: FETCH_ERROR, payload: data.message});
                dispatch({type: USER_TOKEN_SET, payload: ""});
                dispatch({type: USER_DATA, payload: ""});
            }
        }).catch(function (error) {
            dispatch({type: FETCH_ERROR, payload: error.message});
            console.log("Error****: "+ error.message);
        });
    }
};