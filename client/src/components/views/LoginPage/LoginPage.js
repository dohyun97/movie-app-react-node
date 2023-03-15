import {useDispatch} from 'react-redux'; 
import React from 'react';
import {loginUser} from "../../../_actions/user_actions"
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const onSubmitHandler = (event)=>{
     event.preventDefault();
    const Email = event.target.email.value;
    const Password = event.target.password.value;
     let body = {
        email: Email,
        password: Password
     }

     dispatch(loginUser(body))
      .then((res)=>{
          if(res.payload.loginSuccess){
              navigate("/");
          }else{
            alert(res.payload.message);
          }
       }) 
  }
  return (
    <div style={{  display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:'100vh' }}>
     <form style={{display:'flex', flexDirection:'column'}} onSubmit={onSubmitHandler}> 
        <label>Email</label>
        <input type = "email" name="email" placeholder="Please type email"></input>
        <label >Password</label>
        <input type = "password" name="password" placeholder='Please type password'></input>
        <br/>
        <button>Login</button>
        <p class="message">Not registered? <a href="/register">Create an account</a></p>
     </form>
     
     </div>
  )
} 

export default LoginPage