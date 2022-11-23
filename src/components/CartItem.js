import React from 'react'
import Button from 'react-bootstrap/Button';
import '../css/CartItem.css'


export default function CartItem(props) {
  
  
  const {
    id,
    img,
    title,
    price,
    qty,
    removeItemFromCart
  } = props 


  return (
    
    <li className="items">
        <div className="infoWrap"> 
          <div className="cartSection">
            <img alt="" src={img} className="itemImg" />
            <p className="itemNumber">Product ID: {id}</p>
            <h3>{title}</h3>
            <p> <input type="text" disabled className="qty" placeholder={qty}/> x ${price}</p>
            <p className="stockStatus"> In Stock</p>
          </div>  
          <div className="prodTotal cartSection">
            <p>${price * qty}</p>
          </div>
          <div className="cartSection removeWrap">
            <Button onClick={() => removeItemFromCart(id)}  className="remove-product">X</Button>
          </div>
        </div>
    </li>
    

  )
}

