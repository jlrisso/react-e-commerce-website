import React, { useState } from 'react'

import Button from 'react-bootstrap/Button';


export default function ItemCount({stock, initial, onAdd, id}) {

  const [count, setCount] = useState (initial); 

  
  return (
    <>
            <Button 
                variant="light" 
                disabled={count <= 0}
                onClick={() => setCount(count - 1)}>-
            </Button>{count}
            <Button 
                variant="light" 
                disabled={count === stock}
                onClick ={() => setCount(count + 1)}>+
            </Button>
            <Button 
                variant="primary"
                disabled={count === 0}
                onClick={() => onAdd(count)}
                >Add to cart
            </Button>
    </>
  )
}