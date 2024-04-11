import React, { useContext, useState } from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
import carticon from '../assets/cart_icon.png';
import { ShopContext } from '../Context/ShopContext';
const Navbar = () => {
 
    const [menu,setMenu]=useState("shop");
    const {getTotalCartItems}=useContext(ShopContext);
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
         <li onClick={()=>{setMenu("shop")}}><Link to='/'>Shop</Link> {menu==="shop"?<hr />:<></>}</li>
         <li onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li> 
         <li onClick={()=>{setMenu("mens")}}><Link to='/mens'>Men</Link> {menu==="mens"?<hr/>:<></>}</li>
         <li onClick={()=>{setMenu("womens")}}><Link to='/womens'>womens</Link>{menu==="womens"?<hr/>:<></>}</li>
         
      </ul>
      <div className="nav-login-cart">
      <Link to='/login'> <button>Login</button></Link>
      <Link to='/cart'><img src={carticon} alt="#"  /></Link> 
        <div className="nav-cart-count">{getTotalCartItems()}</div>
       </div>
    </div>

  )
}

export default Navbar
