import React from 'react'

function DetailImage(props) {
  return (
<div>
    <img style={{ width: '100%', height: '320px' }} src={props.image} />
    
    </div>
  )
}

export default DetailImage