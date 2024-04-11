import React from 'react';
import Popular from '../Components/Popular/Popular';
import Hero from '../Components/Hero/Hero';
import Offers from '../Components/Offers/Offers';
import New_Collections from '../Components/New_Collections/New_Collections';
import News_Letter from '../Components/News_Letter/News_Letter';
const shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <New_Collections/>
      <News_Letter/>
    </div>
  )
}

export default shop
