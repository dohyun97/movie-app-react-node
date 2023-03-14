import React from 'react';
import {useDispatch} from 'react-redux'; 
import {registerUser} from "../../../_actions/user_actions";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';


function RegisterPage() {
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const [ nameErr , setNameErr] = useState(null);
  const [ emailErr , setEmailErr] = useState(null);
  const [ pwErr , setPwErr] = useState(null);
  const [confirmErr,setConfirmErr] = useState(null);
  const onSubmitHandler = (event)=>{
     event.preventDefault();
    const Email = event.target.email.value;
    const Password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    const Name = event.target.name.value;
    
    if(Name === ""){
      setNameErr("Please type name");
    }
    if(Email === ""){
      setEmailErr("Please type email");
    }
    
    if( Password.length <5){
      setPwErr("Password length should be minimum 5");
    }
    if(Password !== confirmPassword){
      setConfirmErr("Confirmed password should be same as Password");
    }
     let body = {
        email: Email,
        password: Password,
        name:Name
     }

     dispatch(registerUser(body))
      .then((res)=>{
          if(res.payload.success){
              navigate("/login");
          }else{
            alert(JSON.stringify(res.payload.msg));
          }
       }) 
  }
  return (
    <div style={{  display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:'100vh' }}>
     <form style={{display:'flex', flexDirection:'column'}} onSubmit={onSubmitHandler}> 
        <label>Email</label>
        <input type = "email" name="email" placeholder="Please type email"></input>
        <div style={{ color: 'red'}}>{emailErr}</div>
        <label >Name</label>
        <input type = "text" name="name" placeholder='Please type name'></input>
        <div style={{ color: 'red'}}>{nameErr}</div>
        <label >Password</label>
        <input type = "password" name="password" placeholder='Please type password'></input>
        <div style={{ color: 'red'}}>{pwErr}</div>
        <label >Confirm Password</label>
        <input type = "password" name="confirmPassword" placeholder='Please type password'></input>
        <div style={{ color: 'red'}}>{confirmErr}</div>
        <br/>
        <button>Submit</button>
     </form>
     
     </div>
  )
}

export default RegisterPage