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
            <p>Since 2012 I've been repairing and servicing computers. So with almost 10 years expierence you can be sure that you will satisfactory services</p>
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About;