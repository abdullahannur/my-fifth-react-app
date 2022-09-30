import React from 'react';
import './Product.css' ;

const Product = (props) => {
    // console.log(props.product)
    const {handleToCart , product} = props ;
    const {  img , name , price , seller , ratings} = product ;   
   return (
        <div className='cart'>
            <img src={img} alt="" />
           <div  className='cart-info'>
            <p className='cart-h'>{name}</p>
            <p>price: {price}</p>
            <p>seller: {seller}</p>
            <p><small>ratings: {ratings}</small></p>
           </div>
           <button 
           onClick={()=>handleToCart(product)}
           className='cart-btn'><p>Add to cart</p></button>
        </div>
    );
};

export default Product;