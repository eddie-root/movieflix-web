import axios from 'axios';
import qs from 'qs';
import history from './history';
import jwtDecode from 'jwt-decode';

type Role = 'ROLE_VISITOR' | 'ROLE_MEMBER';

type TokenData = {
    exp: number;
    user_name: string;
    authorities: Role[];
}

type LoginResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    userName: string;
    userId: number;
}

export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

const tokenKey = 'authData';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'myclientid';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'myclientsecret';


type LoginData = {
    username: string;
    password: string;
}

export const requestBackendLogin = (loginData: LoginData) => {

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET)
    }

    const data = qs.stringify({
        ...loginData,
        grant_type: 'password'
    })

    return axios({ method: 'POST', baseURL: BASE_URL, url: '/oauth/token', data, headers});

};

export const saveAuthData = (obj : LoginResponse) => {
    localStorage.setItem(tokenKey, JSON.stringify(obj));
}

export const getAuthData = () => {
    const str = localStorage.getItem(tokenKey) ?? '{}';
    const obj = JSON.parse(str);
    return obj as LoginResponse;
}

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if(error.response.status === 401 || error.response.status === 403){
        history.push('/');
    }
    return Promise.reject(error);
  });

  export const getTokenData = (): TokenData | undefined => {
    const LoginResponse = getAuthData();

    try{
        return jwtDecode(LoginResponse.access_token) as TokenData;
    }
    catch(error){
        return undefined;
    }
  }

  export const isAuthenticated = () => {
    const TokenData = getTokenData();
    return (TokenData && TokenData.exp * 1000 > Date.now()) ? true : false;
  }
