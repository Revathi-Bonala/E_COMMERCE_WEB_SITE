import React from 'react'
import new_collections from '../assets/new_collections';
import Item from '../Items/Item';
import './New_Collections.css';
const New_Collections = () => {
  return (
    <div className='new_collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {new_collections.map((item,i)=>{
             return ( <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>)

            })}
        </div>
      
    </div>
  )
}

export default New_Collections
