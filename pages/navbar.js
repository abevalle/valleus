import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function MainNav() {
  return (
    <div >
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home"> ValleUS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar"/>
        <Navbar.Collapse id="navbar">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default MainNav;