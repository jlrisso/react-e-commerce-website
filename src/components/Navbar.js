import React, { useState, useEffect } from 'react'
import '../css/Navbar.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BNavbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { getCategories } from '../services/firebaseConfig'

import {Link} from 'react-router-dom';

import logo from '../img/logo.png'
import CartWidget from './CartWidget';



export default function Navbar() {
    
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
      .then(data => {
          setCategories(data.docs.map(category => { return {id: category.id, ...category.data()}}));
      })
      .catch( errorMessage => {
          console.error(errorMessage);
      })
      
  }, []);


  return (
    <BNavbar bg="light" expand="lg">
      <Container>
          <BNavbar.Brand><Link className='navbar__links' to="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Bookspot</Link>
          </BNavbar.Brand>
          <BNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BNavbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#link" disabled={true}>About Us</Nav.Link>
              <Nav.Link href="#link" disabled={true}>News</Nav.Link>
              <Nav.Link href="#link" disabled={true}>Store</Nav.Link>
              <Nav.Link href="#link" disabled={true}>Contact</Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                {categories.map(category => <NavDropdown.Item as={Link} key={category.id} className='navbar__links' 
                to={`/category/${category.path}`} disabled={category.disabled}>{category.title}</NavDropdown.Item>)}
              </NavDropdown>
            </Nav>
          </BNavbar.Collapse>
          <Link className='navbar__links' to="/cart"><CartWidget /></Link>
      </Container>
    </BNavbar>
  )
}

