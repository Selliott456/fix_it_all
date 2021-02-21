import React from 'react'
import bathroom3 from '../images/bathroom_3.png'
const Header = () => {
  return <div role="main">
  <img alt="bathroom" id="hero" src={bathroom3}></img>
    <div className="hero-text">
      <h1 id="hero-text">Fix it All</h1>
      <p>Glasgow</p>
  </div>
  </div>

}

export default Header