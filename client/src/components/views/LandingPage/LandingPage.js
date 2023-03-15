 import React, {useEffect} from 'react';
 import axios from 'axios';
 import { useNavigate } from "react-router-dom";


 function LandingPage() {
    const Navigate = useNavigate();
    useEffect(()=>{
     axios.get("/api/hello")
     .then(response => console.log(response.data))
    },[]);
     
    const onClickHandler = ()=>{
      axios.post("/api/user/logout")
        .then(response =>{
          if(response.data.success){
              alert("successfully logged out")
               Navigate("/login");
          }else{
            alert("Faile to logout")
          }
        })
    
     }

   return (
     <div style={{  display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:'100vh' }}>
     <h2>Start Page</h2>
     <button onClick={onClickHandler}>Log out</button>
     </div>
   )
 }
 
 export default LandingPage