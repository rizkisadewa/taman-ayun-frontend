import {
    FETCH_ERROR,
    FETCH_SUCCESS,
    INIT_URL,
    TOKEN_VERIFY_FAILED,
    TOKEN_VERIFY_FETCH,
    TOKEN_VERIFY_SUCCESS,
    USER_DATA,
    USER_TOKEN_SET
} from "../../constans/ActionTypes";
import AuthService from '../services/auth.service';

export const setInitUrl = (url) => {
    return {
        type: INIT_URL,
        payload: url
    }
}

export const tokenVerifyFetch = () => {
    return {
        type: TOKEN_VERIFY_FETCH
    }
}

export const tokenVerifySuccess = data => {
    return {
        type : TOKEN_VERIFY_SUCCESS,
        payload: data
    }
}

export const tokenVerifyFailed = error => {
    return {
        type: TOKEN_VERIFY_FAILED,
        payload: error
    }
}

export const tokenVerify = (token) => (dispatch) => {
    dispatch(tokenVerifyFetch());
    return AuthService.tokenVerify(token).then(
        (response) => {
            let responseData = response.data;
            console.log("success****: ");
            console.log(responseData.data);
            if(responseData.statusCode == 200) {
                console.log("a1");
                dispatch(tokenVerifySuccess(responseData.data));
            } else {
                console.log("a2");
                dispatch(tokenVerifyFailed(responseData.message));
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