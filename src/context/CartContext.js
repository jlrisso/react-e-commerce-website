import React, { createContext} from 'react'
import Swal from 'sweetalert2'
import useLocalStorage from '../hooks/useLocalStorage';


export const CartContext = createContext();

const LOCAL_STORAGE_PREFIX = 'BOOKSPOT-REACT-ECOMMERCE'; 
const CART_KEY = `${LOCAL_STORAGE_PREFIX}-cart`;



export default function CartProvider ({children}) {

    //ANTES DE IMPLEMENTAR LOCAL-STORAGE: const [cart, setCart] = useState([])
    const [cart, setCart] = useLocalStorage(CART_KEY, []) 


    const cartQuantity = cart.reduce((acc, product) => acc + product.qty, 0); 
    
    const cartTotal = cart.reduce((acc, product) => acc + (product.qty * product.price), 0); 


    const addToCart = (item, qty) => { 
        setCart(prevItems => {
                if (!isInCart(item.id)) return [...prevItems, {...item, qty}]  
                else {  return prevItems.map( product => {
                            if(product.id === item.id) return {...product, qty}
                            else return product;
                        })
                }
        })
    }




    const isInCart = (id) => cart.find(product => product.id === id)


    const clearCart = (btnMode = false) => {
        if (!btnMode) return setCart([]);
        Swal.fire({
            title: 'Are you sure you want to empty the Cart?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Clear all',
        }).then((result) => {
            if (result.isConfirmed) setCart([]);
        })
    }   


    const removeItemFromCart = (id) => setCart(cart.filter(product => product.id !== id))    

    
   
    return (
        <CartContext.Provider value={{cart, addToCart, clearCart, removeItemFromCart, cartQuantity, isInCart, cartTotal}}>
            {children}
        </CartContext.Provider>

    )
}






