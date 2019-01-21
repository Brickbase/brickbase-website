import React from 'react'
import Img from 'gatsby-image'

export default ({ data }) => (
  <div className="row text-center section section-hero">
    <div className="container-fluid hero-text-container">
      <h1 className="hero-text text-center">{data.tagline}</h1>
      <a href="#" role="button" className="btn btn-hero btn-yellow text-center">Ask for price</a>
    </div>
    <div className="hero-image-container"></div>
    {/* <img src="/images/hero_bg.svg" className="hero-image" /> */}
  </div>
)
