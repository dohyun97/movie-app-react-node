import React, {useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';

const SavePage = (props) => {
   const [save,setSave] = useState(false)
   const body={
    userForm: props.userForm,
    movieId: props.movieId,
    movieTitle: props.movieDetails.title,
    movieDate: props.movieDetails.release_date,
    moviePic: props.movieDetails.poster_path

}
  
  
   useEffect(()=>{
    
    axios.post('/api/save/checkSaved', body)
    .then((response) => {
        if (response.data.success) {
          
            setSave(response.data.saved)
        }
    }).catch((err)=>{
      alert("Fail")
    })



    },[])

  const clickHandler = ()=>{
    
    if(save){
      axios.post('/api/save/remove', body)
      .then((res)=>{
        
         setSave(false)
      }).catch((err)=>{
        alert("Fail to unsave")
      })
    }else{
      axios.post('/api/save/add', body)
      .then((res)=>{
        
         setSave(true)
      }).catch((err)=>{
        alert("Fail to save")
      })
    }
  }

  return (
   <>
     <Button  onClick={clickHandler} variant="outline-primary" >{save ? "Unsave" : "Save"}</Button>
   </>
  )
}

export default SavePage