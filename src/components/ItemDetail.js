import React, { useState, useContext } from 'react'
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom';


export default function ItemDetail({item}) {
    
    const [showProceedToCheckoutBtn, setShowProceedToCheckoutBtn] = useState (false);


    const {
      id,  
      img,  
      title,
      summary,
      author,
      price,
      stock,
    } = item;
    

    const {addToCart, isInCart} = useContext(CartContext);

    const onAdd = (count) => {
            setShowProceedToCheckoutBtn(true);
            addToCart(item, count)
    }


    const setInitialValue = (id) => (isInCart(id))?.qty || 0 
    
    
    
    return (
        <Container className='mt-5' >
            <Row>
                    <Col md="auto"><Card.Img variant="top" src={img} style={{ width: '20rem'}}/></Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text style={{ textAlign: 'justify'}}>{summary}</Card.Text>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item className='p-0 mb-4'>Author: {author}</ListGroup.Item>
                                <ListGroup.Item className='p-0 mb-4'>Price: {price}</ListGroup.Item>
                            </ListGroup>
                            {showProceedToCheckoutBtn ? 
                                <Button as={Link} variant="primary" to={'/cart/'}>Proceed to cart</Button> :
                                <ItemCount initial={setInitialValue(id)} id={id} stock={stock} onAdd={onAdd}/>
                            }
                        </Card.Body>
                    </Col>
                
            </Row>
        </Container>
    
    )
}
