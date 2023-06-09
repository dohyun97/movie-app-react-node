
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
import { DetailPage } from './views/DetailPage/DetailPage';
import NavBar  from './views/NavBar/NavBar';
import Auth from "../hoc/auth";
import MyPage from './views/MyPage/MyPage';



function App() {
  const NewLandingPage = Auth(LandingPage, null);
  const NewLoginPage = Auth(LoginPage, false);
  const NewRegisterPage = Auth(RegisterPage, false);
  const NewDetailPage = Auth(DetailPage,true);
  const NewMyPage = Auth(MyPage,true);
  return (
   
<div>
<NavBar />
<div style={{ paddingTop: '60px' }}> 
       <Routes>  

          <Route path="/" element = {< NewLandingPage/>} />
          <Route path="/login" element = {<NewLoginPage/>} />
          <Route path="/register" element = {< NewRegisterPage/>} /> 
          <Route path='/detail/:movieId' element= {<NewDetailPage/>} />
          <Route path='/mypage' element= {<NewMyPage/>} />
        
         
        </Routes>
  </div> 
  </div>
  
  );
}

export default App;

