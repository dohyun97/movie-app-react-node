import axios from "axios";
import {LOGIN_USER} from "./types"

export  function loginUser(dataSubmit){
    const req = axios.post('/api/user/login',dataSubmit).then((response) => response.data)
   
    return {
        type:LOGIN_USER,
        payload:req
    }

} 