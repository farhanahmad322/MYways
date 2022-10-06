import React, { Component } from 'react'

export class NewsItem extends Component {
render() {
  return (
    <div className="container my-3">
      <div className="card">
    <div className="card-header">
    New York city,Ny,United State As of 04:37--dummy
  </div>
  <div className="card-body">
  <h1 className="card-title">21</h1>
  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
  <a href="/" className="btn btn-sm btn-primary">Next Hours</a>
</div>
</div>
      
    </div>
  )
}
}

export default NewsItem