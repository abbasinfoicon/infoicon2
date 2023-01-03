import React from 'react'

const Banner = ({title, banner}) => {
  return (
    <div className="innerHeading" style={{backgroundImage: `url(${banner})`}}>
        <div className="container">
            <h1>{title}</h1>
        </div>
    </div>
  )
}

export default Banner