import React from 'react'
import Img from 'gatsby-image'

export default ({ data }) => (
  <div className="row text-center section section-hero">
    <div className="container-fluid hero-text-container">
      <h1 className="hero-text text-center">{data.tagline}</h1>
    </div>
    <div className="hero-image-container"></div>
  </div>
)
