
import './views/css/App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Switch } from "react-router-dom";

import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import NavBar  from './views/NavBar/NavBar';
import Auth from "../hoc/auth";



function App() {
  const NewLandingPage = Auth(LandingPage, null);
  const NewLoginPage = Auth(LoginPage, false);
  const NewRegisterPage = Auth(RegisterPage, false);
  return (
   
<>
<NavBar/>
<div style={{ paddingTop: '60px' }}> 
       <Routes>  

          <Route path="/" element = {< NewLandingPage/>} />
          <Route path="/login" element = {<NewLoginPage/>} />
          <Route path="/register" element = {< NewRegisterPage/>} /> 
          
        
         
        </Routes>
  </div> 
  </>
  
  );
}

export default App;
