import React from 'react'
import Item from './Item'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function ItemList({items}) {
  return (
    <div>
        <Container fluid>
        <Row>
        {items
            .map((item) =>  
                <Item key={item.id} {...item}/>
        )}
        </Row>
        </Container>
    </div>
  )
}



