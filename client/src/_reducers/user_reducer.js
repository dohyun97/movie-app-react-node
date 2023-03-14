import { LOGIN_USER } from "../_actions/types";

export default function(state={}, action){
    
    if( action.type === LOGIN_USER) return {...state , loginSuccess: action.payload};
    
    return state;
}