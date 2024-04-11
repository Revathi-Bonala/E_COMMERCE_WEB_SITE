import React, { createContext } from 'react';
import all_product from '../assets/all_product'; // Adjusted import path
import { useState } from 'react';
//  export const ShopContext = createContext({contextValue:null});
//  export const ShopContext = createContext({contextValue:null});
 export const ShopContext = createContext(null);
// console.log(ShopContext);
// console.log(ShopContext);
const getDefaultCart=()=>{
    let cart={};
     for(let index=0;index< all_product.length+1;index++){
        cart[index]=0;
        
     }
     return cart;

}
const ShopContextProvider = (props) => {
    const [cartItems,setCartItems]=useState(getDefaultCart);


//    console.log(cartItems);
   const addToCart=(itemId)=>{
    setCartItems( (prev)=>({...prev,[itemId]:prev[itemId]+1}) )
    // console.log(cartItems);
   }
   const removeFromCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
   }
   const getTotalCartAmount=()=>{
       let totalAmount=0;console.log("fun")
       for(let item in cartItems){
         console.log(cartItems);
        console.log(item , cartItems[item]);
        if(cartItems[item]>0){
        console.log(cartItems[item]);
          console.log("fun1")
           let itemInfo=all_product.find((product)=>product.id===Number(item))
            
             totalAmount+=itemInfo.new_price * cartItems[item];
console.log("'aaa")
              console.log(itemInfo,totalAmount);
        }
        
       }
       return totalAmount;

   }
   const getTotalCartItems=()=>{
    let totalItem=0;
    for(const item in cartItems){
        if(cartItems[item]>0){
            totalItem+=cartItems[item];
        }
    }
    return totalItem;
   }
   const contextValue = {getTotalCartItems, getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
//    console.log(typeof(contextValue))
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};
export default ShopContextProvider;
