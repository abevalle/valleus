import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <div>
      <Container >
        <Row>
          <Col>
          <div>
            <h1>About</h1>
            <p>Since 2010 I've been repairing and services computers. </p>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About;