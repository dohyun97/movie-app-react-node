import React from 'react'
import { Badge, Descriptions } from 'antd';



function DetailText(props) {
   
  return (

    <Descriptions title="Movie Info" bordered>
            <Descriptions.Item label="Title">{props.movieDetails.original_title}</Descriptions.Item>
            <Descriptions.Item label="release_date">{props.movieDetails.release_date}</Descriptions.Item>
            <Descriptions.Item label="revenue">{props.movieDetails.revenue}</Descriptions.Item>
            <Descriptions.Item label="runtime">{props.movieDetails.runtime}</Descriptions.Item>
            <Descriptions.Item label="vote_average" >
                {props.movieDetails.vote_average}
            </Descriptions.Item>
            <Descriptions.Item label="vote_count">{props.movieDetails.vote_count}</Descriptions.Item>
            <Descriptions.Item label="status">{props.movieDetails.status}</Descriptions.Item>
            <Descriptions.Item label="genres"span={2}>
            {props.movieDetails.genres.map((n,index)=>
            <React.Fragment key={index}>
              <p style={{display:'inline'}}>{n.name}. </p>
              </React.Fragment>)}
              </Descriptions.Item>
              <Descriptions.Item label="overveiw" >{props.movieDetails.overview}</Descriptions.Item>
        </Descriptions>
   
    
  )
}

export default DetailText