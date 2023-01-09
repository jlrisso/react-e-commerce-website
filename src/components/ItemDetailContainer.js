import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { getItem } from '../services/firebaseConfig'
import {useParams} from 'react-router-dom';
import BarLoader from "react-spinners/ClipLoader";


export default function ItemDetailContainer() {

    const [item, setItem] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const {bookId} = useParams();

    useEffect(() => {
        getItem(bookId)
            .then(data => {
                setItem({id: data.id, ...data.data()});
            })
            .catch( errorMessage => {
                console.error(errorMessage);
            })
            .finally(() => { 
                setIsLoading(false)
            })
        return () => setIsLoading(true);  

        
    }, [bookId]); 


    if (isLoading) return (<div><BarLoader /></div>)
    
    return (
        <div><ItemDetail item={item}/></div>
    )
}



