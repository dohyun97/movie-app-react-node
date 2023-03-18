import React, {useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import axios from 'axios';
import {IMAGE_URL} from '../../Config'
import Button from 'react-bootstrap/Button';


function MyPage() {
 const [saveList,setSaveList] = useState([])

 const user = window.localStorage.getItem('userId')
 
 useEffect(() => {
   
 let body = {
    userId: user
}     

 
 axios.post("/api/save/saveList", body)
 .then((res)=>{
    
    setSaveList(res.data.saveList)
 }).catch((err)=>{
    alert(err)
 })
},[])

const unsaveHandler = (commentId) =>()=>{
    const body={
        id:commentId
    }
   
    axios.post('/api/save/removebyId', body)
      .then((res)=>{
        console.log("Successfully Unsaved!")
        window.location.reload(true)
      }).catch((err)=>{
        alert("Fail to unsave")
      })
}
  
  return (
  
    <div style={{padding:'20px 200px 20px 200px'}}>
     <h1>Saved Movie</h1>
     <hr/>

   
     <Table striped>
    
     <thead>
       <tr>
         <th>Movie</th>
         <th>Title</th>
         <th>Realase Date</th>
         <th>Run time</th>
       </tr>
     </thead>
     {saveList && saveList.map((list,index)=>
     <React.Fragment key={index}>
     <tbody>
       <tr>
        <td >
        <a href={`/detail/${list.movieId}`}>
        {list.moviePost ?
           <img src={`${IMAGE_URL}w500${list.moviePost}`} style={{display:'flex',width:'55%', height:'120px'}} /> : "no image"}
        </a>
         </td>
         <td style={{paddingTop:'40px'}}>{list.movieTitle}</td>
         <td style={{paddingTop:'40px'}}>{list.movieDate}</td>
         <td style={{paddingTop:'40px'}}>{list.movieRunTime}</td>
         <td style={{paddingTop:'40px'}}><Button variant="outline-primary" onClick={unsaveHandler(list._id)} >Unsave</Button></td>
       </tr>
     </tbody>
     </React.Fragment>
     )}
   </Table>
</div>

     
   
  )
}

export default MyPage