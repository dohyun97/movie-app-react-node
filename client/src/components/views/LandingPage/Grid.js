import React from 'react'
import Container from 'react-bootstrap/Container';

import Col from 'react-bootstrap/Col';
import { API_KEY, API_URL } from '../../Config';

export const Grid = (props) => {
  return (
    <>
        <Col xs={6} md={3} >
        <div style={{ position: 'relative' }}>
          <a href={`/detail/${props.id}`}>
              <img style={{ width: '100%', height: '320px' }} src={props.image} />
          </a>
          </div>
          <p style={{fontWeight:'bold'}}>{props.movie.title}</p>
          
        </Col>

        </>
        
      

  )
}
