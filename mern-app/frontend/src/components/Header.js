import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
      <Container>
        <Link Container to="/">
          <Navbar.Brand>MERN App</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Link Container to="/cart">
            <Nav.Link><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
          </Link>
          <Link Container to="/login">
            <Nav.Link><i className='fas fa-user'></i>Sign In</Nav.Link>
          </Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header