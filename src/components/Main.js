import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import ItemDetailContainer from './ItemDetailContainer'
import ItemListContainer from './ItemListContainer'
import {Routes, Route} from 'react-router-dom';
import Cart from './Cart'
import Checkout from './Checkout';
import { CartContext } from '../context/CartContext';



export default function Main() {

  const {cart} = useContext(CartContext)


  return (
    <Container className='mt-5'>
        <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/category/:categoryName' element={<ItemListContainer/>} />
            <Route path='/detail/:bookId' element={<ItemDetailContainer />} />
            <Route path='/cart' element= {<Cart/>} />
            <Route path='/checkout' element={<Checkout/>} />
        </Routes>
    </Container>
  )
}

