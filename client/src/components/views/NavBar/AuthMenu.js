import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { useSelector } from "react-redux";
import axios from 'axios';
import { useNavigate } from "react-router-dom";



function AuthMenu() {
  
  const Navigate = useNavigate();
  const user = useSelector(state => state.user)
  const logoutHandler = ()=>{
    
    axios.post("/api/user/logout")
    .then(response =>{
      if(response.data.success){
          console.log(response.data)
          alert("Successfully logged out")
           Navigate("/login");
      }else{
        alert("Faile to logout")
      }
    })
    }
     
       
    
      if (user.userData && !user.userData.isAuth) {
        return (
          <Nav className="justify-content-end flex-grow-1 pe-3">
             <Nav.Link href="/Login">Login</Nav.Link>
             <Nav.Link href="/register">SignUp</Nav.Link>
          </Nav>  
        )
      } else {
        return (
          <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="#">MyPage</Nav.Link>
          <Nav.Link onClick={logoutHandler}>LogOut</Nav.Link>
       </Nav>  
        )
      }
        
      
    
  }
  
export default AuthMenu