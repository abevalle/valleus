import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopHouse, faEthernet, faLaptopCode, faCloud } from '@fortawesome/free-solid-svg-icons'


function Services() {
  return (
    <div className={"services"}>
      <Container>
        <Row>
          <Col xs={{span: 12}}>
          <h1 style={{textAlign: 'center', marginTop: '20px'}}><FontAwesomeIcon icon={faLaptopHouse}/></h1>
          <h4 style={{textAlign: 'center'}}>Remote Services</h4>
          <hr/>
          <ul>
            <li>Software Installation</li>
            <li>Software Maintainence</li>
            <li>Virus Removal</li>
            <li>Server/Computer Maintainence</li>
            <li>3CX Set up/Maintainence</li>
          </ul>
          </Col>
          <Col xs={{span: 12}}>
            <h1 style={{textAlign: 'center', marginTop: '20px'}}><FontAwesomeIcon icon={faEthernet}/></h1>
            <h4 style={{textAlign: 'center'}}>Web Services</h4>
            <hr/>
            <ul>
              <li>Wordpress Installation</li>
              <li>Wordpress Maintaince</li>
              <li>Website/Application Setup</li>
              <li>Web hosting</li>
            </ul>
          </Col>
          <Col xs={{span: 12}}>
            <h1 style={{textAlign: 'center', marginTop: '20px'}}><FontAwesomeIcon icon={faLaptopCode}/></h1>
            <h4 style={{textAlign: 'center'}}>Software Development</h4>
            <hr/>
            <ul>
              <li>NodeJS
                <ul>
                  <li>React</li>
                  <li>Express</li>
                  <li>npm</li>
                </ul>
              </li>
              <li>SQL</li>
              <li>C++</li>
              <li>PHP</li>
              <li>Web Languages
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JS</li>
                </ul>
              </li>
            </ul>
          </Col>
          <Col xs={{span: 12}}>
            <h1 style={{textAlign: 'center', marginTop: '20px'}}><FontAwesomeIcon icon={faCloud}/></h1>
            <h4 style={{textAlign: 'center'}}>Cloud Services</h4>
            <hr/>
            <ul>
              <li>Digital Ocean</li>
              <li>AWS
                <ul>
                  <li>EC2</li>
                </ul>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Services;