import React from 'react';
import './News_Letter.css';
const News_Letter = () => {
  return (
    <div className='news_letter'>
      <h1>Get Exclusive Offers On Your Mail</h1>
      <p>Subscribe to our news letter and stay update</p>
      <div className="input">
        <input type="email" placeholder='Your Email Id' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default News_Letter
