import React from 'react'
import Col from 'react-bootstrap/Col';

function Cast(props) {
  return (
    <>
        <Col xs={6} md={3} >
        <div style={{ position: 'relative' }}>
          
              <img style={{ width: '100%', height: '320px' }} src={props.image} />
          
          </div>
          <p style={{fontWeight:'bold'}}>{props.cast.name}</p>
          
        </Col>

        </>
        
  )
}

export default Cast