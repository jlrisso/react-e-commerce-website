import React, { useEffect, useState } from 'react'
import { getItems } from '../services/firebaseConfig'
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';

export default function ItemListContainer() {

  const [items, setItems] = useState([]);
  const [itemsLoading, setItemsLoading] = useState(true);
  
  const {categoryName} = useParams();

  useEffect(() => {
    getItems(categoryName)
      .then(data => {
          setItems(data.docs.map(product => { return {id: product.id, ...product.data()}}));
      })
      .catch( errorMessage => {
          console.error(errorMessage);
      })
      .finally(() => { 
          setItemsLoading(false)
      })

    return () => setItemsLoading(true);  
      
  }, [categoryName]);

  if (itemsLoading) return <h3>Loading Books...</h3>
  
  return (
      <div>
        <ItemList items={items}/>
      </div>
  )
}


