import axios from "axios";
import {LOGIN_USER} from "./types"
import {REGISTER_USER,AUTH_USER} from "./types"

export  function loginUser(dataSubmit){
    const req = axios.post('/api/user/login',dataSubmit).then((response) => response.data)
   
    return {
        type:LOGIN_USER,
        payload:req
    }

} 

export  function registerUser(dataSubmit){
    const req = axios.post('/api/user/register',dataSubmit).then((response) => response.data)
   
    return {
        type:REGISTER_USER,
        payload:req
    }

} 

export  function auth(){
    
    const req = axios.get('/api/user/auth').then((response) => response.data)
   
    return {
        type:AUTH_USER,
        payload:req
    }

} 