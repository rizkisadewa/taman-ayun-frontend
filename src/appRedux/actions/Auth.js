import {
    FETCH_ERROR, 
    FETCH_START,
    FETCH_SUCCESS,
    INIT_URL,
    SIGNOUT_USER_SUCCESS,
    TOKEN_VERIFY_FAILED,
    TOKEN_VERIFY_SUCCESS,
    USER_DATA,
    USER_TOKEN_SET
} from "../../constans/ActionTypes";
import axios from '../../utils/Api';
import {Base64} from '../../utils/base64Converter';
import AuthService from '../services/auth.service';

export const setInitUrl = (url) => {
    return {
        type: INIT_URL,
        payload: url
    }
}

export const tokenVerify = (token) => (dispatch) => {
    return AuthService.tokenVerify(token).then(
        (response) => {
            let responseData = response.data;
            if(responseData.statusCode == 200) {
                dispatch({
                    type: TOKEN_VERIFY_SUCCESS, 
                    payload: responseData.data
                });
            } else {
                dispatch({
                    type: TOKEN_VERIFY_FAILED, 
                    payload: responseData.message
                });
            }
        },
        (error) => {
            console.log("Error****: "+ error.message);
            dispatch({
                type: TOKEN_VERIFY_FAILED, 
                payload: error.message
            });
        }
    )
}

export const userSignIn = ({username, password}) => (dispatch) => {
    return AuthService.userSignIn(username, password).then(
        (response) => {
            let responseData = response.data;
            sessionStorage.removeItem('loginMessage');
            sessionStorage.setItem("loginMessage", JSON.stringify(responseData.message));

            if(responseData.statusCode == 200) {
                sessionStorage.removeItem('token');
                sessionStorage.removeItem('user');

                sessionStorage.setItem("token", responseData.data.token);
                sessionStorage.setItem("user", username);
                
                dispatch({type: FETCH_SUCCESS, payload: responseData.message});
                dispatch({type: USER_TOKEN_SET, payload: responseData.data.token});
                dispatch({type: USER_DATA, payload: username});
            } else {

                sessionStorage.removeItem('token');
                sessionStorage.removeItem('user');
                
                dispatch({type: FETCH_ERROR, payload: responseData.message});
                dispatch({type: USER_TOKEN_SET, payload: ""});
                dispatch({type: USER_DATA, payload: ""});
            }
            
        },

        (error) => {
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('user');
            dispatch({type: FETCH_ERROR, payload: error.message});
            console.log("Error****: "+ error.message);
        }
    );
};