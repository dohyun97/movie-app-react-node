import React,{useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Writer from "./Writer"



function Comment(props) {
  
  let  movieId = useParams().movieId;
  const body ={
    movieId:movieId,
    userForm:null,
    content:null
  }
  
 const [comments, setComments]=useState([]);
  useEffect(()=>{
    
    
    axios.post("/api/comment/list", body)
    .then((res)=>{
      
      setComments(res.data.commentList)
    }).catch((err)=>{
      alert("Fail to find comments")
    })

    

  },[])

 const submitHandler =(event)=>{
   //event.preventDefault()

    const body = {
      userForm: props.userForm,
      movieId: movieId,
      content: event.target[0].value
    }
   
      axios.post("/api/comment/add",body)
      .then((res)=>{
        
         alert("Your comments has beend successfully added!")
      }).catch((err)=>{
           alert(err)
      })

 }

 

  return (
    <>
   <Card style={{ width: '100%' }}>
      <Card.Header style={{fontWeight:"bold"}}>Comment for {props.movieDetails.title}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <form onSubmit={submitHandler}>
           <textarea style={{width:'100%'}}></textarea>
           <Button type='submit' className = "btn btn-primary btn-sm"style={{float:'right',display:'flex'}} >Add</Button>
           
          </form>
           </ListGroup.Item>
        {comments && comments.map((comment,index)=>
        <React.Fragment key={index}>
        <ListGroup.Item>
          {comment.content}
          <Writer commentContent={comment.content}commentId={comment._id} user={comment.userForm}/>
          
          </ListGroup.Item>
        </React.Fragment>
        )}
      </ListGroup>
    </Card>
   </>
  )
}

export default Comment