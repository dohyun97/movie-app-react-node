import React, {useEffect} from 'react'
import { API_KEY , API_URL,IMAGE_URL} from '../../Config'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import DetailImage from './DetailImage';
import DetailText from './DetailText';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Cast from './Cast';
import SavePage from './SavePage';
import Comment from './Comment';


export const DetailPage = () => {
    let  movieId = useParams().movieId;
    const [movieDetails , setMovieDetails] =useState(null);
    const [casts,setCasts] = useState(null);
    const [viewButton, setViewButton] = useState("View Cast");
    
    

    
  useEffect(()=>{
    const detailUrl = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
   
    fetch(detailUrl)
    .then(res => res.json())
    .then(res => {
       
        setMovieDetails(res)
         
    })

    

  },[])
  
  const clickHandler= ()=>{
    if(viewButton === "View Cast"){
     const castUrl = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
     fetch(castUrl)
     .then(res => res.json())
     .then(res => {
       
         setCasts(res.cast)
         setViewButton("Hide Cast")
          
     })
    }else {
        setCasts(null)
        setViewButton("View Cast")
    }
  }
  

   
     
    
 return (

    <>     
            <div style={{padding: '20px 20px'}}>
            <h3>More Details</h3>
            <div style={{display:'flex', justifyContent:'right'}}>
            {movieDetails &&
            <SavePage movieId={movieId} movieDetails={movieDetails} userForm={localStorage.getItem('userId')}/>
            }
            </div>
                <hr/>
        <Row>
            <Col sm={2}>
            {movieDetails &&
               
                <DetailImage image={movieDetails.poster_path ?
                   `${IMAGE_URL}w500${movieDetails.poster_path}` : null}/>}
             </Col>
             <Col sm={10}>
             
             {movieDetails &&
            <DetailText movieDetails={movieDetails}/>
            }    
            </Col> 

            </Row> 
            <div style={{display:'flex', justifyContent:'center', paddingTop:'30px', paddingBottom:'100px'}}>
            <Button onClick={clickHandler} variant="outline-primary">{viewButton}</Button>
            </div>
            <Row style={{paddingTop: '10px', paddingBottom:'10px'}}>
            {casts &&  casts.map((cast,index)=>
            <React.Fragment key={index}>
            <Cast cast={cast} image={cast.profile_path ?
          `${IMAGE_URL}w500${cast.profile_path}` : null} />
            </React.Fragment>
            )
            }
            </Row>
            {movieDetails &&
            <div style={{paddingBottom:'10px'}}>
            <Comment movieDetails={movieDetails} userForm={localStorage.getItem('userId')}/>
            </div>
            }
            </div> 
 
  </>

   )
}
