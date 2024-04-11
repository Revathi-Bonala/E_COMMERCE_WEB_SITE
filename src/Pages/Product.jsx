import React, { useContext } from 'react'
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import {ShopContext} from '../Components/Context/ShopContext';
 import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import {useParams} from 'react-router-dom';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
const Product = () => { 
 // const {contextValue}=useContext(ShopContext);//console.log(contextValue);
  const {all_product}=useContext(ShopContext);//console.log(contextValue);
  const {Id}=useParams();//console.log(Id)
  const product=all_product.find((e)=> e.id===Number(Id) );
 console.log(product)
  return (
    <div>
         <Breadcrum product={product}></Breadcrum> 
          <ProductDisplay product={product}></ProductDisplay>
          <DescriptionBox/>
          <RelatedProducts/>
    </div>
  )
}

export default Product

