import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AuthMenu from './AuthMenu';






function NavBar() {

  return (
    <Navbar bg="light" expand="lg" style={{position:'fixed', width:'100%', zIndex: 10, paddingLeft:"45px",paddingRight:"45px",height:'80px', fontSize:'20px'}}>
      <Container fluid>
        
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
          >
            <Nav.Link href="/">Movie</Nav.Link>
            
            
            
          </Nav>
          
               <AuthMenu/>
                
          
              
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
  ) 
    
    
  
};

export default NavBar