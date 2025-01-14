import React from 'react'
import './Hero.css';
//import arrow_icon from '../Assets/arrow.png';
import hand_icon from '../assets/hand_icon.png';
import hero_image from '../assets/hero_image.png';
 import arrow_icon from '../assets/arrow.png';
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className="hero-hand-icon">
          <p>new</p>
          <img src={hand_icon} alt="" />
        </div>
          <p>  Collections</p>
          <p>  for everyone</p>
      </div>
      <div className="hero-latest-btn">
        <div>Latest Collections</div>
        <img src={arrow_icon} alt="" />

      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero
