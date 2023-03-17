import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AuthMenu from './AuthMenu';





function NavBar() {

  return (
    <Navbar bg="light" expand="lg" style={{top: '0', position:'fixed', width:'100%'}}>
      <Container fluid>
        
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
          >
            <Nav.Link href="/">Movie</Nav.Link>
            
            
            
          </Nav>
          
               <AuthMenu/>
                
          
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
  ) 
    
    
  
};

export default NavBar