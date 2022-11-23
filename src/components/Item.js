import React from 'react'
import '../css/Item.css';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';


import {Link} from 'react-router-dom';

export default function Item(props) {
  const {
    id,
    img,
    author,
    price,
  } = props;

  return (
    <Col>
    <Card style={{ width: '15rem' }}  >
      <Card.Img variant="top" src={img} width={238} height={360} />
      <Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>Author: {author}</ListGroup.Item>
            <ListGroup.Item>Price: {price}</ListGroup.Item>
            <ListGroup.Item><Link className='detailbtn__link' to={`/detail/${id}`}>See Details...</Link></ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
    </Col>
  )
}

