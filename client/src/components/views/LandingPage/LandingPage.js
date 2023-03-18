 import React, {useEffect} from 'react';
 import {API_URL, API_KEY,IMAGE_URL} from '../../Config';
 import { useState } from 'react';
import { MainImage } from './MainImage';
import { Grid } from './Grid';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

 



 function LandingPage() {
 
  const [popularMovie,setPopularMovie] = useState(null);
  const [movies, setMovies] = useState([]);
  const [page,setPage] = useState(1);
  useEffect(()=>{
    const popularUrl = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
   
    fetch(popularUrl)
    .then(res => res.json())
    .then(res => {
     
        setPopularMovie(res.results[0])
        setMovies(res.results)
         
    })

    

  },[])
  

  const clickHandler = ()=>{
   const pageUrl = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${page+1}`
   fetch(pageUrl)
   .then(res => res.json())
   .then(res => {
    console.log(res.results)
       setMovies([...movies,...res.results]) //need to spread all the elements in res.results with movies
       setPage(res.page);
        
   })

  }

   
     
    
 return (
   
<>
    <div style={{ width: '100%', margin: '0'}}>
     {popularMovie &&
        <MainImage popularMovie={popularMovie} />
     }
     </div >
     <div style={{ paddingTop: '60px', paddingLeft: '60px'}}>
        <h2>Hot Movies</h2>
     </div>
     <hr/>
     
     <Row style={{paddingLeft: '60px', paddingRight:'60px'}}>
     {movies && movies.map((movie,index) => (
      <React.Fragment key={index}>
         <Grid movie={movie} 
         image={movie.poster_path ?
          `${IMAGE_URL}w500${movie.poster_path}` : null}
          id= {movie.id}
          />
      </React.Fragment>
     ))
     }
     </Row>
     <div style={{display: 'flex', justifyContent: 'center',paddingBottom:"30px"}}>
     <Button onClick={clickHandler} variant="outline-primary">Load More</Button>
     </div>
  </> 
     

   )
}
 
 export default LandingPage