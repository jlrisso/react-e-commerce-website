import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import {Link} from 'react-router-dom';
import CartItem from './CartItem';
import {Button} from 'react-bootstrap';
import '../css/Cart.css'




export default function Cart() {

  const {cart, cartTotal, removeItemFromCart, clearCart} = useContext(CartContext)

  if (!cart.length) return (<h3>Your cart is empty!, please consider checking our <Link to='/'>products</Link></h3>)

  return (

    <div className='wrap'>
      <h1 className='main-cart-title'>Shopping Cart</h1>
      <div className='heading'>
          <h1>My Cart</h1>
          <Button onClick={() => clearCart(true)} className='empty-cart-btn' variant="danger">Empty Cart</Button>
      </div>
      <div className="cart">
        <ul className="tableHead">
            <li className="prodHeader">Product</li>
            <li>Quantity</li>
            <li>Total</li>
            <li>Remove</li>
        </ul>
        <ul className="cartWrap">
        {cart.map(product => <CartItem key={product.id} removeItemFromCart={removeItemFromCart} {...product}/>)}
        </ul>
      </div>
      <div className="subtotal cf">
        <ul>
          <li className="totalRow"><span className="label">Subtotal</span><span className="value">${cartTotal}</span></li>
          <li className="totalRow"><span className="label">Shipping</span><span className="value">$0.00</span></li>
          <li className="totalRow"><span className="label">Tax</span><span className="value">$0.00</span></li>
          <li className="totalRow final"><span className="label">Total</span><span className="value">${cartTotal}</span></li>
          <Button as={Link} to='/checkout' variant="success" className="continue">Proceed to Checkout</Button>
        </ul>
      </div>
    </div>

    

  )
}
