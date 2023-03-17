import React from 'react'

export const MainImage = (props) => {
  return (
    <div style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0)
          39%,rgba(0,0,0,0)
          41%,rgba(0,0,0,0.65)
          100%),
        url('https://image.tmdb.org/t/p/w1280${props.popularMovie.poster_path}'), #1c1c1c`,
            height: '500px',
            backgroundSize: '100%, cover',
            backgroundPosition: 'center, center',
            width: '100%',
            position: 'relative'
        }}>
            <div>
                <div style={{ position: 'absolute', maxWidth: '700px',bottom: '2rem', marginLeft: '2rem' }}>
                    <h2 style={{ color: 'white' }}>  {props.popularMovie.title} </h2>
                    <p style={{ color: 'white', fontSize: '1rem' }}> {props.popularMovie.overview}</p>

                </div>
            </div>
      </div>
  )
}



