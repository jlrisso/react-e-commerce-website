import React from 'react'
import { Button } from 'react-bootstrap';
import { useContext, useState } from 'react';
import { useForm } from '../hooks/useForm';
import { CartContext } from '../context/CartContext';
import { serverTimestamp } from 'firebase/firestore';
import { writeNewOrder } from '../services/firebaseConfig'
import FormInput from './FormInput';
import {inputs} from '../utils/inputsData'
import '../css/Checkout.css'



export default function Checkout() {

    const {cart, cartTotal, clearCart} = useContext(CartContext)  

    const {values, handleChange} = useForm({
        name:'',
        surname:'',
        phoneNumber:'',
        email:'',
        confirmEmail:'',
    })

    const [orderId, setOrderId] = useState('');


    const handleSubmit = (event) =>{
        
        event.preventDefault();
        
        const newOrder = {
            buyer: (({confirmEmail, ...rest}) => rest)(values), //Filter confirmEmail
            items: cart,
            total: cartTotal,
            date: serverTimestamp(),
        } 

        writeNewOrder(newOrder)
            .then(data => {
                setOrderId(data.id);
                clearCart();
            })
            .catch( errorMessage => {
                console.error(errorMessage);
                clearCart();
            }) 
        
    }

    if (orderId) {
        return (
            <div className="container my-5">
                <h2>Thanks for your order!, {values.name}</h2>
                <h3 className='order-submitted'>Your order has been submitted</h3>
                <hr/>
                <p>Your order number is: <strong>{orderId}</strong></p>
            </div>
        )
    }
  
    
    return (
    <>
        <h2>Checkout</h2>
        <div className='form-wrap'>
            <form onSubmit={handleSubmit}>
                {inputs.map(input => {
                                if (input.name==='confirmEmail') return <FormInput key={input.id} {...input} pattern={values.email} value={values[input.name]} onChange={handleChange}/>
                                return <FormInput key={input.id} {...input} value={values[input.name]} onChange={handleChange}/> 
                            })
                }        
                <Button type="submit" variant='success' className="buybtn">Buy now</Button>
            </form>
        </div>
    </>
    )
}



/*

IMPORTANT! :El IF dentro del map que recorre los inputs está puesto para
poder agregarle al input "confirmEmail" el pattern=values.email (que es para la validación).
Este IF se tuvo que agregar porque al apartar la variable inputs a otro archivo, no se 
puede establecer el pattern=values.email en la definición de la variable, porque justamente
la variable values.email NO EXISTE en ese otro archivo que está dentro de utils. 

*/