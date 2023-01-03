import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = ({ name, parent }) => {
  return (
    <div className="bradcrumb">
      <div className="container clearfix">
        <div className="lft">
          <Link to="/">Home</Link> <span>&gt;</span>
          {parent ? (<><Link to={`/${parent}`}>{parent}</Link> <span>&gt;</span></>) : ''}
          {name}
        </div>
      </div>
    </div>
  )
}

export default Breadcrumb