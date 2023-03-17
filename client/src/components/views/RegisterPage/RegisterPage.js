import React from 'react';
import {useDispatch} from 'react-redux'; 
import {registerUser} from "../../../_actions/user_actions";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import "../../views/css/login.css"

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
    
    setNameErr(""); setConfirmErr(""); setEmailErr(""); setPwErr("");
    
    if(Email === ""){
      setEmailErr("Please type email");
      
    }if(Name === ""){
      setNameErr("Please type name");
      
    }
    
    if( Password.length <5){
      setPwErr("Password length should be minimum 5");
      
    }else if(Password !== confirmPassword){
      return setConfirmErr("Please type same password");
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
            if(Name === "" || Email === "" || Password.length<5){
              alert("Please fill up again")
            }else{
              
              alert(JSON.stringify(res.payload.msg));
            }
          }
       }) 
  }
  return (
    <div className="login-page">
    <div style={{  display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:'100vh' }}>
    <div style={{ width: '500%'}} className = "form">
     <form style={{display:'flex', flexDirection:'column'}} onSubmit={onSubmitHandler}> 
        <label style={{display: 'flex', justifyContent: 'left'}}>Email</label>
        <input type = "email" name="email" placeholder="Please type email"></input>
        <div className="err"style={{ color: 'red'}}>{emailErr}</div>
        <label style={{display: 'flex', justifyContent: 'left'}}>Name</label>
        <input type = "text" name="name" placeholder='Please type name'></input>
        <div className= "err"style={{ color: 'red'}}>{nameErr}</div>
        <label style={{display: 'flex', justifyContent: 'left'}}>Password</label>
        <input type = "password" name="password" placeholder='Please type password'></input>
        <div className="err" style={{ color: 'red'}}>{pwErr}</div>
        <label style={{display: 'flex', justifyContent: 'left'}}>Confirm Password</label>
        <input type = "password" name="confirmPassword" placeholder='Please type password'></input>
        <div className="err" style={{ color: 'red'}}>{confirmErr}</div>
        <br/>
        <button>Submit</button>
     </form>
     </div>
     </div>
     </div>
  )
}

export default RegisterPage