import React ,{useEffect, useState}from 'react'
import axios from 'axios'
import { useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';


function Writer(props) {

 const [userEmail,setUserEmail] = useState(null);
 const nowUser = useSelector(state => state.user)
  const [commentId,SetCommentId] = useState(null)
  const [ commentMode , setCommentMode] = useState(false)
  const [commentText, setCommentText] = useState("")
  const Navigate = useNavigate();
  let  movieId = useParams().movieId;


    useEffect(()=>{
        let body= {
          id:props.user
        }
         
        
       
        axios.post("/api/user/findUser", body )
        .then((res)=>{
            
           setUserEmail(res.data.userInfo.email)
        }).catch((err)=>{
          alert("Fail to find user")
        })
    
        
    
      },[])


const editClick = ()=>{
    
        setCommentMode(true)
        SetCommentId(props.commentId)
        setCommentText(props.commentContent)
 }


 const editHandler = (event)=>{
    //event.preventDefault()
    

    let body={
        id:commentId,
        content: event.target[0].value
    }

    axios.post("/api/comment/edit", body)
    .then((res)=>{
        setCommentMode(false)
        //setCommentText("")
       
        alert("Successfully edited")
        
    }).catch((err)=>{
        alert(err)
    })
    

 }

 const changeHandler = (event)=>{
   
     setCommentText(event.target.value)
 }


const deleteClick=()=>{
       let data = {
           id: props.commentId
       }
      

    axios.delete("/api/comment/delete", {data})
    .then((res)=>{
     
        alert("Successfully deleted")
        window.location.reload(true)
    }).catch((err)=>{
        alert(err)
    })
 }


    
  return (
    <>
    
    <p style={{display:"flex",justifyContent:"right", fontSize:'15px', color:'gray' }}><i>{userEmail}</i></p>
    {(nowUser.userData._id === props.user&& !commentMode) &&
            <div>
            <Button onClick={editClick} variant="outline-primary">Edit</Button>{' '}
            <Button onClick={deleteClick} variant="outline-secondary">Delete</Button>
            </div>
           }
           {(commentMode && (commentId===props.commentId)) &&
             <form  onSubmit={editHandler} style={{paddingTop:'10px'}}>
             <textarea style={{width:'100%'}}  value = {commentText} onChange={changeHandler}>{commentText}</textarea>
             <Button type='submit' className = "btn btn-primary btn-sm"style={{float:'right',display:'flex'}} >Edit</Button>
             </form>
           }
    </>
  )
}

export default Writer