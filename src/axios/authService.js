
import axios from 'axios';


const getToken=()=>{
    return localStorage.getItem('USER_KEY');
}

export const userLogin=(authRequest)=>{
    return axios({
        'method':'POST',
        'url':'http://localhost:8085/api/v1/auth/login',
        'data':authRequest
    })
}

export const fetchUserData=(authRequest)=>{
    return axios({
        method:'GET',
        url:'http://localhost:8085/api/v1/auth/description',
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })
}