import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Particles from 'react-tsparticles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'



class HeroUnit extends Component {
  constructor(props) {
    super(props);

    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);
  }

  particlesInit(main) {
    console.log(main);
  }

  particlesLoaded(container) {
    console.log(container)
  }

  render() {
    return (
      <div style={{position: 'relative'}}>     
        <Particles
        style={{top: 0, left: 0}}
        id="tsparticles"
        init={this.particlesInit}
        loaded={this.particlesLoaded}
        height="40vh"
        options={{
          background: {
            color: {
              value: "#fff",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              resize: true,
            },
            modes: {
              bubble: {
                distance: 20,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 10,
              },
              repulse: {
                distance: 20,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#000",
            },
            links: {
              color: "#000",
              distance: 200,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: .5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
        
      />
      <div style={{zIndex: 9, position: 'absolute', top: 0, left: 0, width: '100%'}}>
        <h1 className={'heroTitle'}>ValleUS</h1>
        <p className={'heroText'}>IT Solutions for your buisness</p>
        <div className={'contactInfo'}>
          <p className={'contact'}><a href="tel:+13126051420"><FontAwesomeIcon icon={faPhone}/> 312-605-1420</a>&nbsp;|&nbsp;<a href="email:hello@valle.us"><FontAwesomeIcon icon={faEnvelope}/> hello@valle.us</a></p>
        </div>
      </div>
      </div>
    )
  }

}

// function HeroUnit() {
//   return 
// }

export default HeroUnit;