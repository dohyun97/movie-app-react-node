 import React, {useEffect} from 'react';
 import {useDispatch} from 'react-redux';
 import {auth} from '../_actions/user_actions'
 import { useNavigate } from "react-router-dom";

 export default function (SpecificComponent, option, adminRoute=null){
   //option: t => only login user can go
   //F =>  only unlogin user can go
   // null => all the user can go
    function AuthenticationCheck() {
        const Navigate = useNavigate();
        const dispatch = useDispatch();

        useEffect(() => {

            dispatch(auth()).then(response => {
                console.log(response);
                //not auth
                if(!response.payload.isAuth){
                    if(option){
                        Navigate("/login");
                    }
                }else{
                    if(adminRoute && !response.payload.isAuth){
                        Navigate("/");
                    }else{
                        if(option === false){
                            Navigate("/");
                        }
                    }
                }
                
            })
        }, []);

        return (
            <SpecificComponent />
        )
    }
    return AuthenticationCheck
 }