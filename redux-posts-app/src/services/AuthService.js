import axios from 'axios';

export function signUp(email, password) {
    //axios call

    const postData = {
        email,
        password,
        returnSecureToken: true,
    };

    return axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=
        AIzaSyD3RPAp3nuETDn9OQimqn_YF6zdzqWITII`,
        postData,
    );
}