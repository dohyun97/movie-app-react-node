import { LOGIN_USER, REGISTER_USER } from "../_actions/types";

export default function(state={}, action){
    
    if( action.type === LOGIN_USER) 
    {
        return {...state , loginSuccess: action.payload}
    }else if(action.type === REGISTER_USER){
        return {...state ,registerSuccess: action.payload}
    }
    
    return state;
}